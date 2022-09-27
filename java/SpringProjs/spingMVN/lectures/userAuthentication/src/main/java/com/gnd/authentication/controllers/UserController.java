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

import com.gnd.authentication.models.LoginUser;
import com.gnd.authentication.models.User;
import com.gnd.authentication.services.UserService;

@Controller
public class UserController {
	@Autowired
	private UserService userServe;
	
	
//	CREATE
	@GetMapping("")
	public String index(Model model, HttpSession session) {
		if (session.getAttribute("username")!=null) return "redirect:/home";
		model.addAttribute("newUser", new User());
		model.addAttribute("newLogin", new LoginUser());
		return "index.jsp";
	}
	// Register
	@PostMapping("/register")
	public String register(
					@Valid @ModelAttribute("newUser") User newUser,
					BindingResult result,HttpSession session,
					Model model
				) {
		if (userServe.userByEmail(newUser.getEmail())!=null) result.rejectValue("email", "Exists", "Email Taken");
		if (!newUser.getPassword().equals(newUser.getConfirm())) result.rejectValue("confirm", "Matches", "Passwords dont match");
		if (result.hasErrors()) {
			System.out.println("errors");
			model.addAttribute("newLogin", new LoginUser());
			return "index.jsp";
		}
		userServe.register(newUser);
		session.setAttribute("username", newUser.getUsername());
		return "redirect:/home";
	}
	// Login
	@PostMapping("/login")
	public String login(
			@Valid @ModelAttribute("newLogin") LoginUser newLogin,
			BindingResult result,HttpSession session,
			Model model
			) {
		if (userServe.login(newLogin)) result.rejectValue("email", "Invalid", "Invalid username or password");
		if (result.hasErrors()) {
			model.addAttribute("newUser", new User());
			return "index.jsp";
		}
		session.setAttribute("username", userServe.userByEmail(newLogin.getEmail()).getUsername());
		return "redirect:/home";
	}
	// Logout
	@GetMapping("/logout")
	public String logout(HttpSession session, Model model) {
		session.removeAttribute("username");
		return "redirect:/";
	}
	
	
	
//	READ
	@GetMapping("/home")
	public String home(Model model, HttpSession session) {
		if (session.getAttribute("username")==null) return "redirect:/";
		model.addAttribute("users", userServe.allUsers());
		return "home.jsp";
	}
	
	@GetMapping("/{id}")
	public String showUser(@PathVariable Long id, Model model) {
		model.addAttribute("user", userServe.userById(id));
		return "showUser.jsp";
	}
	
//	UPDATE
	@GetMapping("/edit{id}")
	public String editUser(@ModelAttribute("user") User user) {
		return "editUser.jsp";
	}
	
	@PutMapping("/edit/{id}")
	public String updateUser(@Valid @ModelAttribute("user") User user, BindingResult result, @PathVariable("id") Long id) {
		if (result.hasErrors()) {
			return "editUser.jsp";
		}
		userServe.updateUser(user);
		return "redirect:/"+id;
	}

//  DELETE
	@DeleteMapping("/delete/{id}")
	public void deleteUser(@PathVariable Long id) {
		userServe.destroy(id);
	}


}
