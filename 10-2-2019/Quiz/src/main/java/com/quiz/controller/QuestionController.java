package com.quiz.controller;

import java.util.List;
import java.util.Optional;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.quiz.model.Answer;
import com.quiz.model.Question;
import com.quiz.repo.QuestionRepo;
import com.quiz.service.AnswerService;
import com.quiz.service.QuestionService;

@RestController
@RequestMapping("/question")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class QuestionController {

	private static final Logger logger = LoggerFactory.getLogger(QuestionController.class);

	@PersistenceContext
	public EntityManager manger;
	public Question question = null;

	@Autowired
	public QuestionService questionImpl;

	@Autowired
	public AnswerService ansSer;

	@PostMapping("/addquestion")
	public void addQuestion(@RequestBody Question question) {
		logger.info("################## QuestionCategory---->" + question.getQuestionCategory());
		logger.info("$$$$$$$$$$$$$$$$$$$$$ Question Text----->" + question.getQuestionText());
		logger.info("*********************Question Subcategory------>" + question.getSubcategory());
		for (Answer a : question.getOptions()) {
			ansSer.addAnswer(a);
		}
		question = questionImpl.addQuestion(question);	

	}

	@GetMapping("/getQuestionBaseCategory/{categoryId}")
	public List<Question> getQuestionBaseCategoryId(@PathVariable("categoryId") int categoryId) {
		return questionImpl.getQuestionBaseCategoryId(categoryId);
	}

	@GetMapping("/getQuestionBaseQuestionId/{questionId}")
	public String getQuestionBaseQuestionId(@PathVariable("questionId") int questionId) {

		return questionImpl.getQuestionTextBaseQuestionId(questionId);

	}

	@GetMapping("/getQuestionInfo")
	public List<Question> getAllQuestionInfo() {
		return questionImpl.getAllQuestion();
	}

	@Autowired
	public QuestionRepo questionRepo;

	@DeleteMapping("/deleteAllInCategoryId")
	public String delete() {
		long categoryId = 3;
		String temp = null;
		Optional<Question> optionCategory = questionRepo.findById(categoryId);
		if (optionCategory.isPresent()) {
			temp = "inside present.......";
			questionRepo.delete(optionCategory.get());
			logger.info("--------------Delete Successfully -------------:");
		}
		return temp;
	}

	@Transactional
	@DeleteMapping("/deleteCategoryBaseCategory/{id}")
	public int deleteCategoryBaseCategory(@PathVariable("id") long id) {
		int deleteCount = 0;
		List<Answer> alist=null;
		String categoryBaseFetchQuery = "select * 	from  question where question.question_category= ?";
		javax.persistence.Query query = manger.createNativeQuery(categoryBaseFetchQuery, Question.class);
		List<Question> qlist = query.setParameter(1, id).getResultList();
		if(qlist!=null)
		for (int i = 0; i < qlist.size(); i++) {
			String deleteQueryBaseCategory = "delete from question where question.question_id= ? ";
			javax.persistence.Query query1 = manger.createNativeQuery(deleteQueryBaseCategory, Question.class);
			deleteCount = query1.setParameter(1, qlist.get(i).getQuestionId()).executeUpdate();
			
			
			String deleteAnswerBaseQustionId= "select * from answer  where answer.question_id= ?";
            javax.persistence.Query query2 = manger.createNativeQuery(deleteAnswerBaseQustionId,Answer.class);
	        alist = query2.setParameter(1, qlist.get(i).getQuestionId()).getResultList();
	    	//deleteCount=alist.size();
	      
		}
		if(alist!=null)
		for(int i=0;i<alist.size();i++) {
			String deleteQueryBaseCategory = "delete from answer where answer.answer_id= ? ";
			javax.persistence.Query query1 = manger.createNativeQuery(deleteQueryBaseCategory, Answer.class);
			deleteCount = query1.setParameter(1, alist.get(i).getAnswerId()).executeUpdate();
			
			
		}
			
		logger.info("Delete count is "+deleteCount); 
		 	return deleteCount;
	}
	@Transactional
	@GetMapping("/fetchPaperIdBaseQuestion/{id}")
	public Question fetchPaperBaseQuestion(@PathVariable("id") long id) {
		String categoryBaseFetchQuery = "select * from  question where question.question_id= ?";
		javax.persistence.Query query = manger.createNativeQuery(categoryBaseFetchQuery, Question.class);
	      Question q = (Question) query.setParameter(1, id).getSingleResult();
		return q;
	}
	
	
	
	@Transactional
	@GetMapping("/getParticularIdInUserSideDisplay/{id}")
	public List<Question> particularIdInUserSide(@PathVariable("id") long id) {
		int deleteCount = 0;
		List<Answer> alist=null;
		String categoryBaseFetchQuery = "select * 	from  question where question.question_category= ?";
		javax.persistence.Query query = manger.createNativeQuery(categoryBaseFetchQuery, Question.class);
		List<Question> qlist = query.setParameter(1, id).getResultList();
		 
		return qlist;
				 
	}
		
}
