package com.example.OnlineRecruitment.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.OnlineRecruitment.Entities.Employer;
import com.example.OnlineRecruitment.Services.EmployerService;

@RestController
public class EmployerControllers {
	
	@Autowired
	EmployerService employerService;
	
	@PostMapping("/employer")
	public String saveEmployer(@RequestBody Employer employer) {
		return employerService.saveEmployer(employer); 
	}
	
	@GetMapping("/allemployer")
	public List<Employer> getAllEmployer(){
		return employerService.getAllEmployer();
	}
	
	@GetMapping("/employer/{id}")
	public Employer getById(@PathVariable String id) {
		return employerService.getEmployerById(id);
	}
}
