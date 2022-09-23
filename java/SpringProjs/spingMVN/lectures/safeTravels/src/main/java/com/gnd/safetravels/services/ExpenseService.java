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
	
//	CREATE // Update
	public Expense saveExpense(Expense e) {
		return expenseRepo.save(e);
	}
	
//	READ
	public List<Expense> allExpenses(){
		return expenseRepo.findAll();
	}
	
	public Expense fetchBookById(Long id) {
		return expenseRepo.findById(id).orElse(null);
	}
	
//	DELETE
	public void destroy(Long id) {
		expenseRepo.deleteById(id);
	}
}

