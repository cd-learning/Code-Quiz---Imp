package com.quiz.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.quiz.model.Answer;

@Repository
public interface AnswerRepo extends JpaRepository<Answer, Long> {

}
