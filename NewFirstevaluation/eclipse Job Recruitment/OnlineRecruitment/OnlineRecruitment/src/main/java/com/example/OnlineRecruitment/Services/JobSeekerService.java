package com.example.OnlineRecruitment.Services;

import java.io.File;
import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.OnlineRecruitment.Classes.FileUtil;
import com.example.OnlineRecruitment.Entities.Appointment;
import com.example.OnlineRecruitment.Entities.Job;
import com.example.OnlineRecruitment.Entities.JobSeeker;
import com.example.OnlineRecruitment.Entities.Message;
import com.example.OnlineRecruitment.Repositories.JobRepository;
import com.example.OnlineRecruitment.Repositories.JobSeekerRepository;
import com.example.OnlineRecruitment.Repositories.MessageRepository;
@Service
public class JobSeekerService {

	@Autowired
	private JobSeekerRepository jobSeekerRepository;
	
	@Autowired
	private JavaMailSender javaMailSender;
	
	@Autowired
	private EmployerService employerService;
	
	@Autowired
	private JobService jobService;
	@Autowired
	private UserService userService;
	
	@Autowired
	private MessageRepository messageRepository;
	

	public boolean createJobSeeker(JobSeeker jobSeeker) {
		String gradId = jobSeeker.getGraduate().getRoleId().getRoleId();
		String jobId = jobSeeker.getJob().getJobId().toString();

		Appointment appointment = new Appointment();
		
		String applicantId = gradId.concat(jobId);
		
		appointment.setApplicantId(applicantId);
		appointment.setStatus("Pending");
		
		jobSeeker.setAppointment(appointment);
		
	
			
		 
		jobSeekerRepository.save(jobSeeker);
		
		String roleStringId = jobService.getRoleIdbYjobId(jobSeeker.getJob().getJobId());
		
  	 JobSeeker jobseeker2 = jobSeekerRepository.getByAppointmentId(applicantId);
		
		String employeeEmail = userService.findByEmailRoleId(roleStringId);
		
		Job job2 = jobService.getJobsByIntegerId(Integer.valueOf(jobId));
		
	
		//this is for the graduate
		sendEmailtoGraduate(jobSeeker.getEmail(),jobSeeker,roleStringId,job2,gradId);
		// this is for the employer
		sendEmailtoEmployer(employeeEmail,jobseeker2,job2,roleStringId,gradId);
		
		return true;
	}
	
	private void sendEmailtoGraduate(String email,JobSeeker jobSeeker,String roleStringId,Job job,String gradId) {
        SimpleMailMessage message = new SimpleMailMessage();
        String text = "Your Application Id is :"+jobSeeker.getAppointment().getApplicantId()+
        		"\n Company Name:"+ employerService.getEmployerById(roleStringId).getCompanyName()+
        		"\n JobName:"+job.getJobName()+"\n Applicant Name:"+jobSeeker
        		.getFullName()+"\n Job Type:"+job.getJobType()+"\n Job Location:"+job.getJobLocation()+"\n email:"+jobSeeker.getEmail();
        
        message.setTo(email);
        message.setSubject("Job Application Submitted");
        message.setText(text);
        
        // to grad notification
        Message m1 = new Message();
        m1.setMessage("Job Application Submitted Notification :\n"+text);
        m1.setReceiverId(gradId);
        m1.setSenderId(roleStringId);
        
        messageRepository.save(m1);
        
        javaMailSender.send(message);
    }
	
	private void sendEmailtoEmployer(String email,JobSeeker jobSeeker,Job job,String roleStringId,String gradId) {
		 SimpleMailMessage message = new SimpleMailMessage();
		 String text = "The Application Id is :"+jobSeeker.getAppointment().getApplicantId()+
				 "\n The Job Id :"+job.getJobId()+"\n The Job Type:"+job.getJobType()+
				 "\n The Job Name:"+job.getJobName()+"\n The Student Details"+"\n Name:"+
				 jobSeeker.getFullName()+ "\n Phone:"+jobSeeker.getPhone()+"\n Email:"+jobSeeker.getEmail()+"\n CGPA:"+
				 jobSeeker.getCgpa()+"\n Year Of Passing :"+jobSeeker.getYearOfPassing()+"\n KeySkills:"+jobSeeker.getKeySkill()+
				 "\n Project:"+jobSeeker.getProject();
		 	message.setTo(email);
	        message.setSubject("Job Application Submitted");
	        message.setText(text);
	        
	        Message m1 = new Message();
	        m1.setMessage("Job Application Submitted :\n"+text);
	        m1.setReceiverId(roleStringId);
	        m1.setSenderId(gradId);
	        
	        messageRepository.save(m1);
	        
	        javaMailSender.send(message);
		 
	}

	public List<JobSeeker> getalljobseeker() {
		// TODO Auto-generated method stub
		return jobSeekerRepository.findAll();
	}

	public List<JobSeeker> getalljobseekerbyemployeeId(String employeeId) {
		// TODO Auto-generated method stub
		return jobSeekerRepository.getAllJobseekerByemployeeId(employeeId);
	}

	public List<JobSeeker> getAlljobsByStudentId(String studentId) {
		// TODO Auto-generated method stub
		return jobSeekerRepository.getAllJobSeekerByStudentId(studentId);
	}

	public String uploadResume(MultipartFile file,String applicationId) {
		// TODO Auto-generated method stub
		JobSeeker jobseeker = jobSeekerRepository.getByAppointmentId(applicationId);
		
		try {
			jobseeker.setResume(FileUtil.compressFile(file.getBytes()));
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		jobSeekerRepository.save(jobseeker);
		return "file uploaded";
	}

	public byte[] download(String applicationId) {
		// TODO Auto-generated method stub
		JobSeeker jobseeker = jobSeekerRepository.getByAppointmentId(applicationId);
		
		return jobseeker.getResume();
	}
	
	
	
	
	
}
