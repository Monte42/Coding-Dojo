package com.gnd.belt.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;


@Entity
@Table(name="users")
public class User {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@NotBlank(message="First Name can't be blank")
	@Size(max=25, message="First Name can't be over 25 characters")
	private String firstName;
	
	@NotBlank(message="Last Name can't be blank")
	@Size(max=25, message="Last Name can't be over 25 characters")
	private String lastName;
	
	@NotBlank(message="Username can't be blank")
	@Size(max=45, message="Username can't be over 45 characters")
	private String username;
	
	@NotBlank(message="Email can't be blank")
	@Size(max=145, message="Email can't be over 145 characters")
	@Email(message="Email must be a vaild address")
	private String email;
	
	@NotBlank(message="Password can not be empty")
	@Size(min=8, max=255, message="Password must at least 8 characters")
	private String password;
	
	@Transient
	@NotBlank(message="Confirm can not be empty")
	@Size(min=8, max=255, message="Confirm password must at least 8 characters")
	private String confirm;
	
//	@ManyToMany(fetch = FetchType.LAZY)
//	@JoinTable(
//			name = "users_entities",
//			joinColumns = @JoinColumn(name = "user_id"),
//			inverseJoinColumns = @JoinColumn(name = "entity_id")
//	)
//	private List<{{ENTITY}}> entity;
	
	@Column(updatable=false)
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private Date createdAt;
	
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private Date updatedAt;
	
	@PrePersist
	public void onCreate() {
		this.createdAt = new Date();
	}
	@PreUpdate
	public void onUpdate() {
		this.updatedAt = new Date();
	}
	
	
//	CONSTRUCTOR
	public User() {}
	public User(Long id, String firstName, String lastName,
			String username, String email, String password,
			String confirm, Date createdAt, Date updatedAt) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.username = username;
		this.email = email;
		this.password = password;
		this.confirm = confirm;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}
	
	
//	GETTERS & SETTERS
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
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
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getConfirm() {
		return confirm;
	}
	public void setConfirm(String confirm) {
		this.confirm = confirm;
	}
	public Date getCreatedAt() {
		return createdAt;
	}
	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}
	public Date getUpdatedAt() {
		return updatedAt;
	}
	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}
	
}
