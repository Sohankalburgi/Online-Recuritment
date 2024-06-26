package com.example.OnlineRecruitment.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.OnlineRecruitment.Entities.College;
import com.example.OnlineRecruitment.Entities.Role;
import com.example.OnlineRecruitment.Repositories.CollegeRepository;

@Service
public class CollegeService {
	
	@Autowired
	private CollegeRepository collegeRepository;
	
	
	public String saveRepository(College college) {
		collegeRepository.save(college);
		return "College created";
	}
	
	public College getCollegeByRoleID(String roleId) {
		return collegeRepository.getByRoleId(roleId);
	}

	public String updateCollegeByRoleId(College college, String roleId) {
		// TODO Auto-generated method stub
		College college2 = collegeRepository.getByRoleId(roleId);
		college2.setCollegeAddress(college.getCollegeAddress());
		college2.setCollegeDescription(college.getCollegeDescription());
		college2.setCollegeName(college.getCollegeName());
		
		collegeRepository.save(college2);
		return "updated";
	}

	public String deleteCollegeByRoleId(String roleId) {
		// TODO Auto-generated method stub
		College college = collegeRepository.getByRoleId(roleId);
		collegeRepository.delete(college);
		return "Deleted";
	}
}
