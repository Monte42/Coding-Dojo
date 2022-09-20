package com.gnd.motorcycles.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.gnd.motorcycles.models.Book;
import com.gnd.motorcycles.repositories.BookRepository;



@Service
public class BookService {
	private final BookRepository bookRepository;
	
	public BookService(BookRepository bookRepo) {
		this.bookRepository = bookRepo;
	}
	
	// returns all the books
    public List<Book> allBooks() {
        return bookRepository.findAll();
    }
    // creates a book
    public Book createBook(Book b) {
        return bookRepository.save(b);
    }
    // retrieves a book
    public Book findBook(Long id) {
        Optional<Book> optionalBook = bookRepository.findById(id);
        if(optionalBook.isPresent()) {
            return optionalBook.get();
        } else {
            return null;
        }
    }
    // update a book
    public Book updateBook(Book b) {
    	return bookRepository.save(b);
    }
    // delete a book
    public void deleteBookById(Long id) {
    	bookRepository.deleteById(id);
    }
}
