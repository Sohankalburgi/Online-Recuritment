package com.example.OnlineRecruitment.Controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.OnlineRecruitment.Classes.ResponseMessage;
import com.example.OnlineRecruitment.Entities.College;
import com.example.OnlineRecruitment.Services.CollegeService;

@RestController
@CrossOrigin("http://localhost:4200")
public class CollegeController {
	
	@Autowired
	private CollegeService collegeService;
	
	@PostMapping("/college")
	public ResponseEntity<?> saveCollege(@RequestBody College college) {
		try { 
		collegeService.saveRepository(college);
		}
		catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ResponseMessage("error"));
		}
		return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage("created"));
	}
	
	
	@GetMapping("/college/{roleId}")
	public College getCollegeByRoleId(@PathVariable String roleId) {
		return collegeService.getCollegeByRoleID(roleId);
	}
	
	@PutMapping("/updatecollege/{roleId}")
	public ResponseEntity<?> updateCollege(@RequestBody College college,@PathVariable String
			roleId) {
		try {
		 collegeService.updateCollegeByRoleId(college,roleId);
		}
		catch(Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ResponseMessage("error"));
		}
		return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage("saved"));
	}
	
	@DeleteMapping("/deletecollege/{roleId}")
	public ResponseEntity<?> deleteCollege(@PathVariable String roleId) {
		try{collegeService.deleteCollegeByRoleId(roleId);}
		catch(Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ResponseMessage("error"));
		}
		return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage("saved"));
	}
	
	
}
