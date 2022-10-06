package com.gnd.motorcycles.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.gnd.motorcycles.models.LoginRyder;
import com.gnd.motorcycles.models.Ryder;
import com.gnd.motorcycles.services.RyderService;

@Controller
public class MainController {
	@Autowired
	RyderService ryderServe;
	
//	LOGIN / REGISTER PAGE
	@GetMapping("")
	public String index(Model model, HttpSession session) {
		if (session.getAttribute("userId")!=null) return "redirect:/ryders";
		model.addAttribute("newRyder", new Ryder());
		model.addAttribute("newLogin", new LoginRyder());
		return "index.jsp";
	}
	
	
//	CREATE
	@PostMapping("register")
	public String register(@Valid @ModelAttribute("newRyder") Ryder newRyder,
						BindingResult result, HttpSession session,Model model
					) {
		Ryder ryder = ryderServe.register(newRyder, result);
		if (result.hasErrors()) {
			model.addAttribute("newLogin", new LoginRyder());
			return "index.jsp";
		}
		session.setAttribute("userId", ryder.getId());
		session.setAttribute("username", ryder.getUsername());
		return "redirect:/ryders";
	}
	
	
//	LOGIN
	@PostMapping("login")
	public String login(@Valid @ModelAttribute("newLogin") LoginRyder newLogin,
					BindingResult result, HttpSession session, Model model
				) {
		if (ryderServe.login(newLogin)) result.rejectValue("email", "Invalid", "Invalid username or password");
		if (result.hasErrors()) {
			model.addAttribute("newRyder", new Ryder());
			return "index.jsp";
		}
		session.setAttribute("userId", ryderServe.ryderByEmail(newLogin.getEmail()).getId());
		session.setAttribute("username", ryderServe.ryderByEmail(newLogin.getEmail()).getUsername());
		return "redirect:/ryders";
	}
	
	
//	LOGOUT
	@GetMapping("/logout")
	public String logout(HttpSession session, Model model) {
		session.removeAttribute("username");
		session.removeAttribute("userId");
		return "redirect:/";
	}
	
}
