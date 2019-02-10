package com.quiz.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quiz.model.Answer;
import com.quiz.model.Question;
import com.quiz.repo.AnswerRepo;
import com.quiz.repo.QuestionRepo;
import com.quiz.service.AnswerService;

@Service
public class AnswerServiceImpl implements AnswerService {

	@Autowired
	public AnswerRepo ansRepo;

	@Autowired
	public QuestionRepo queRepo;

	@Override
	public void addAnswer(Answer answer) {
		ansRepo.save(answer);
	}

	@Override
	public List<Answer> getAllAnswer(int questionId) {
		
		Question queObject= queRepo.findByQuestionId(questionId);
		
		List<Answer> answerList= queObject.getOptions();
		
		return answerList;
	}

	 
}
