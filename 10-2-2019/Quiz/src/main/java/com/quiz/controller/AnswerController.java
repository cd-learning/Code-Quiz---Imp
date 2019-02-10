package com.quiz.controller;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.quiz.model.Answer; 
import com.quiz.service.AnswerService;

@RestController
@RequestMapping("/answer")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class AnswerController {

	@PersistenceContext
	public EntityManager manger;
	
	@Autowired 	
	public AnswerService ansSer; 
	
	
	@GetMapping("/getAnswerBaseInQuestionId/{questionId}")
	public List<Answer> getAllQuestionInfo(@PathVariable("questionId")int questionId){
	 return ansSer.getAllAnswer(questionId);
	}
	
	@Transactional
	@DeleteMapping("/deleteCategoryBaseCategory/{id}")
	public int deleteCategoryBaseCategory(@PathVariable("id") long id) {
		int deletedCount = manger.createNativeQuery("delete from answer	 where answer.answer_id=" + id).executeUpdate();
        return deletedCount;	  
	}
 
}
	