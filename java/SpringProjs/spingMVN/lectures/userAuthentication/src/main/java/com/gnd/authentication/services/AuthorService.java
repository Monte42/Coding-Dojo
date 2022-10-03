package com.gnd.authentication.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gnd.authentication.models.Author;
import com.gnd.authentication.repository.AuthorRepository;

@Service
public class AuthorService {
	@Autowired
	AuthorRepository aRepo;
	
	public Author saveAuthor(Author a) {
		return aRepo.save(a);
	}
	
	public List<Author> allAuthors(){
		return aRepo.findAll();
	}
	public Author authorById(Long id) {
		return aRepo.findById(id).orElse(null);
	}
	
	public void destroy(Long id) {
		aRepo.deleteById(id);
	}
	
}
