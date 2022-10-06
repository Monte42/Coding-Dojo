package com.gnd.motorcycles.models;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name="ryders")
public class Ryder {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
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
	
	@ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(
			name = "ryders_bikes",
			joinColumns = @JoinColumn(name = "ryder_id"),
			inverseJoinColumns = @JoinColumn(name = "bike_id")
	)
	private List<Bike> bikes;
	
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
	
	
	
	
	
//	CONSTRUCTORS
	public Ryder() {}
	public Ryder(Long id,String username,String email,String password,String confirm,
				List<Bike> bikes, Date createdAt, Date updatedAt) {
		this.id = id;
		this.username = username;
		this.email = email;
		this.password = password;
		this.confirm = confirm;
		this.bikes = bikes;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}
	
	
	
	
	
//	GETTERS / SETTERS
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
	public List<Bike> getBikes() {
		return bikes;
	}
	public void setBikes(List<Bike> bikes) {
		this.bikes = bikes;
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
