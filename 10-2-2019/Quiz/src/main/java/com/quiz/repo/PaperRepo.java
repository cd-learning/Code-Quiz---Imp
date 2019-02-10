package com.quiz.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.quiz.model.Paper;

@Repository
public interface PaperRepo extends JpaRepository<Paper,Long> {

}
