package com.quiz.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

@Entity
public class Question {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long questionId;
	
	private String questionText;
	private int questionCategory; //categoryid 
	private String subcategory;
	
	@OneToMany
	@JoinColumn(name="question_id")
	private List<Answer> options;	
	public Question() {
		 
	}
	public long getQuestionId
	() {
		return questionId;
	}
	public String getSubcategory() {
		return subcategory;
	}
	public void setSubcategory(String subcategory) {
		this.subcategory = subcategory;
	}
	public void setQuestionId(long questionId) {
		this.questionId = questionId;
	}
	public String getQuestionText() {
		return questionText;
	}
	public void setQuestionText(String questionText) {
		this.questionText = questionText;
	}
	public int getQuestionCategory() {
		return questionCategory;
	}
	public void setQuestionCategory(int questionCategory) {
		this.questionCategory = questionCategory;
	}
	 
	public List<Answer> getOptions() {
		return options;
	}
	public void setOptions(List<Answer> options) {
		this.options = options;
	}
	
	
	
	
}
