package com.gnd.motorcycles.models;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class LoginRyder {
	@NotBlank(message="Email is required!")
    @Email(message="Please enter a valid email!")
    private String email;
    
	@NotBlank(message="Password is required!")
    @Size(min=8, message="Password must be at least 8 characters")
    private String password;
    
    
    
//  CONTRUCTORS
  public LoginRyder() {}
  public LoginRyder(String email, String password) {
  	this.email = email;
  	this.password = password;
  }
  
  
  
//  GETTERS and SETTERS
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
    
}
