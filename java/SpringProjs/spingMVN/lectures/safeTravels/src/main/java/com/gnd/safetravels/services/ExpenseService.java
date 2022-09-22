package com.gnd.safetravels.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.gnd.safetravels.models.Expense;
import com.gnd.safetravels.repository.ExpenseRepository;

@Service
public class ExpenseService {
	private final ExpenseRepository expenseRepo;
	
	public ExpenseService(ExpenseRepository expenseRepo) {
		this.expenseRepo = expenseRepo;
	}
	
	public Expense createExpense(Expense e) {
		return expenseRepo.save(e);
	}
	
	public List<Expense> allExpenses(){
		return expenseRepo.findAll();
	}
}
