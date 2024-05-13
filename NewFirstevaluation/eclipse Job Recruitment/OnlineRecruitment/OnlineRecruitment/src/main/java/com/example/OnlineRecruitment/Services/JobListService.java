
package com.example.OnlineRecruitment.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.OnlineRecruitment.Repositories.JobListRepository;
import com.example.OnlineRecruitment.Entities.JobList;

import java.util.List;

@Service
public class JobListService {

    @Autowired
    private JobListRepository jobListRepository;

    public List<JobList> getAllJobs() {
        return jobListRepository.findAll();
    }
}
