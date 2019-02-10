package com.quiz.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.quiz.model.Login;
import com.quiz.repo.LoginRepo;
import com.quiz.service.LoginService;

@RestController
@RequestMapping("/login")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class LoginController {
	private static final Logger logger = LoggerFactory.getLogger(LoginController.class);
	@Autowired
	public LoginService loginService;

	@PostMapping("/addUser")
	public void addUser(@RequestBody Login login) {
		loginService.addUser(login);
		logger.info("-------------LOGIN--------SUCCESSFULLY------------------");
	}

	@Autowired
	public LoginRepo l;

	@GetMapping("/getLoginInfoEmailBase/{email}")
	public List<Login> getLoginInfoBaseEmailAddresss(@PathVariable("email") String email) {
		return l.findByUserEmailId(email);
	}
}
