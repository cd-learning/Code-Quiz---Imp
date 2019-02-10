package com.quiz.service.impl; 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quiz.model.Login;
import com.quiz.repo.LoginRepo;
import com.quiz.service.LoginService;

@Service
public class LoginServiceImpl implements LoginService {

	@Autowired
	public LoginRepo loginRepo;
 
	@Override
	public void addUser(Login login) {
		loginRepo.saveAndFlush(login);
	 
	}
	 
}
