package com.quiz.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.quiz.model.Question;

@Repository
public interface QuestionRepo extends JpaRepository<Question, Long>{

 public Question findByQuestionId(int questionid);
}
