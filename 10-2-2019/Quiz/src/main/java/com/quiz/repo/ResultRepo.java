package com.quiz.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.quiz.model.Result;


public interface ResultRepo extends JpaRepository<Result, Long>{

}
