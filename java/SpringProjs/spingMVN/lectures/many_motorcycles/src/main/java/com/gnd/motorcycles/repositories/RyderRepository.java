package com.gnd.motorcycles.repositories;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.gnd.motorcycles.models.Bike;
import com.gnd.motorcycles.models.Ryder;

@Repository
public interface RyderRepository extends CrudRepository<Ryder, Long>{
//	All Riders
	List<Ryder> findAll();
	
//	For Many to Many
	Ryder findByIdIs(Long id);
	
	List<Ryder> findAllByBikes(Bike bike);
	List<Ryder> findByBikesNotContains(Bike bike);
	
//	Rider for Login
	Optional<Ryder> findByEmail(String email);
	boolean existsRyderByEmail(String email);
	boolean existsRyderByUsername(String username);
	
//	Rider Update
	@Transactional
	@Modifying
	@Query("update Ryder r set r.username = :username where r.id = :id")
	int updateRyderSetUsernameById(@Param("username") String username, @Param("id") Long id);
	@Transactional
	@Modifying
	@Query("update Ryder r set r.email = :email where r.id = :id")
	int updateRyderSetEmailById(@Param("email") String email, @Param("id") Long id);

	
}
