package com.gnd.belt.controllers;

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

import com.gnd.belt.models.UpdateUser;
import com.gnd.belt.models.User;
import com.gnd.belt.services.UserService;

@Controller
@RequestMapping("users")
public class UserController {
	@Autowired
	UserService userServe;
	
//	READ
	@GetMapping("{id}")
	public String showUser(HttpSession session,Model model,@PathVariable("id") Long id) {
		if (session.getAttribute("userId")==null) return "redirect:/";
		model.addAttribute("user", userServe.userById(id));
		return "users/showUser.jsp";
	}
	
	
//	UPDATE
	@GetMapping("edit/{id}")
	public String editUser(Model model,HttpSession session,
							@PathVariable("id") Long id) {
		if (!session.getAttribute("userId").equals(id)) return "redirect:/";
		model.addAttribute("user", userServe.userById(id));
		return "users/editUser.jsp";
	}
	@PutMapping("edit/{id}")
	public String updateUser(@Valid @ModelAttribute("user") UpdateUser user,
						BindingResult result, @PathVariable("id") Long id, HttpSession session) {
		if (!session.getAttribute("userId").equals(id)) return "redirect:/dashboard";
		if (result.hasErrors()) {
			return "user/editUser.jsp";
		}
		userServe.updateUser(user);
		User updatedUser = userServe.userById(id);
		session.setAttribute("username", updatedUser.getUsername());
		return "redirect:/users/"+id;
	}
	
	
//	DELETE
	@DeleteMapping("delete/{id}")
	public String deleteUser(@PathVariable("id") Long id, HttpSession session) {
		if (!session.getAttribute("userId").equals(id)) return "redirect:/dashboard";
		if (session.getAttribute("userId").equals(id)) userServe.destroyUser(id);
		session.removeAttribute("username");
		session.removeAttribute("userId");
		return "redirect:/";
	}
}
