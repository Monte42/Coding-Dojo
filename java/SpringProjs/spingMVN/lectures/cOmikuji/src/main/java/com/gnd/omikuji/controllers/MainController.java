package com.gnd.omikuji.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/omikuji")
public class MainController {
	
	@GetMapping("")
	public String home(HttpSession session) {
		return "omikujiForm.jsp";
	}

	@GetMapping("/show")
	public String show(HttpSession session) {
		return "showOmikuji.jsp";
	}
	
	@PostMapping("/send")
	public String submit(HttpSession session,Model model,
				@RequestParam(value="from") String from,
				@RequestParam(value="years") String years,
				@RequestParam(value="city") String city,
				@RequestParam(value="name") String name,
				@RequestParam(value="hobby") String hobby,
				@RequestParam(value="livingThing") String livingThing,
				@RequestParam(value="nice") String nice) {		
		session.setAttribute("from", from);
		session.setAttribute("years", years);
		session.setAttribute("city", city);
		session.setAttribute("name", name);
		session.setAttribute("hobby", hobby);
		session.setAttribute("livingThing", livingThing);
		session.setAttribute("nice", nice);
		return "redirect:/omikuji/show";
	}
}
