package com.quiz.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

@Entity
public class Paper {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int paperId;
    private String paperCategory;
   
   @OneToMany   
   @JoinColumn(name = "paper_Id")
   private List<PaperQuestion> paperQuestionList;
   
   
	public int getPaperId() {
		return paperId;
	}

	public void setPaperId(int paperId) {
		this.paperId = paperId;
	}

	public Paper(int paperId, String paperCategory, List<PaperQuestion> paperQuestionList) {
		super();
		this.paperId = paperId;
		this.paperCategory = paperCategory;
		this.paperQuestionList = paperQuestionList;
	}

	public Paper() {
		super();
		// TODO Auto-generated constructor stub
	}

	public String getPaperCategory() {
		return paperCategory;
	}

	public void setPaperCategory(String paperCategory) {
		this.paperCategory = paperCategory;
	}

	public List<PaperQuestion> getPaperQuestionList() {
		return paperQuestionList;
	}
	

	public void setPaperQuestionList(List<PaperQuestion> paperQuestionList) {
		this.paperQuestionList = paperQuestionList;
	}

	
}
