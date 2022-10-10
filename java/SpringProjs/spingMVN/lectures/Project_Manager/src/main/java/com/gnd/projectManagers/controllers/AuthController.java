package com.gnd.projectManagers.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.gnd.projectManagers.models.LoginUser;
import com.gnd.projectManagers.models.User;

@Controller
public class AuthController {
	@GetMapping("")
	public String index(HttpSession session, Model model) {
		model.addAttribute("newUser", new User());
		model.addAttribute("newLogin", new LoginUser());
		return "index.jsp";
	}
	
	
	
	
	
	
	@GetMapping("dashboard")
	public String home(HttpSession session) {
		return "home.jsp";
	}
}
