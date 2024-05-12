package com.example.OnlineRecruitment.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.OnlineRecruitment.Entities.Employer;
import com.example.OnlineRecruitment.Repositories.EmployerRepository;

@Service
public class EmployerService {
	@Autowired
	EmployerRepository employerRepository;
	
	public String saveEmployer(Employer employer) {
		employerRepository.save(employer);
		return "Created";
	}
	
	public List<Employer> getAllEmployer(){
		return employerRepository.findAll();
	}
	
	public Employer getEmployerById(String roleId) {
		return employerRepository.getByRoleId(roleId);
	}
	
	public boolean checkEmployerExist(String roleId) {
		Employer employer = employerRepository.getByRoleId(roleId);
		if(employer==null) {
			return false;
		}
		else {
			return true;
		}
	}
}
