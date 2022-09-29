package com.gnd.authentication.controllers;

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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.gnd.authentication.models.UpdateUser;
import com.gnd.authentication.models.User;
import com.gnd.authentication.services.UserService;

@Controller
@RequestMapping("/users")
public class UserController {
	@Autowired
	private UserService userServe;
		
	
//	READ
	
	@GetMapping("{id}")
	public String showUser(@PathVariable Long id, Model model, HttpSession session) {
		model.addAttribute("user", userServe.userById(id));
		return "users/showUser.jsp";
	}
	
//	UPDATE
	@GetMapping("/edit/{id}")
	public String editUser(Model model,@PathVariable Long id, HttpSession session) {
		model.addAttribute("user", userServe.userById(id));
		if (session.getAttribute("userId").equals(id)) return "users/editUser.jsp";
		return "redirect:/books";
	}
	@PutMapping("edit/{id}")
	public String updateUser(@Valid @ModelAttribute("user") UpdateUser user, BindingResult result, @PathVariable Long id, HttpSession session) {
		if (!session.getAttribute("userId").equals(id)) return "redirect:/books";
		if (result.hasErrors()) {
			return "users/editUser.jsp";
		}
		userServe.updateUser(user);
		User updateUser = userServe.userById(id);
		session.setAttribute("username", updateUser.getUsername());
		return "redirect:/books";
	}

//  DELETE
	@DeleteMapping("delete/{id}")
	public String deleteUser(@PathVariable Long id, HttpSession session) {
		if (session.getAttribute("userId") == id) { 
			userServe.destroy(id);
		}
		session.removeAttribute("username");
		session.removeAttribute("userId");
		return "redirect:/";
	}


}
