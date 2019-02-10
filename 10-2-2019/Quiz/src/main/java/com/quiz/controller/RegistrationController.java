package com.quiz.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.quiz.model.Registration;
import com.quiz.repo.RegistrationRepo;
import com.quiz.service.RegistrationService;

@RestController
@RequestMapping("/registration")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class RegistrationController {

	//this is registration service 
	@Autowired
    public RegistrationService regisService;
	
	//this is registration repository  for find by method call 
	@Autowired
	public RegistrationRepo studentRempo;
	
	//store registration information
	@PostMapping("/saveRegistration")
	public void saveRegistrationInfo(@RequestBody Registration registration) {
		 		regisService.saveRegistrationInfo(registration);
	}
	// get all registration information 
	@GetMapping("/getRegistrationInfo")
	public List<Registration> getRegistrationInfo(){
		return regisService.getRegistrationInfo();
	}
	// this method is use for login after registration user
	@GetMapping("/check/{email}")
	public Registration  checkLogin(@PathVariable("email")String email)
	{
		return studentRempo.findByEmail(email);
	}
	// this method use for checking existing user in quiz
	@GetMapping("/checkExistingUser/{email}")
	public int checkExistingUser(@PathVariable("email")String email) {
		return regisService.checkIsPresent(email);		
	}
}
