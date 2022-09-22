package com.gnd.motorcycles.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.gnd.motorcycles.models.Book;
import com.gnd.motorcycles.services.BookService;

@Controller
@RequestMapping("/books")
public class MainController {
	@Autowired
	BookService bookService;
	
	
//	CREATE
	@GetMapping("create")
	public String createBook(@ModelAttribute("book") Book book) {
		return "newBook.jsp";
	}
	
	@PostMapping("create")
	public String createBook(@Valid @ModelAttribute("book") Book book, BindingResult result) {
		System.out.println(book);
		System.out.println(result);
		if (result.hasErrors()) {
			return "newBook.jsp";
		}else {
			bookService.createBook(book);
			return "redirect:/books";			
		}
	}
	
	
	
	
//  READ
	@GetMapping("")
	public String index(Model model) {
		List<Book> books = bookService.allBooks();
		for (Book book : books) {
			System.out.println(book);
		}
		model.addAttribute("books", books);
		return "index.jsp";
	}
	
	@GetMapping("/{bookId}")
	public String showBook(Model model, 
					@PathVariable("bookId") Long bookId) {
		Book book = bookService.findBook(bookId);
		model.addAttribute(book);
		return "showBook.jsp";
	}
}
