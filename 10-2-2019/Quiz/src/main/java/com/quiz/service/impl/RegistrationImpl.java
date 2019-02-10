package com.quiz.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.quiz.model.Registration;
import com.quiz.repo.RegistrationRepo;
import com.quiz.service.RegistrationService;

@Service
public class RegistrationImpl implements RegistrationService {

	@Autowired
	public RegistrationRepo registrationRepo;

	@Override
	public void saveRegistrationInfo(Registration registration) {
		registrationRepo.save(registration);
	}

	@Override
	public List<Registration> getRegistrationInfo() {
		return registrationRepo.findAll();
	}

	@Override
	public Registration checkUsernamePassword(String email) {
		return registrationRepo.findByEmail(email);
	}

	@Override
	public int checkIsPresent(String email) {
		int returnVal = 0;
		Registration reg = registrationRepo.findByEmail(email);
		if (reg != null) {
			returnVal = (int) reg.getRegistrationId();
		} else
			returnVal = 0;
		return returnVal;
	}

}
