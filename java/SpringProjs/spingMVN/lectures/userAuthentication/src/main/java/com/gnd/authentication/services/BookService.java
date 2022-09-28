package com.gnd.authentication.services;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gnd.authentication.models.Book;
import com.gnd.authentication.repository.BookRepository;


@Service
public class BookService {
	@Autowired
	BookRepository bookRepo;
	@Autowired
	UserService userServe;
	
//	CREATE / UPDATE
	public Book saveBook(Book book, HttpSession session) {
		book.setPostedBy(userServe.userById((Long) session.getAttribute("userId")));
		return bookRepo.save(book);
	}
	
	
//	READ
	public List<Book> allBooks(){
		return bookRepo.findAll();
	}
	
	public Book bookById(Long id) {
		return bookRepo.findById(id).orElse(null);
	}
	
	
//	DELETE
	public void destroy(Long id) {
		bookRepo.deleteById(id);
	}
	
	
	
	
	
}
