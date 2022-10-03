package com.gnd.dojos.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.gnd.dojos.models.Dojo;
import com.gnd.dojos.repositories.DojoRepository;

@Service
public class DojoService {
	private final DojoRepository dojoRepo;
	
	private DojoService(DojoRepository dojoRepo) {
		this.dojoRepo = dojoRepo;
	}
	
//	Create / Update
	public Dojo saveDojo(Dojo dojo) {
		return dojoRepo.save(dojo);
	}
	
//  Read
	public List<Dojo> allDojos() {
		return dojoRepo.findAll();
	}
	public Dojo DojoById(Long id) {
		return dojoRepo.findById(id).orElse(null);
	}
	
//	Delete
	public void destroy(Long id) {
		dojoRepo.deleteById(id);
	}
}
