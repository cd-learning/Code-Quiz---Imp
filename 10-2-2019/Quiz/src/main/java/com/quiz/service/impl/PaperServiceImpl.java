package com.quiz.service.impl;
import java.util.List; 
import javax.persistence.EntityManager;
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.quiz.model.Paper;
import com.quiz.model.PaperQuestion;
import com.quiz.repo.PaperRepo;
import com.quiz.service.PaperService;

@Service
public class PaperServiceImpl implements PaperService {

	@Autowired
	EntityManager em;

	@Autowired
	public PaperRepo paperRepo;

	@Override
	public List<Paper> getAllPaper() {

		return paperRepo.findAll();
	}

	@Override
	public void addPaper(Paper paper) {
		paperRepo.save(paper);
	}
	@Override
	public int deleteQuestionIdBasePaperSelected(int deleteId) {

	/*	  
		  List<PaperQuestion> paperList=null;
		  String paperIdBaseFetchQuery =
		  "delete from paper_question where paper_select_question_id="+deleteId;
		  javax.persistence.Query query = em.createNativeQuery(paperIdBaseFetchQuery,
		  PaperQuestion.class); query.executeUpdate();
		   */
	
	 List<PaperQuestion> list = null;
 	     String categoryBaseFetchQuery = "select * from paper_question where paper_select_question_id = ?";
 		javax.persistence.Query query1 = em.createNativeQuery(categoryBaseFetchQuery, PaperQuestion.class);
     	list =   query1.setParameter(1, deleteId).getResultList();
     	for(int i=0;i<list.size();i++) {
     		System.out.println("-------------->" );
     	}
 	   int id = list.size();
//		
		/*String deleteAnswerBaseQustionId = "select * from  paper_question where paper_question.paper_id= ?";
		javax.persistence.Query query2 = em.createNativeQuery(deleteAnswerBaseQustionId, PaperQuestion.class);
		list = query2.setParameter(1,deleteId).getResultList();	
	
		return list.size();*/
 	   
 	   return id;
	}

}
