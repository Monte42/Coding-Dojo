package com.gnd.belt.services;

import java.util.List;
import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.gnd.belt.models.LoginUser;
import com.gnd.belt.models.UpdateUser;
import com.gnd.belt.models.User;
import com.gnd.belt.repositories.UserRepository;


@Service
public class UserService {
	@Autowired
	UserRepository userRepo;
	
//	CREATE
	public User register(User newUser, BindingResult result) {
		if (userRepo.existsUserByEmail(newUser.getEmail())) result.rejectValue("email", "Exists", "Sorry, this email is already taken");
		if (userRepo.existsUserByUsername(newUser.getUsername())) result.rejectValue("username", "Exists", "Sorry, this username is already taken");
		if (!newUser.getPassword().equals(newUser.getConfirm())) result.rejectValue("confirm", "Matches", "Please ensure both passwords match");
		if (result.hasErrors()) return null;
		newUser.setPassword(BCrypt.hashpw(newUser.getPassword(), BCrypt.gensalt()));
		return userRepo.save(newUser);
	}
	
	public boolean login(LoginUser newLogin) {
		Optional<User> user = userRepo.findByEmail(newLogin.getEmail());
		if (user.isEmpty()) return true;
		if (user==null || !BCrypt.checkpw(newLogin.getPassword(), user.get().getPassword())) return true;
		return false;
	}
	
	
//  READ
	public List<User> allUsers() {
		return userRepo.findAll();
	}
	public User userByEmail(String email) {
		return userRepo.findByEmail(email).orElse(null);
	}
	public User userById(Long id) {
		return userRepo.findById(id).orElse(null);
	}
	
	// For Many to Many
//	public List<User> getAssignedUsers(Entity entity){
//		return userRepo.findAllByENTITIES(entity);
//	}
//	public List<User> getUnassignedUsers(Entity entity){
//		return ryderRepo.findByENTITIESNotContains(entity);
//	}

//	UPDATE
	public int updateUser(UpdateUser user) {
		userRepo.updateUserSetUsernameById(user.getUsername(), user.getId());
		return userRepo.updateUserSetEmailById(user.getEmail(), user.getId());
	}
	
//	DELETE
	public void destroyUser(Long id) {
		userRepo.deleteById(id);
	}
	
}
