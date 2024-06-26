package com.example.OnlineRecruitment.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.OnlineRecruitment.Classes.ResponseMessage;
import com.example.OnlineRecruitment.Entities.Graduate;
import com.example.OnlineRecruitment.Entities.Job;
import com.example.OnlineRecruitment.Services.JobService;

import jakarta.validation.Valid;
import lombok.experimental.PackagePrivate;

@RestController
@CrossOrigin("http://localhost:4200")
public class JobControllers {

	@Autowired
	private JobService jobService;
	
	@PostMapping("/jobs")
	public boolean saveJobs(@Valid @RequestBody Job job){
		try {
		jobService.createJob(job);
		}
		catch(Exception e){
			System.out.println("the exception occured"+e.getMessage());
			return false;
		}
		return true;
	}
	
	@GetMapping("/alljobs")
	public List<Job> getAllJobs(){
		return jobService.getAllJobs();
	}
	// this is meant to get the jobs which is associated with the on employer
	@GetMapping("/jobs/{roleId}")
	public List<Job> getJobById(@PathVariable String roleId) {
		return jobService.getJobById(roleId);
	}
	
	@DeleteMapping("/deletejob/{id}")
	public ResponseEntity<?> deleteJobByRoleId(@PathVariable String id) {
		try {
		jobService.deleteJob(id);
		}
		catch(Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ResponseMessage("error"));
		}
		return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage("Deleted"));
	}
	
	@DeleteMapping("/deletejobbyId/{id}")
	public ResponseEntity<?> deleteJob(@PathVariable Integer id) {
		try {
			jobService.deleteJobById(id);
			}
			catch(Exception e) {
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ResponseMessage("error"));
			}
			return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage("Deleted"));
	}
	
	@PutMapping("/updatejob/{id}")
	public boolean updateJobId(@PathVariable Integer id,@Valid @RequestBody Job job) {
		
		jobService.updateJobById(id, job);
		return true;
	}
	
//	@GetMapping("/listgraduatejobId/{roleId}")
//	public List<Graduate> listallgraduateswithId(@PathVariable String roleId)
//	{
//		return jobService.listOfAllgraduateById(roleId);
//	}
	
	@GetMapping("/jobsByIntegerId/{id}")
	public Job getjobsByInteger(@PathVariable Integer id) {
		return jobService.getJobsByIntegerId(id);
	}
	
	@GetMapping("/jobsBysearch/{prefix}")
	public List<Job> searchJobbyprefix(@PathVariable String prefix){
		return jobService.getJobsBySearch(prefix);
	}
	
}
