package com.quiz.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id; 

@Entity
public class Registration {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long registrationId;
	private String username;
	private String email;
	private String password;
	private String typeOfStudent;
	public long getRegistrationId() {
		return registrationId;
	}
	public void setRegistrationId(long registrationId) {
		this.registrationId = registrationId;
	}
	public Registration() {
		 
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
	public String getTypeOfStudent() {
		return typeOfStudent;
	}
	public void setTypeOfStudent(String typeOfStudent) {
		this.typeOfStudent = typeOfStudent;
	}
	public Registration(long registrationId, String username, String email, String password, String typeOfStudent) {
	 
		this.registrationId = registrationId;
		this.username = username;
		this.email = email;
		this.password = password;
		this.typeOfStudent = typeOfStudent;
	}
	

}
