package com.gnd.hoppers.controllers;

import java.util.ArrayList;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {
	@RequestMapping("/")
	public String index(Model model) {
		
		String name = "Max A. Million";
        String itemName = "200ft Yaht";
        double price = 500000.25;
        String description = "Metal strips, also an illustration of nanoseconds.";
        String vendor = "Little Things Corner Store";
        ArrayList<String> vehicles = new ArrayList<>();
        vehicles.add("Chevy s10");
        vehicles.add("Chevy Corvette");
        vehicles.add("Jeep Cheerokee");
        vehicles.add("Suzuki S83");
        vehicles.add("Kawasaki ZX-6R");

        model.addAttribute("name", name);
        model.addAttribute("itemName", itemName);
        model.addAttribute("price", price);
        model.addAttribute("description", description);
        model.addAttribute("vendor", vendor);
        model.addAttribute("vehicles", vehicles);
        
		return "index.jsp";
	}
}
