package com.gnd.authentication.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import com.gnd.authentication.models.LoginUser;
import com.gnd.authentication.models.User;
import com.gnd.authentication.services.UserService;

@Controller
public class AuthenticaionController {
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
		User user = userServe.register(newUser);
		session.setAttribute("userId", user.getId());
		return "redirect:/books";
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
		session.setAttribute("userId", userServe.userByEmail(newLogin.getEmail()).getId());
		return "redirect:/books";
	}
	// Logout
	@GetMapping("/logout")
	public String logout(HttpSession session, Model model) {
		session.removeAttribute("username");
		return "redirect:/";
	}
	
	
}
