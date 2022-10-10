package com.gnd.belt.repositories;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.gnd.belt.models.Song;
import com.gnd.belt.models.User;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
//	All Users
	List<User> findAll();

//  Login
	Optional<User> findByEmail(String email);
	
	// Check DB for existing Users
	boolean existsUserByEmail(String email);
	boolean existsUserByUsername(String username);
	
//  User Update
	@Transactional
	@Modifying
	@Query("update User u set u.username = :username where u.id = :id")
	int updateUserSetUsernameById(@Param("username") String username, @Param("id") Long id);
	@Transactional
	@Modifying
	@Query("update User u set u.email = :email where u.id = :id")
	int updateUserSetEmailById(@Param("email") String email, @Param("id") Long id);


//	For Many to Many
	List<User> findAllBySongs(Song song);
	List<User> findBySongsNotContains(Song song);


}
