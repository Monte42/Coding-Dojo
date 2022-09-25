package com.gnd.ninja.gold.controllers;

import java.util.ArrayList;
import java.util.Date;
import java.util.Random;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
public class MainController {
	Random randGen = new Random();
	

	@GetMapping("/gold")
	public String dashboard(HttpSession session) {
		if (session.getAttribute("gold")==null) {
			session.setAttribute("gold", 0);
			session.setAttribute("actions", new ArrayList<String[]>());
		}
		
		if ((int) session.getAttribute("gold") < -200){
			return "debtorPrison.jsp";
		}
		return "index.jsp";
	}
	
	
	
	@PostMapping("/gold/{min}/{max}")
	public String getGold(HttpSession session,
						RedirectAttributes redirectAttrs,
						@PathVariable("min") String min,
						@PathVariable("max") String max,
						@RequestParam("task") String task) {
		int gold = randGen.nextInt(Integer.parseInt(min), Integer.parseInt(max));
		String msg = "";
		Date date = new Date();
		ArrayList<String[]> arr = (ArrayList<String[]>)session.getAttribute("actions");
		if (task.equals("quest")) {
			if (gold>0) {
				msg += String.format("You compleated the quest and recived %d gold! -- %s", gold, date);			
				arr.add(new String[] {msg, "green"});
			} else {
				msg += String.format("You failed the quest and lost %d gold! -- %s", gold, date);
				arr.add(new String[] {msg, "red"});
			}
		} else if (task.equals("spa")) {
			msg += String.format("You went to the spa and spent %d gold! -- %s", gold, date);
			arr.add(new String[] {msg, "red"});
		} else {
			msg += String.format("You entered a %s and earned %d gold! -- %s",task,  gold, date);
			arr.add(new String[] {msg, "green"});
		}
		
		redirectAttrs.addFlashAttribute("msg", msg);
		session.setAttribute("actions", arr);
		session.setAttribute("gold", gold+(int) session.getAttribute("gold"));
		return "redirect:/gold";
	}
	
	@GetMapping("/reset")
	public String reset(HttpSession session) {
		session.removeAttribute("gold");
		session.removeAttribute("actions");
		return "redirect:/gold";
	}
}
