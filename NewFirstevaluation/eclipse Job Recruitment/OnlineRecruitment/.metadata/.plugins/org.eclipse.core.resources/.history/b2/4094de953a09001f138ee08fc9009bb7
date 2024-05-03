package com.example.OnlineRecruitment.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.OnlineRecruitment.Entities.Graduate;
import com.example.OnlineRecruitment.Repositories.GraduateRepository;

@Service
public class GraduateService {
	
	@Autowired
	GraduateRepository graduateRepository;
	
	public void saveGraduate(Graduate graduate) {
		graduateRepository.save(graduate);
	}
	
	public Graduate getGraduateById(String roleId) {
		
		return graduateRepository.getByRoleId(roleId);
	}
	
	public boolean checkGraduateExists(String graduateId) {
		return graduateRepository.existsById(graduateId);
	}
	
	public List<Graduate> getAllGraduate(){
		return graduateRepository.findAll();
	}

}
