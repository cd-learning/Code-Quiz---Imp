package com.quiz.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Answer {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int answerId;
	private String answerText;
	private boolean answerCorrect;

	public boolean isAnswerCorrect() {
		return answerCorrect;
	}

	public void setAnswerCorrect(boolean answerCorrect) {
		this.answerCorrect = answerCorrect;
	}

	public int getAnswerId() {
		return answerId;
	}

	public void setAnswerId(int answerId) {
		this.answerId = answerId;
	}

	public String getAnswerText() {
		return answerText;
	}

	public void setAnswerText(String answerText) {
		this.answerText = answerText;
	}


}
