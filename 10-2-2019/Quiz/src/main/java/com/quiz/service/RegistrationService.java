package com.quiz.service;

import java.util.List;
 
import com.quiz.model.Registration;
 
public interface RegistrationService {

	public void saveRegistrationInfo(Registration registration);
	public List<Registration> getRegistrationInfo(); 
	Registration checkUsernamePassword(String email);
	public int checkIsPresent(String email);
	
}
