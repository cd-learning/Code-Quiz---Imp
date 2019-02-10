package com.quiz.service;

import java.util.List;

import org.springframework.stereotype.Service;
import com.quiz.model.Answer;

@Service
public interface AnswerService {
	public void addAnswer(Answer answer);
	public List<Answer> getAllAnswer(int questionId);
}
