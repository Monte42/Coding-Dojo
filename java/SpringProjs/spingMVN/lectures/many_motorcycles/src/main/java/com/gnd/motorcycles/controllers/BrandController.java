package com.gnd.motorcycles.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.gnd.motorcycles.models.Brand;
import com.gnd.motorcycles.services.BrandService;

@Controller
@RequestMapping("/brands")
public class BrandController {
	@Autowired
	BrandService brandServe;
	
	@GetMapping("new")
	public String newBrandForm(@ModelAttribute("newBrand") Brand brand, HttpSession session) {
		if (session.getAttribute("userId")==null) return "index.jsp";
		return "brands/newBrand.jsp";
	}
	
	@PostMapping("new")
	public String createBrand(@Valid @ModelAttribute("newBrand") Brand brand, BindingResult result) {
		if (brandServe.brandByName(brand.getName())!=null) result.rejectValue("name", "Exists", "This Brand Already Exists");
		if (result.hasErrors()) {
			return "brands/newBrand.jsp";
		}
		brandServe.saveBrand(brand);
		return "redirect:/ryders";
	}
	
	@GetMapping("edit/{id}")
	public String editBrand() {
		return "brands/editBrand.jsp";
	}
}
