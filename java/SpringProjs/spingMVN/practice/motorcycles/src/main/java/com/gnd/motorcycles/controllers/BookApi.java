package com.gnd.motorcycles.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.gnd.motorcycles.models.Book;
import com.gnd.motorcycles.services.BookService;

@RestController
@RequestMapping("/api")
public class BookApi {
	private final BookService bookService;
	
	public BookApi(BookService bookservice) {
		this.bookService = bookservice;
	}
	
	@RequestMapping("books")
	public List<Book> index(){
		return bookService.allBooks();
	}
	@RequestMapping(value="books", method=RequestMethod.POST)
    public Book create(@RequestParam(value="title") String title, 
    				@RequestParam(value="description") String desc, 
    				@RequestParam(value="language") String lang, 
    				@RequestParam(value="pages") Integer numOfPages) {
        Book book = new Book(title, desc, lang, numOfPages);
        return bookService.createBook(book);
    }
    
    @RequestMapping("books/{id}")
    public Book show(@PathVariable("id") Long id) {
        Book book = bookService.findBook(id);
        return book;
    }
    @RequestMapping(value="books/{id}/update", method=RequestMethod.POST)
    public Book update(@RequestParam(value="title") String title, 
    				@RequestParam(value="description") String desc, 
    				@RequestParam(value="language") String lang, 
    				@RequestParam(value="pages") Integer numOfPages,
    				@PathVariable("id") Long id) {
        Book book = new Book(id, title, desc, lang, numOfPages );
        return bookService.updateBook(book);
    }
    @RequestMapping("books/{id}/delete")
    public void delete(@PathVariable("id") Long id) {
    	bookService.destroy(id);
    }
}
