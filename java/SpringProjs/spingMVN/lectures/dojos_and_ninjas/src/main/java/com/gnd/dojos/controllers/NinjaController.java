package com.gnd.dojos.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.gnd.dojos.models.Ninja;
import com.gnd.dojos.services.DojoService;
import com.gnd.dojos.services.NinjaService;

@Controller
@RequestMapping("/ninjas")
public class NinjaController {
	@Autowired
	DojoService dojoServe;
	@Autowired
	NinjaService ninjaServe;


	@GetMapping("new")
	public String createNinjaForm(@ModelAttribute("ninja") Ninja ninja, Model model) {
		model.addAttribute("dojos", dojoServe.allDojos());
		return "ninjas/newNinja.jsp";
	}
	
	@PostMapping("/new")
	public String createNinja(@Valid @ModelAttribute("ninja")Ninja ninja,
						BindingResult result, Model model) {
		if (result.hasErrors()) {
			model.addAttribute("dojos", dojoServe.allDojos());
			return "ninjas/newNinja.jsp";
		}
		ninjaServe.saveNinja(ninja);
		return "redirect:/dojos";
	}
}
