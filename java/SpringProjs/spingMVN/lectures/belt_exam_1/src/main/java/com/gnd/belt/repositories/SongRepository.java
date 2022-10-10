package com.gnd.belt.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.gnd.belt.models.Song;
import com.gnd.belt.models.User;

@Repository
public interface SongRepository extends CrudRepository<Song, Long> {
//	All Songs
	List<Song> findAll();
	
//	For Many to Many
	List<Song> findAllByUsers(User user);
	List<Song> findByUsersNotContains(User user);
	
//	Check is song exists
	boolean existsSongByTitle(String title);
}
