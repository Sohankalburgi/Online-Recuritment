package com.example.OnlineRecruitment.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.OnlineRecruitment.Entities.JobSeeker;
import com.example.OnlineRecruitment.Services.JobSeekerService;

@RestController
public class JobSeekerController {

	@Autowired
	private JobSeekerService jobSeekerService;
	
	@PostMapping("/jobseeker")
	public String createJobSeeker(@RequestBody JobSeeker jobSeeker) {
		return jobSeekerService.createJobSeeker(jobSeeker);
	}
	
	@GetMapping("/jobseekerall")
	public List<JobSeeker> alljobSeeker(){
		return jobSeekerService.getalljobseeker();
	}
	
	@GetMapping("/jobseeker/{employeeId}")
	public List<JobSeeker> alljobSeekeremployeeId(@PathVariable String employeeId){
		return jobSeekerService.getalljobseekerbyemployeeId(employeeId);
	}
	
	@GetMapping("/jobseekergraduate/{studentId}")
	public List<JobSeeker> allJobSeekerStudentId(@PathVariable String studentId){
		return jobSeekerService.getAlljobsByStudentId(studentId);
	}
}
