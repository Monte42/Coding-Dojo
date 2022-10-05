package com.gnd.motorcycles.models;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class UpdateRyder {
	private Long id;
	@NotBlank(message="Username can not be empty")
	@Size(max=30, message="User name must between 3 an 30 characters")
	private String username;
	@NotBlank(message="Email can not be empty")
	@Email(message="Please enter a valid email")
	private String email;
	
	
	
//	CONSTRUCTERS
	public UpdateRyder(String username,String email) {
		this.username = username;
		this.email = email;
	}
	
	
	
	
//	GETTERS / SETTERS
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
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
}
