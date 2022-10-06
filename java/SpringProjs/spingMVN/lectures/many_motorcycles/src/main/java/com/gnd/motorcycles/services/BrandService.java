package com.gnd.motorcycles.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gnd.motorcycles.models.Brand;
import com.gnd.motorcycles.repositories.BrandRepository;

@Service
public class BrandService {
	@Autowired
	BrandRepository brandRepo;
	
	
//	Create / Update
	public Brand saveBrand(Brand brand) {
		return brandRepo.save(brand);
	}

//	Read
	public List<Brand> allBrands() {
		return brandRepo.findAll();
	}
	public Brand brandById(Long id) {
		return brandRepo.findById(id).orElse(null);
	}
	public Brand brandByName(String name) {
		return brandRepo.findByName(name).orElse(null);
	}
	
//	Delete
	public void destroyBrand(Long id) {
		brandRepo.deleteById(id);
	}
	
}
