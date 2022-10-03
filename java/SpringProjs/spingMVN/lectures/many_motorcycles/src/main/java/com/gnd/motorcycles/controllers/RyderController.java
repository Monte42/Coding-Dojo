package com.gnd.motorcycles.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.gnd.motorcycles.services.RyderService;

@Controller
@RequestMapping("/ryders")
public class RyderController {
	@Autowired
	RyderService ryderServe;
	
	@GetMapping("")
	public String home() {
		return "ryders/home.jsp";
	}
	
}
