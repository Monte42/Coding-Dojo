package com.gnd.counter.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class MainController {
	@RequestMapping("/login")
	public String loginPage() {
		return "login.jsp";
	}
	
	@RequestMapping(value="/login", method=RequestMethod.POST)
	public String login(
			@RequestParam(value="email") String email,
			@RequestParam(value="password") String password,
			HttpSession session) {
		session.setAttribute("email", email);
		return "redirect:/";
	}
	
	@RequestMapping("/")
	public String homePage(HttpSession session) {
		if (session.getAttribute("count")==null) {
			session.setAttribute("count", 0);
		}
		int count = (int) session.getAttribute("count");
		session.setAttribute("count", count+1);
		return "index.jsp";
	}
	
	@RequestMapping("/double")
	public String doublePage(HttpSession session) {
		if (session.getAttribute("count")==null) {
			session.setAttribute("count", 0);
		}
		int count = (int) session.getAttribute("count");
		session.setAttribute("count", count+2);
		return "double.jsp";
	}
	
	@RequestMapping("/counter")
	public String aboutPage(HttpSession session, Model model) {
		model.addAttribute("count", session.getAttribute("count"));
		return "about.jsp";
	}
	
	@RequestMapping("/logout")
	public String logout(HttpSession session) {
		session.removeAttribute("count");
		session.removeAttribute("email");
		return "redirect:/login";
	}
}
