package com.gnd.dojos.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.gnd.dojos.models.Ninja;
import com.gnd.dojos.repositories.NinjaRepository;

@Service
public class NinjaService {
	private final NinjaRepository ninjaRepo;
	
	private NinjaService(NinjaRepository ninjaRepo) {
		this.ninjaRepo = ninjaRepo;
	}
	
//	CREATE / UPDATE
	public Ninja saveNinja(Ninja ninja) {
		return ninjaRepo.save(ninja);
	}
	
//	READ
	public List<Ninja> allNinjas() {
		return ninjaRepo.findAll();
	}
	public Ninja NinjaById(Long id) {
		return ninjaRepo.findById(id).orElse(null);
	}
	
}
