package com.quiz.model;
 
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="login")
 public class Login  {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	@Column(unique=true)
	private String userEmailId;
	private String userPassword;
    private boolean adminFlag;
	public String getUserPassword() {
		return userPassword;
	}
	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}
	public long getId() {
		return id;
	}
	 
	public String getUserEmailId() {
		return userEmailId;
	}
	public void setId(long id) {
		this.id = id;
	}
	public void setUserEmailId(String userEmailId) {
		this.userEmailId = userEmailId;
	}
	public boolean isAdminFlag() {
		return adminFlag;
	}
	public void setAdminFlag(boolean adminFlag) {
		this.adminFlag = adminFlag;
	}
  
	

}
