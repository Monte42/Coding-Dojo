package com.gnd.fruitloop.controllers;

import java.util.ArrayList;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.gnd.fruitloop.models.Item;

@Controller
public class MainController {
	@RequestMapping("/")
	public String index(Model model) {
		ArrayList<Item> items = new ArrayList<>();
		items.add(new Item("KeyBoard", 15.00));
		items.add(new Item("Mouse", 5.00));
		items.add(new Item("Monitor", 150.00));
		items.add(new Item("Coffee", 2.95));
		
		model.addAttribute("purchasedItems", items);
		return "index.jsp";
	}
}
