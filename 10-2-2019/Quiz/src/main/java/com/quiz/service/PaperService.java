package com.quiz.service;

import java.util.List;

import com.quiz.model.Paper;

public interface PaperService {

	public List<Paper> getAllPaper();

	public void addPaper(Paper paper);
	
	public int deleteQuestionIdBasePaperSelected(int deleteId);

}
