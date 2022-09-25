package com.gnd.languages.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.gnd.languages.models.Language;
import com.gnd.languages.repository.LanguageRepository;


@Service
public class LanguageService {
	private final LanguageRepository langRepo;
	
	public LanguageService(LanguageRepository langRepo) {
		this.langRepo = langRepo;
	}
	
//	Create/Update
	public Language saveLanguage(Language language) {
		return langRepo.save(language);
	}
	
//  Read
	public List<Language> allLanguages(){
		return langRepo.findAll();
	}
	public Language findLanguageById(Long id) {
		return langRepo.findById(id).orElse(null);
	}
	
//	Delete
	public void destroy(Long id) {
		langRepo.deleteById(id);
	}
}
