package com.quiz.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quiz.model.Paper;
import com.quiz.model.PaperQuestion;
import com.quiz.repo.PaperQuestionRepo;
import com.quiz.service.PaperQuestionService;

@Service
public class PaperQuestoinServiceImpl implements PaperQuestionService {

	
	List<Paper> p = new ArrayList<>();

	
	@Autowired
	public PaperQuestionRepo paperRepo;

	@Override
	public void addPaperQuestion(PaperQuestion paperQuestion) {
		paperRepo.save(paperQuestion);
 
	}

	@Override
	public List<PaperQuestion> getAllPaperQuestions() {

		return paperRepo.findAll();
	}

}
