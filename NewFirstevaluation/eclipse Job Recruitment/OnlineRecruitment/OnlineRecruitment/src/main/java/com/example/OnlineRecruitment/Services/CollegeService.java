package com.example.OnlineRecruitment.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.OnlineRecruitment.Entities.College;
import com.example.OnlineRecruitment.Repositories.CollegeRepository;

@Service
public class CollegeService {
	
	@Autowired
	private CollegeRepository collegeRepository;
	
	
	public String saveRepository(College college) {
		collegeRepository.save(college);
		return " College created";
	}
	
	public College getCollegeByRoleID(String roleId) {
		return collegeRepository.getByRoleId(roleId);
	}
}
