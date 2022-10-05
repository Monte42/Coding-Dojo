package com.gnd.motorcycles.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.gnd.motorcycles.models.Bike;
import com.gnd.motorcycles.models.Ryder;

@Repository
public interface BikeRepository extends CrudRepository<Bike, Long>{
	List<Bike> findAll();
	
//	For Many to Many
	Bike findByIdIs(Long id);
	
	List<Bike> findAllByRyders(Ryder ryder);
	List<Bike> findByRydersNotContains(Ryder ryder);
	boolean existsBikeByModel(String model);
	List<Bike> findAllByModel(String model);
}
