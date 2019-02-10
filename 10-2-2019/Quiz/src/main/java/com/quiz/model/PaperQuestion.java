package com.quiz.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.engine.spi.CascadeStyle;

@Entity
public class PaperQuestion {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	
	private int paperQuestionId;
	private int paperSelectQuestionId;
	public int getPaperQuestionId() {
		return paperQuestionId;
	}

	public void setPaperQuestionId(int paperQuestionId) {
		this.paperQuestionId = paperQuestionId;
	}

	public int getPaperSelectQuestionId() {
		return paperSelectQuestionId;
	}

	public void setPaperSelectQuestionId(int paperSelectQuestionId) {
		this.paperSelectQuestionId = paperSelectQuestionId;
	}

	public PaperQuestion(int paperQuestionId, int paperSelectQuestionId) {
	 
		this.paperQuestionId = paperQuestionId;
		this.paperSelectQuestionId = paperSelectQuestionId;
		 
	}

	public PaperQuestion() {

	}

 

}
