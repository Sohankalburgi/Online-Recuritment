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

	public String updateEmployer(String roleId, Employer employer) {
		// TODO Auto-generated method stub
		System.out.println(roleId+" inside the serivce");
		System.out.println(employer.toString());
		Employer emp = employerRepository.getByRoleId(roleId);
		emp.setCompanyAddress(employer.getCompanyAddress());
		emp.setCompanyDescription(employer.getCompanyDescription());
		emp.setCompanyName(employer.getCompanyName());
		emp.setCompanySize(employer.getCompanySize());
		emp.setCompanyType(employer.getCompanyType());
		emp.setRoleInCompany(employer.getRoleInCompany());
		employerRepository.save(emp);
		return "updated";
	}

	public String deleteEmployer(String roleId) {
		// TODO Auto-generated method stub
		Employer employer = employerRepository.getByRoleId(roleId);
		employerRepository.delete(employer);
		return "deleted";
	}
}
