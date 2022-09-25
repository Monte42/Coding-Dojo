package com.gnd.languages.controllers;

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
import org.springframework.web.bind.annotation.RequestMapping;

import com.gnd.languages.models.Language;
import com.gnd.languages.services.LanguageService;

@Controller
@RequestMapping("/languages")
public class LanguageController {
	@Autowired
	LanguageService langServe;
	
//	Create
	@PostMapping("new")
	public String createLanguage(@Valid @ModelAttribute("language") Language lang, 
				BindingResult result,Model model) {
		if (result.hasErrors()) {
			model.addAttribute("languages", langServe.allLanguages());
			return "index.jsp";
		}
		langServe.saveLanguage(lang);
		return "redirect:/languages";
	}
	
//	Read
	@GetMapping("")
	public String homePage(@ModelAttribute("language") Language language, Model model) {
		model.addAttribute("languages", langServe.allLanguages());
		return "index.jsp";
	}
	@GetMapping("{id}")
	public String showLanguage(Model model, @PathVariable("id") Long id) {
		model.addAttribute("language", langServe.findLanguageById(id));
		return "showLang.jsp";
	}
	
//	Update
	@GetMapping("edit/{id}")
	public String editLang(@PathVariable("id") Long id, Model model) {
		model.addAttribute("language", langServe.findLanguageById(id));
		return "editLang.jsp";
	}
	@PutMapping("edit/{id}")
	public String updateLang(@Valid @ModelAttribute("language") Language language, 
				BindingResult result, Model model, @PathVariable("id") Long id) {
		if (result.hasErrors()) {
			model.addAttribute("language", langServe.findLanguageById(id));
			return "editLang.jsp";
		}
		langServe.saveLanguage(language);
		return "redirect:/languages";
	}
	
//	Delete
	@DeleteMapping("delete/{id}")
	public String deleteLang(@PathVariable("id") Long id) {
		langServe.destroy(id);
		return "redirect:/languages";
	}



}
