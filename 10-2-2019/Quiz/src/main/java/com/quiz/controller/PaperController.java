package com.quiz.controller;

import java.util.List;

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

import com.quiz.model.Paper;
import com.quiz.model.PaperQuestion;
import com.quiz.model.Question;
import com.quiz.service.PaperQuestionService;
import com.quiz.service.PaperService;

@RestController
@RequestMapping("/paper")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class PaperController {
	private static final Logger logger = LoggerFactory.getLogger(PaperController.class);

	@PersistenceContext
	public EntityManager manger;

	@Autowired
	public PaperService paperSer;

	@Autowired
	public PaperQuestionService paperQuestionService;

	@PostMapping("/paperQuestion")
	public void addQuestion(@RequestBody Paper paper) {

		for (PaperQuestion pq : paper.getPaperQuestionList()) {
			paperQuestionService.addPaperQuestion(pq);
		}
		paperSer.addPaper(paper);
		logger.info("######## ADD Successfully....................");
	}

	@GetMapping("/getPaperInfo")
	public List<Paper> getPaperInfo() {
		return paperSer.getAllPaper();
	}

	@Transactional
	@DeleteMapping("/deleteCategoryBaseCategoryPaper/{id}")
	public int deleteCategoryBaseCategory(@PathVariable("id") long id) {
		int deleteCount = 0;
		List<PaperQuestion> alist = null;
		String categoryBaseFetchQuery = "select * from  paper where paper.paper_category= ?";
		javax.persistence.Query query = manger.createNativeQuery(categoryBaseFetchQuery, Paper.class);
		List<Paper> qlist = query.setParameter(1, id).getResultList();

		// deleteCount=qlist.size();

		for (int i = 0; i < qlist.size(); i++) {
			String deleteQueryBaseCategory = "delete from paper where paper.paper_id= ? ";
			javax.persistence.Query query1 = manger.createNativeQuery(deleteQueryBaseCategory, Paper.class);
			deleteCount = query1.setParameter(1, qlist.get(i).getPaperId()).executeUpdate();

			String deleteAnswerBaseQustionId = "select * from paper_question  where paper_question.paper_id= ?";
			javax.persistence.Query query2 = manger.createNativeQuery(deleteAnswerBaseQustionId, PaperQuestion.class);
			alist = query2.setParameter(1, qlist.get(i).getPaperId()).getResultList();
			deleteCount = alist.size();
 		}
		for (int i = 0; i < alist.size(); i++) {
			String deleteQueryBaseCategory = "delete from paper_question where paper_question.paper_question_id= ? ";
			javax.persistence.Query query1 = manger.createNativeQuery(deleteQueryBaseCategory, PaperQuestion.class);
			deleteCount = query1.setParameter(1, alist.get(i).getPaperQuestionId()).executeUpdate();

		}
		return deleteCount;
	}

	@Transactional
	@GetMapping("/fetchPaperIdBaseQuestion/{id}")
	public Question fetchPaperBaseQuestion(@PathVariable("id") long id) {
		String categoryBaseFetchQuery = "select * from  question where question.question_id= ?";
		javax.persistence.Query query = manger.createNativeQuery(categoryBaseFetchQuery, Question.class);
	      Question q = (Question) query.setParameter(1, id).getResultList();
		return q;
	}
	
	@GetMapping("/deleteQuestionBase/{deletePapaeId}")
	public int  DeletePapaerId(@PathVariable("deletePapaeId")int deleteId) {
	  return	paperSer.deleteQuestionIdBasePaperSelected(deleteId);
	}
	
	@Transactional
	@GetMapping("/deleteSelectedQuestion/{id}")
	public int deleteSelectedQuestion(@PathVariable("id")long id) {
	 	int deleteCount = 0;
		String deleteAnswerBaseQustionId = "select * from paper_question  where paper_question.paper_select_question_id= ?";
	 
		javax.persistence.Query query2 = manger.createNativeQuery(deleteAnswerBaseQustionId, PaperQuestion.class);
		
	    List<PaperQuestion> pq =query2.setParameter(1, id).getResultList();
	    String deleteQueryBaseCategory = "delete from paper_question where paper_question.paper_question_id= ? ";
		javax.persistence.Query query1 = manger.createNativeQuery(deleteQueryBaseCategory, PaperQuestion.class);
		
	    for(int i=0;i<pq.size();i++)
	  {
	    	 deleteCount = query1.setParameter(1, pq.get(i).getPaperQuestionId()).executeUpdate();
             
	  }
	  
	    return deleteCount;
	}

}
























