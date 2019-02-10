package com.quiz.controller;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.quiz.model.PaperQuestion;
import com.quiz.service.PaperQuestionService;
@RestController
@RequestMapping("/paperquestions")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class PaperQuestionController {
	@PersistenceContext
	public EntityManager manger;

	@Autowired
	public PaperQuestionService paperQuestionSer;

	@GetMapping("/getPaperQuestionInfo")
	public List<PaperQuestion> getAllPaperQuestions() {
		return paperQuestionSer.getAllPaperQuestions();
	}
 
	
}
	