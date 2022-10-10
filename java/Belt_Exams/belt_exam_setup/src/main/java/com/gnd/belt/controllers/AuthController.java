package com.gnd.belt.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.gnd.belt.models.LoginUser;
import com.gnd.belt.models.User;
import com.gnd.belt.services.UserService;


@Controller
public class AuthController {
	@Autowired
	UserService userServe;
	
	@GetMapping("")
	public String index(Model model, HttpSession session) {
		if (session.getAttribute("userId")!=null) return "redirect:/dashboard";
		model.addAttribute("newUser", new User());
		model.addAttribute("newLogin", new LoginUser());
		return "index.jsp";
	}
	
//	CREATE
	@PostMapping("register")
	public String register(@Valid @ModelAttribute("newUser") User newUser,
						BindingResult result, HttpSession session,Model model
					) {
		User user = userServe.register(newUser, result);
		if (result.hasErrors()) {
			model.addAttribute("newLogin", new LoginUser());
			return "index.jsp";
		}
		session.setAttribute("userId", user.getId());
		session.setAttribute("username", user.getUsername());
		return "redirect:/dashboard";
	}
	
	
//	LOGIN
	@PostMapping("login")
	public String login(@Valid @ModelAttribute("newLogin") LoginUser newLogin,
					BindingResult result, HttpSession session, Model model
				) {
		if (userServe.login(newLogin)) result.rejectValue("email", "Invalid", "Invalid username or password");
		if (result.hasErrors()) {
			model.addAttribute("newUser", new User());
			return "index.jsp";
		}
		session.setAttribute("userId", userServe.userByEmail(newLogin.getEmail()).getId());
		session.setAttribute("username", userServe.userByEmail(newLogin.getEmail()).getUsername());
		return "redirect:/dashboard";
	}
	
	
//	LOGOUT
	@GetMapping("/logout")
	public String logout(HttpSession session, Model model) {
		session.removeAttribute("username");
		session.removeAttribute("userId");
		return "redirect:/";
	}
	
	
//	Home Page
	@GetMapping("dashboard")
	public String home(HttpSession session) {
		if (session.getAttribute("userId")==null) return "redirect:/";
		return "home.jsp";
	}
	
	
	
	
}
