package com.gnd.safetravels.controllers;

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

import com.gnd.safetravels.models.Expense;
import com.gnd.safetravels.services.ExpenseService;

@Controller
@RequestMapping("/expenses")
public class ExpenseController {
	@Autowired
	ExpenseService expenseService;
	
//	CREATE
	@PostMapping("new")
	public String newExpense(@Valid @ModelAttribute("expense") Expense expense, BindingResult result) {
		if (result.hasErrors()) {
			return "index.jsp";
		}
		expenseService.saveExpense(expense);
		return "redirect:/expenses";
	}

	
//  READ
	@GetMapping("")
	public String index(@ModelAttribute("expense") Expense expense, Model model) {
		model.addAttribute("expenses", expenseService.allExpenses());
		return "index.jsp";
	}
	
	@GetMapping("{id}")
	public String showExpense(@PathVariable("id") Long id, Model model) {
		model.addAttribute("expense", expenseService.fetchBookById(id));
		return "showExpense.jsp";
	}
	
//  UPDATE
	@GetMapping("{id}/edit")
	public String editExpense(@PathVariable("id") Long id, Model model) {
		model.addAttribute("expense",expenseService.fetchBookById(id));
		return "editExpense.jsp";		
	}
	
	@PutMapping("{id}/edit")
	public String updateExpense(@Valid @ModelAttribute("expense") Expense expense,
								BindingResult result) {
		if (result.hasErrors()) {
			return "editExpense.jsp";			
		}
		expenseService.saveExpense(expense);
		return "redirect:/expenses";
	}
	
//  DELETE
	@DeleteMapping("{id}/delete")
	public String deleteExpense(@PathVariable("id") Long id) {
		expenseService.destroy(id);
		return "redirect:/expenses";
	}


}



