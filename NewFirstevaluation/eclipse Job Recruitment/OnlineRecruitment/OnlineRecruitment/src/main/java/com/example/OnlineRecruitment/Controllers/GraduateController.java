package com.example.OnlineRecruitment.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.OnlineRecruitment.Entities.Graduate;
import com.example.OnlineRecruitment.Services.GraduateService;

@RestController
public class GraduateController {
	@Autowired
	GraduateService graduateService;
	
	@PostMapping("/graduate")
	public String saveGraduate(@RequestBody Graduate graduate) {
		//TODO: process POST request
		graduateService.saveGraduate(graduate);
		return "created";
	}
	
	@GetMapping("/graduate/{id}")
	public Graduate getGraduateById(@PathVariable String id) {
		return graduateService.getGraduateById(id);
	}
	
	@GetMapping("/allgraduate")
	public List<Graduate> getallgraduate() {
		return graduateService.getAllGraduate();
	}
	
}