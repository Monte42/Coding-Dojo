package com.gnd.dojos.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.gnd.dojos.models.Dojo;
import com.gnd.dojos.services.DojoService;

@Controller
@RequestMapping("dojos")
public class DojoController {
	@Autowired
	DojoService dojoServe;
	
	
//	CREATE / UPDATE
	@GetMapping("new")
	public String createDojoForm(@ModelAttribute("dojo") Dojo dojo) {
		return "dojos/newDojo.jsp";
	}
	@PostMapping("new")
	public String createDojo(
					@Valid @ModelAttribute("dojo") Dojo dojo,
					BindingResult result) {
		if (result.hasErrors()) {
			return "dojos/newDojo.jsp";
		}
		dojoServe.saveDojo(dojo);
		return "redirect:/dojos";
	}
	
	
	
//	READ
	@GetMapping("")
	public String homePage(Model model) {
		model.addAttribute("dojos", dojoServe.allDojos());
		return "index.jsp";
	}
	@GetMapping("/{dojoId}")
	public String showDojo(@PathVariable Long dojoId, Model model) {
		model.addAttribute("dojo", dojoServe.DojoById(dojoId));
		return "dojos/showDojo.jsp";
	}
}
