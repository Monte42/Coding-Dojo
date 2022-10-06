package com.gnd.motorcycles.controllers;

import javax.servlet.http.HttpSession;
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

import com.gnd.motorcycles.models.Bike;
import com.gnd.motorcycles.services.BikeService;
import com.gnd.motorcycles.services.BrandService;
import com.gnd.motorcycles.services.RyderService;

@Controller
@RequestMapping("/bikes")
public class BikeController {
	@Autowired
	BikeService bikeServe;
	@Autowired
	BrandService brandServe;
	@Autowired
	RyderService ryderServe;
	
//	CREATE
	@GetMapping("new")
	public String newBikeForm(Model model) {
		model.addAttribute("bike", new Bike());
		model.addAttribute("brands", brandServe.allBrands());
		return "bikes/newBike.jsp";
	}
	@PostMapping("new")
	public String createBike(@Valid @ModelAttribute("bike") Bike bike, 
						BindingResult result,HttpSession session,Model model
					) {
		if (bikeServe.doesBikeExist(bike)) result.rejectValue("model", "Exists", "This bike already exists.  Check all bikes to add to garage.");
		if (result.hasErrors()) {
			model.addAttribute("brands", brandServe.allBrands());
			return "bikes/newBike.jsp";
		}
		bikeServe.saveBike(bike);
		return "redirect:/ryders";
	}
	
	
//	READ
	@GetMapping("{id}")
	public String showBike(@PathVariable("id") Long id, Model model) {
		model.addAttribute("bike", bikeServe.bikeById(id));
		return "bikes/showBike.jsp";
	}
	@GetMapping("edit/{id}")
	public String editBike(@PathVariable("id") Long id, Model  model) {
		model.addAttribute("bike", bikeServe.bikeById(id));
		model.addAttribute("brands", brandServe.allBrands());
		return "bikes/editBike.jsp";
	}
	
	
//	UPDATE
	@PutMapping("edit/{id}")
	public String updateBike(@Valid @ModelAttribute("bike") Bike bike, 
						BindingResult result, @PathVariable("id") Long id,Model model
					) {
		if (result.hasErrors()) {
			model.addAttribute("brands", brandServe.allBrands());
			return "bikes/editBike.jsp";
		}
		bikeServe.saveBike(bike);
		return "redirect:/bikes/"+id;
	}
	
	
//	DELETE
	@DeleteMapping("delete/{id}")
	public String deleteBike(@PathVariable("id") Long id) {
		bikeServe.destroyBike(id);
		return "redirect:/ryders";
	}

}
