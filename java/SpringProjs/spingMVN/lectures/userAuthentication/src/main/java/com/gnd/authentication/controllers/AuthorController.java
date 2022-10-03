package com.gnd.authentication.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.gnd.authentication.models.Author;
import com.gnd.authentication.services.AuthorService;

@Controller
@RequestMapping("/authors")
public class AuthorController {
	@Autowired
	AuthorService aServe;
	
	
	@GetMapping("/new")
	public String newAuthForm(@ModelAttribute("auth") Author auth) {
		return "authors/newAuth.jsp";
	}
	
	@PostMapping("/new")
	public String createAuth(@Valid @ModelAttribute("auth") Author auth, BindingResult result) {
		System.out.println(auth.getName());
		if (result.hasErrors()) {
			return "authors/newAuth.jsp";
		}
		aServe.saveAuthor(auth);
		return "redirect:/books/new";
	}




















}
