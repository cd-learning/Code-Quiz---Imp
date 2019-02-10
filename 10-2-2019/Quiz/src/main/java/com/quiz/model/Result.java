package com.quiz.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
@Entity
public class Result {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long resultId;
	private int userId;
	private String giveTestDate;
	private boolean sameDateTest;
	private int totalMarks;

	public long getResultId() {
		return resultId;
	}

	public void setResultId(int resultId) {
		this.resultId = resultId;
	}

	public int getUserId() {
		return userId;
	}

	public Result(long resultId, int userId, String giveTestDate, boolean sameDateTest, int totalMarks) {
		super();
		this.resultId = resultId;
		this.userId = userId;
		this.giveTestDate = giveTestDate;
		this.sameDateTest = sameDateTest;
		this.totalMarks = totalMarks;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getGiveTestDate() {
		return giveTestDate;
	}

	public void setGiveTestDate(String giveTestDate) {
		this.giveTestDate = giveTestDate;
	}

	public boolean isSameDateTest() {
		return sameDateTest;
	}

	public void setSameDateTest(boolean sameDateTest) {
		this.sameDateTest = sameDateTest;
	}

	public Result() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getTotalMarks() {
		return totalMarks;
	}

	public void setTotalMarks(int totalMarks) {
		this.totalMarks = totalMarks;
	}

}
