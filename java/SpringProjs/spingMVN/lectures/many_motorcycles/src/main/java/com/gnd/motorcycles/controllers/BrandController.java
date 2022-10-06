package com.gnd.motorcycles.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.gnd.motorcycles.models.Brand;
import com.gnd.motorcycles.services.BrandService;

@Controller
@RequestMapping("/brands")
public class BrandController {
	@Autowired
	BrandService brandServe;
	
	
//	CREATE
	@GetMapping("new")
	public String newBrandForm(@ModelAttribute("newBrand") Brand brand, HttpSession session) {
		if (session.getAttribute("userId")==null) return "index.jsp";
		return "brands/newBrand.jsp";
	}
	
	@PostMapping("new")
	public String createBrand(@Valid @ModelAttribute("newBrand") Brand brand, BindingResult result) {
		if (brandServe.brandByName(brand.getName())!=null) result.rejectValue("name", "Exists", "This Brand Already Exists");
		if (result.hasErrors()) return "brands/newBrand.jsp";
		brandServe.saveBrand(brand);
		return "redirect:/ryders";
	}
	
	
//	Edit
	@GetMapping("edit/{id}")
	public String editBrand(Model model, @PathVariable("id") Long id) {
		model.addAttribute("brand", brandServe.brandById(id));
		return "brands/editBrand.jsp";
	}
	@PutMapping("edit/{id}")
	public String updateBrand(@Valid @ModelAttribute("brand") Brand brand, BindingResult result) {
		if (result.hasErrors()) return "brands/editBrand.jsp";
		return "redirect:/ryders";
	}
	
	
}
