package com.quiz.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.quiz.model.Login;
import java.lang.String;
 
public interface LoginRepo extends JpaRepository<Login, Long> {
	
  @Query(value=" SELECT * FROM from login where user_email_id=?k",nativeQuery=true)
  public List<Login> getLoginDetailBaseEmailAddress(String emailId);
   
  
   List<Login> findByUserEmailId(String useremailid);
}
