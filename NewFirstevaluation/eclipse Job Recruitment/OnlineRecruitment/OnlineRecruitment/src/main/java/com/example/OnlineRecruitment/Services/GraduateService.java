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
	
	public List<Graduate> getAllGraduate(){
		return graduateRepository.findAll();
	}
	
	public boolean checkGraduateExist(String roleId) {
		Graduate graduate = graduateRepository.getByRoleId(roleId);
		
		if(graduate==null) {
			System.out.println("this is false ");
			return false;
		}
		else {
			System.out.println(graduate.toString());
			System.out.println("this is the check graduate"+true);
			return true;
		}
	}

}
