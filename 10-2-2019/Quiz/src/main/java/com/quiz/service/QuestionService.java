package com.quiz.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.quiz.model.Question;

@Service
public interface QuestionService {

	public List<Question> getQuestionBaseCategoryId(int questionId);
	 
	public Question addQuestion(Question question);
	public String getQuestionTextBaseQuestionId(int questId);
    public List<Question> getAllQuestion();
    
}
