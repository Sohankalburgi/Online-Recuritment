package com.example.OnlineRecruitment.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.OnlineRecruitment.Services.JobListService;
import com.example.OnlineRecruitment.Entities.JobList;

import java.util.List;

@RestController
public class JobListController {
	
    @Autowired
    private JobListService jobListService;

    @GetMapping("/jobList")
    public List<JobList> getAllJobs() {
        return jobListService.getAllJobs();
    }
}
