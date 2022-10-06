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
import javax.persistence.ManyToOne;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name="bikes")
public class Bike {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="brand_id")
	private Brand make;

	@NotBlank(message="Model can't be blank")
	@Size(max=45, message="Model can't be over 45 characters")
	private String model;
	
	@Min(value=1885, message="The first bike was made in 1885")
	private int year;
	
	@Min(value=49, message="Bike must be at least 49cc")
	private int size;
	
	@ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(
			name = "ryders_bikes",
			joinColumns = @JoinColumn(name = "bike_id"),
			inverseJoinColumns = @JoinColumn(name = "ryder_id")
	)
	private List<Ryder> ryders;
	
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
	
	
	
//	CONTRUCTORS
	public Bike() {}
	public Bike(Long id, Brand make,String model,int year,int size,
				List<Ryder> ryders, Date createdAt,Date updatedAt) {
		this.id = id;
		this.make = make;
		this.model = model;
		this.year = year;
		this.size = size;
		this.ryders = ryders;
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
	public Brand getMake() {
		return make;
	}
	public void setMake(Brand make) {
		this.make = make;
	}
	public String getModel() {
		return model;
	}
	public void setModel(String model) {
		this.model = model;
	}
	public int getYear() {
		return year;
	}
	public void setYear(int year) {
		this.year = year;
	}
	public int getSize() {
		return size;
	}
	public void setSize(int size) {
		this.size = size;
	}
	public List<Ryder> getRyders() {
		return ryders;
	}
	public void setRyders(List<Ryder> ryders) {
		this.ryders = ryders;
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
