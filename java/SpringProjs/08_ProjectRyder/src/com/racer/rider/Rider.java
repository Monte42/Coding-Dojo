package com.racer.rider;

public class Rider {
	private String firstName;
	private String lastName;
	private int age;
	private int number;
	private String experience;
	
//	public Rider(String firstName,String lastName,int age,int number,String experience) {
//		this.firstName = firstName;
//		this.lastName = lastName;
//		this.age = age;
//		this.number = number;
//		this.experience = experience;
//	}
	
	public String comment() {
		return "I love to race";
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

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public int getNumber() {
		return number;
	}

	public void setNumber(int number) {
		this.number = number;
	}

	public String getExperience() {
		return experience;
	}

	public void setExperience(String experience) {
		this.experience = experience;
	}
	
	
	
}
