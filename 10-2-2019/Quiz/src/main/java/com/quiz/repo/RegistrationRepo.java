package com.quiz.repo;
 
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.quiz.model.Registration;
 

@Repository
public interface RegistrationRepo extends JpaRepository<Registration, Long>{
 public Registration findByEmail(String email);
 
 
}
