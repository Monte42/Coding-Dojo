package com.gnd.projectManagers.Services;

import java.util.List;
import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.gnd.projectManagers.models.LoginUser;
import com.gnd.projectManagers.models.User;
import com.gnd.projectManagers.repositories.UserRepository;

@Service
public class UserService {
	@Autowired
	UserRepository userRepo;
	
	public User register(User newUser, BindingResult result) {
		if (userRepo.existsUserByEmail(newUser.getEmail())) result.rejectValue("email", "Exists", "Email already exists");
		if (!newUser.getPassword().equals(newUser.getConfirm())) result.rejectValue("confrim", "Matches", "Please ensure that the passwords match");
		if (result.hasErrors()) return null;
		newUser.setPassword(BCrypt.hashpw(newUser.getPassword(), BCrypt.gensalt()));
		return userRepo.save(newUser);
	}
	
	public boolean login(LoginUser newLogin) {
		Optional<User> user = userRepo.findByEmail(newLogin.getPassword());
		if (user.isEmpty()) return true;
		if (user==null || !BCrypt.checkpw(newLogin.getPassword(), user.get().getPassword())) return true;
		return false;
	}
	
	
	
	public List<User> allUsers() {
		return userRepo.findAll();
	}
	public User userById(Long id) {
		return userRepo.findById(id).orElse(null);
	}
	public User userByEmail(String email) {
		return userRepo.findByEmail(email).orElse(null);
	}
	
	
	
}
