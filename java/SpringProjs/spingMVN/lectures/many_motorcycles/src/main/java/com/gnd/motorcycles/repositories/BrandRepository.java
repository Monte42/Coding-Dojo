package com.gnd.motorcycles.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.gnd.motorcycles.models.Brand;

@Repository
public interface BrandRepository extends CrudRepository<Brand, Long>{
	List<Brand> findAll();
	Optional<Brand> findByName(String name); 
}
