package com.gnd.motorcycles.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.gnd.motorcycles.models.Bike;
import com.gnd.motorcycles.models.Ryder;

@Repository
public interface BikeRepository extends CrudRepository<Bike, Long>{
//	All Ryders
	List<Bike> findAll();
	
//	For Many to Many
	List<Bike> findAllByRyders(Ryder ryder);
	List<Bike> findByRydersNotContains(Ryder ryder);
	
//	Check DB for bike by Model
	boolean existsBikeByModel(String model);
	List<Bike> findAllByModel(String model);
}
