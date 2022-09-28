package com.gnd.authentication.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.gnd.authentication.models.Book;
import com.gnd.authentication.services.BookService;
import com.gnd.authentication.services.UserService;

@Controller
@RequestMapping("/books")
public class BookController {
	@Autowired
	UserService userServe;
	
	@Autowired
	BookService bookServe;
	
	
//	CREATE
	@GetMapping("/new")
	public String bookForm(@ModelAttribute("book") Book book) {
		return "books/newBook.jsp";
	}
	@PostMapping("/new")
	public String createBook(@Valid @ModelAttribute("book") Book book, BindingResult result, HttpSession session) {
		
		if (result.hasErrors()) {
			return "books/newBook.jsp";
		}
		bookServe.saveBook(book, session);
		return "redirect:/books";
	}
	
	
//	READ
	@GetMapping("")
	public String homePage(Model model) {
		model.addAttribute("books", bookServe.allBooks());
		return "books/home.jsp";
	}
	@GetMapping("{id}")
	public String showBook(@PathVariable Long id, Model model) {
		model.addAttribute("book", bookServe.bookById(id));
		return "books/showBook.jsp";
	}
	
	
//	UPDATE
	@GetMapping("edit/{id}")
	public String editBook(@PathVariable Long id, Model model) {
		model.addAttribute("book", bookServe.bookById(id));
		return "books/editBook.jsp";
		
	}
	@PutMapping("/edit/{id}")
	public String updateBook(
					@Valid @ModelAttribute("book") Book book, 
					BindingResult result,
					@PathVariable Long id	) {
		if (result.hasErrors()) {
			return "books/editBook.jsp";
		}
		return "redirect:/"+id;
	}
	
//	DELETE
	@DeleteMapping("/delete/{id}")
	public String deleteBook(@PathVariable Long id) {
		bookServe.destroy(id);
		return "redirect:/books";
	}
	
}
