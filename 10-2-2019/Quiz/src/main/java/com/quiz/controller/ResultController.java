package com.quiz.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.quiz.model.Result;
import com.quiz.repo.ResultRepo; 

@RestController
@RequestMapping("/result") 
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ResultController {

	@Autowired
	public ResultRepo resultRepo;
	
	@PostMapping("/studentresult")
	public void studentResult(@RequestBody Result result) {
		resultRepo.save(result);
	}
	@GetMapping("/getstudentresult")
	public List<Result>getStudentResults(){
		return resultRepo.findAll();
	}
	
	
	
	
	
}
