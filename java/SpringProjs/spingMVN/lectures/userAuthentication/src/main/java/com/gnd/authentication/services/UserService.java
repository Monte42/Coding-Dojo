package com.gnd.authentication.services;

import java.util.List;
import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gnd.authentication.models.LoginUser;
import com.gnd.authentication.models.UpdateUser;
import com.gnd.authentication.models.User;
import com.gnd.authentication.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepo;
	
	
//	CREATE
//	REGISTER / LOGIN
	public User register(User newUser) {
		newUser.setPassword(BCrypt.hashpw(newUser.getPassword(), BCrypt.gensalt()));
		return userRepo.save(newUser);
	}
	
	
	public boolean login(LoginUser newLogin) {
		Optional<User> user = userRepo.findByEmail(newLogin.getEmail());
		if (user.isEmpty()) return true;
		if (user == null || !BCrypt.checkpw(newLogin.getPassword(), user.get().getPassword())) return true;
		return false;
	}
	
	
//	READ
	public List<User> allUsers() {
		return userRepo.findAll();
	}
	public User userById(Long id) {
		return userRepo.findById(id).orElse(null);
	}
	public User userByEmail(String email) {		
		return userRepo.findByEmail(email).orElse(null);
	}
	
//	UPDATE
	public int updateUser(UpdateUser user) {
		userRepo.updateUserSetUsernameById(user.getUsername(), user.getId());
		return userRepo.updateUserSetEmailById(user.getEmail(), user.getId());
	}
	
//	DELETE
	public void destroy(Long id) {
		userRepo.deleteById(id);
	}
	
}
