package com.gnd.safetravels.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name="expenses", schema="expenses")
public class Expense {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@NotBlank(message="Title can not be blank")
	@Size(min = 5, max = 200, message="Title must be at least 5 characters")
	private String title;
	@NotBlank(message="Vendor can not be blank")
	@Size(min = 3, max = 100, message="Vendor must be at least 3 characters")
	private String vendor;
	@NotBlank(message="Description can not be blank")
	@Size(min = 5, max = 200, message="Description must be at least 5 characters")
	private String description;
	@Min(1)
	@Column(scale=2)
	private double amount;
	@Column(updatable=false)
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date createdAt;
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date updatedAt;
    
    

	public Expense() {}    

	public Expense(Long id,String title,String vendor, String description,
			double amount, Date createdAt, Date updatedAt) {
		this.id = id;
		this.title = title;
		this.vendor = vendor;
		this.description = description;
		this.amount = amount;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}
	
	public Expense(String title,String vendor, String description,
			double amount) {
		this.title = title;
		this.vendor = vendor;
		this.description = description;
		this.amount = amount;
	}
	
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getVendor() {
		return vendor;
	}

	public void setVendor(String vendor) {
		this.vendor = vendor;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
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

	
	@PrePersist
	protected void onCreate() {
		this.createdAt = new Date();
	}
	@PreUpdate
	protected void onUpdate() {
		this.updatedAt = new Date();
	}
}
