package com.quiz.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
 
import com.quiz.model.Question;
import com.quiz.repo.QuestionRepo;
import com.quiz.service.QuestionService;

@Service
public class QustionServiceImpl implements QuestionService {
	private static final Logger logger = LoggerFactory.getLogger(QustionServiceImpl.class);
	@Autowired
	QuestionRepo repo;
	List<Question> questionList = null;

	@Override
	public Question addQuestion(Question question) {
		return repo.save(question);
	}
	@Override
	public List<Question> getQuestionBaseCategoryId(int categoryId) {
		ArrayList<Question> al = new ArrayList<Question>();
		List<Question> getAllQuestion = repo.findAll();
		logger.info("******************SIZE IS *****************************" + getAllQuestion.size());

		for (int i = 0; i < getAllQuestion.size(); i++) {
			if (getAllQuestion.get(i).getQuestionCategory() == categoryId) {

				al.add(getAllQuestion.get(i));
			}
		}
		return al;
	}
	@Override
	public String getQuestionTextBaseQuestionId(int questId) {
		String getQuestionText = null;
		List<Question> listAllQuestion = repo.findAll();
		for (int i = 0; i < listAllQuestion.size(); i++) {
			if (listAllQuestion.get(i).getQuestionId() == questId) {
				getQuestionText = listAllQuestion.get(i).getQuestionText();
			}
		}
		return getQuestionText;
	}
	@Override
	public List<Question> getAllQuestion() {
	   return repo.findAll();
	}
}
