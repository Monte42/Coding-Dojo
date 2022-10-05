package com.gnd.motorcycles.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gnd.motorcycles.models.Bike;
import com.gnd.motorcycles.models.Ryder;
import com.gnd.motorcycles.repositories.BikeRepository;

@Service
public class BikeService {
	@Autowired
	BikeRepository bikeRepo;
	
//	Create / Update
	public Bike saveBike(Bike bike) {
		return bikeRepo.save(bike);
	}
	
//	Read
	public List<Bike> allBikes() {
		return bikeRepo.findAll();
	}
	public Bike bikeById(Long id) {
		return bikeRepo.findById(id).orElse(null);
	}

	// For Many to Many
	public List<Bike> getAssignedRyders(Ryder ryder){
		return bikeRepo.findAllByRyders(ryder);
	}
	public List<Bike> getUnassignedRyders(Ryder ryder){
		return bikeRepo.findByRydersNotContains(ryder);
	}
	public Bike findById(Long id) {
		Optional<Bike> optionalBike = bikeRepo.findById(id);
		if(optionalBike.isPresent()) {
			return optionalBike.get();
		}else {
			return null;
		}
	}
	public boolean doesBikeExist(Bike bike) {
		if (bikeRepo.existsBikeByModel(bike.getModel())) {
			System.out.println("b");
			List<Bike> existingBikes = bikeRepo.findAllByModel(bike.getModel());
			for (Bike thisBike : existingBikes) {
				if (thisBike.getYear() == bike.getYear() && thisBike.getSize() == bike.getSize()) return true;				
			}
		}
		return false;
	}
	
	
	
//	Delete
	public void destroyBike(Long id) {
		bikeRepo.deleteById(id);
	}
	
	
}