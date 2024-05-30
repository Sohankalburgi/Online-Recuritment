package com.example.OnlineRecruitment.Controllers;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.OnlineRecruitment.Entities.JobSeeker;
import com.example.OnlineRecruitment.Services.JobSeekerService;

@RestController
@CrossOrigin("http://localhost:4200")
public class JobSeekerController {

	@Autowired
	private JobSeekerService jobSeekerService;
	
	@PostMapping("/jobseeker")
	public boolean createJobSeeker(@RequestBody JobSeeker jobSeeker){
		return jobSeekerService.createJobSeeker(jobSeeker);
		
	}
	
	@PostMapping("/jobseeker/{applicationId}")
	public  String uploadResume(@RequestPart MultipartFile file,@PathVariable String applicationId) {
		return jobSeekerService.uploadResume(file,applicationId);
		
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
	
	@GetMapping("/jobseekerpdf/{applicationId}")
	public ResponseEntity<?> downloadFile(@PathVariable String applicationId){
		byte[] pdffile = jobSeekerService.download(applicationId);
		 
	        return new ResponseEntity<>(pdffile, HttpStatus.OK);
	}
}
