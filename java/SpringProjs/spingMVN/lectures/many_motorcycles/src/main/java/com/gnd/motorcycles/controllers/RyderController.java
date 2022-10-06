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
import org.springframework.web.bind.annotation.RequestParam;

import com.gnd.motorcycles.models.Bike;
import com.gnd.motorcycles.models.Ryder;
import com.gnd.motorcycles.models.UpdateRyder;
import com.gnd.motorcycles.services.BikeService;
import com.gnd.motorcycles.services.RyderService;

@Controller
@RequestMapping("/ryders")
public class RyderController {
	@Autowired
	RyderService ryderServe;
	@Autowired
	BikeService bikeServe;
	
	
//	HOME PAGE
	@GetMapping("")
	public String home(Model model, HttpSession session) {
		if (session.getAttribute("userId")==null) return "index.jsp";
		model.addAttribute("ryders", ryderServe.allRyders());
		model.addAttribute("bikes", bikeServe.allBikes());
		return "ryders/home.jsp";
	}
	
//	CREATE MANY TO MANY RELATIONS
	@GetMapping("my_garage")
	public String myGarage(Model model, HttpSession session) {
		if (session.getAttribute("userId")==null) return "index.jsp";
		Ryder ryder = ryderServe.ryderById((Long) session.getAttribute("userId"));
		model.addAttribute("bikesInGarage", bikeServe.getAssignedRyders(ryder));
		model.addAttribute("bikesNotInGarage", bikeServe.getUnassignedRyders(ryder));
		model.addAttribute("ryder", ryder);
		return "ryders/myGarage.jsp";
	}
	@PostMapping("add_bike")
	public String addBikeToGarage(HttpSession session, Model model,
								@RequestParam("bikeId") Long id
							) {
		if (session.getAttribute("userId")==null) return "index.jsp";
		Ryder ryder = ryderServe.ryderById((Long) session.getAttribute("userId"));
		Bike bike = bikeServe.bikeById(id);
		ryder.getBikes().add(bike);
		ryderServe.saveRyder(ryder);
		model.addAttribute("bikesInGarage", bikeServe.getAssignedRyders(ryder));
		model.addAttribute("bikesNotInGarage", bikeServe.getUnassignedRyders(ryder));
		model.addAttribute("ryder", ryder);
		return "redirect:/ryders/my_garage";
	}
	
	
//	READ
	@GetMapping("{id}")
	public String showRyder(HttpSession session,Model model,@PathVariable("id") Long id) {
		if (session.getAttribute("userId")==null) return "index.jsp";
		model.addAttribute("ryder", ryderServe.ryderById(id));
		return "ryders/showRyder.jsp";
	}
	
	
//	UPDATE
	@GetMapping("edit/{id}")
	public String editRyder(Model model,HttpSession session,
							@PathVariable("id") Long id) {
		model.addAttribute("ryder", ryderServe.ryderById(id));
		if (!session.getAttribute("userId").equals(id)) return "redirect:/ryders";
		return "ryders/editRyder.jsp";
	}
	@PutMapping("edit/{id}")
	public String updateRyder(@Valid @ModelAttribute("ryder") UpdateRyder ryder,
						BindingResult result, @PathVariable("id") Long id, HttpSession session) {
		if (!session.getAttribute("userId").equals(id)) return "redirect:/ryders";
		if (result.hasErrors()) {
			return "ryders/editRyder.jsp";
		}
		ryderServe.updateRyder(ryder);
		Ryder updatedRyder = ryderServe.ryderById(id);
		session.setAttribute("username", updatedRyder.getUsername());
		return "redirect:/ryders/"+id;
	}
	
	
//	DELETE
	@DeleteMapping("delete/{id}")
	public String deleteUser(@PathVariable("id") Long id, HttpSession session) {
		if (!session.getAttribute("userId").equals(id)) return "redirect:/ryders";
		if (session.getAttribute("userId").equals(id)) ryderServe.destroyRyder(id);
		session.removeAttribute("username");
		session.removeAttribute("userId");
		return "redirect:/";
	}
	
	
}
