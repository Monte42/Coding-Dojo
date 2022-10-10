package com.gnd.belt.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gnd.belt.models.Song;
import com.gnd.belt.models.User;
import com.gnd.belt.repositories.SongRepository;


@Service
public class SongService {
	@Autowired
	SongRepository songRepo;
	
//	CREATE/UPDATE
	public Song saveSong(Song song) {
		return songRepo.save(song);
	}
	
	
	
//	READ
	public List<Song> allSongs() {
		return songRepo.findAll();
	}
	
	public Song songById(Long id) {
		return songRepo.findById(id).orElse(null);
	}
	
	// For Many to Many
	public List<Song> getAssignedUsers(User user){
		return songRepo.findAllByUsers(user);
	}
	
	public List<Song> getUnassignedUsers(User user){
		return songRepo.findByUsersNotContains(user);
	}
	
	
	
//	DELETE
	public void destroySong(Long id) {
		songRepo.deleteById(id);
	}
	
	
//	EXTRAS
	public boolean doesSongExist(String title) {
		return songRepo.existsSongByTitle(title);
	}
}
