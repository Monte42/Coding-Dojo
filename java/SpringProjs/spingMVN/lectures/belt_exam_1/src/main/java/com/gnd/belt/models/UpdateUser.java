package com.gnd.belt.models;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class UpdateUser {
private Long id;
		
	@NotBlank(message="Username can not be empty")
	@Size(max=45, message="Username can't be more than 45 characters")
	private String username;
	
	@NotBlank(message="Email can not be empty")
	@Size(max=145, message="Email can't be over 145 characters")
	@Email(message="Please enter a valid email")
	private String email;
	
	
//	CONSTRUCTORS
	public UpdateUser() {}
	public UpdateUser(Long id, String username,
				String email) {
		this.id = id;
		this.username = username;
		this.email = email;
	}
	
	
	
//	GETTERS & SETTERS
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	
	
}
