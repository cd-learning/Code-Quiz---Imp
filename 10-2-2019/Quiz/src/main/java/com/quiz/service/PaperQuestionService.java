package com.quiz.service;

import java.util.List;

import com.quiz.model.PaperQuestion;

public interface PaperQuestionService {

	public void addPaperQuestion(PaperQuestion paperQuestion);

	public List<PaperQuestion> getAllPaperQuestions();
}
