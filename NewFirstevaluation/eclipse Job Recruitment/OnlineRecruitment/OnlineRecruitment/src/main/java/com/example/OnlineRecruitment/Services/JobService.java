package com.example.OnlineRecruitment.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.OnlineRecruitment.Entities.Job;
import com.example.OnlineRecruitment.Repositories.JobRepository;
import com.example.OnlineRecruitment.ServiceInterface.JobServiceInterface;
@Service
public class JobService implements JobServiceInterface{
	
	@Autowired
	private JobRepository jobRepository;
	
	@Override
	public void createJob(Job job) {
		jobRepository.save(job);
	}
	@Override
	public void deleteJob(Integer id) {
		jobRepository.deleteById(id);
	}
	@Override
	public Job getJobById(Integer id) {
		return jobRepository.getById(id);
	}
	@Override
	public List<Job> getAllJobs(){
		return jobRepository.findAll();
	}
	@Override
	public void updateJobById(Integer id,Job job) {
		Job updateJob = jobRepository.getById(id);
		updateJob.setJobDescription(job.getJobDescription());
		updateJob.setJobName(job.getJobName());
		updateJob.setJobSalary(job.getJobSalary());
		updateJob.setJobType(job.getJobType());
		updateJob.setJobVacancy(job.getJobVacancy());
		
		jobRepository.save(updateJob);
	}
}