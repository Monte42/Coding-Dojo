package com.gnd.motorcycles.services;

import java.util.List;
import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gnd.motorcycles.models.Bike;
import com.gnd.motorcycles.models.LoginRyder;
import com.gnd.motorcycles.models.Ryder;
import com.gnd.motorcycles.models.UpdateRyder;
import com.gnd.motorcycles.repositories.RyderRepository;

@Service
public class RyderService {
	@Autowired
	RyderRepository ryderRepo;
	
	
	
//	CREATE
//	Register / Login
	public Ryder register(Ryder newRyder) {
		newRyder.setPassword(BCrypt.hashpw(newRyder.getPassword(), BCrypt.gensalt()));
		return ryderRepo.save(newRyder);
	}
	
	public boolean login(LoginRyder newLogin) {
		Optional<Ryder> ryder = ryderRepo.findByEmail(newLogin.getEmail());
		if (ryder.isEmpty()) return true;
		if (ryder==null || !BCrypt.checkpw(newLogin.getPassword(), ryder.get().getPassword())) return true;
		return false;
	}
	
//  READ
	public List<Ryder> allRyders() {
		return ryderRepo.findAll();
	}
	public Ryder ryderById(Long id) {
		return ryderRepo.findById(id).orElse(null);
	}
	public Ryder ryderByEmail(String email) {		
		return ryderRepo.findByEmail(email).orElse(null);
	}
	
	// For Many to Many
	public List<Ryder> getAssignedRyders(Bike bike){
		return ryderRepo.findAllByBikes(bike);
	}
	public List<Ryder> getUnassignedRyders(Bike bike){
		return ryderRepo.findByBikesNotContains(bike);
	}
	public Ryder findById(Long id) {
		Optional<Ryder> optionalRyder = ryderRepo.findById(id);
		if(optionalRyder.isPresent()) {
			return optionalRyder.get();
		}else {
			return null;
		}
	}

	
//	UPDATE
	public int updateRyder(UpdateRyder ryder) {
		ryderRepo.updateRyderSetUsernameById(ryder.getUsername(), ryder.getId());
		return ryderRepo.updateRyderSetEmailById(ryder.getEmail(), ryder.getId());
	}
	
	
//	DELETE
	public void destroyRyder(Long id) {
		ryderRepo.deleteById(id);
	}
	
}
