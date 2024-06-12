package com.example.OnlineRecruitment.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.example.OnlineRecruitment.Classes.FileUtil;
import com.example.OnlineRecruitment.Entities.Appointment;
import com.example.OnlineRecruitment.Entities.Message;
import com.example.OnlineRecruitment.Repositories.AppointmentRepository;
import com.example.OnlineRecruitment.Repositories.MessageRepository;
@Service
public class AppointmentService {
	
	@Autowired
	private AppointmentRepository appointmentRepository;
	
	@Autowired
	private JavaMailSender javaMailSender;
	
	@Autowired
	private MessageRepository messageRepository;
	
	public void saveAppointment(String applicantId, Appointment appointment) {
		// TODO Auto-generated method stub
		Appointment appoint = appointmentRepository.getById(applicantId);
		appoint.setDate(appointment.getDate());
		appoint.setLocation(appointment.getLocation());
		appoint.setSet(1);
		appoint.setStatus("Accepted");
		appointmentRepository.save(appoint);
		
		String email = appoint.getJobSeeker().getEmail();
		String JobName = appoint.getJobSeeker().getJob().getJobName();
		String JobDescription = appoint.getJobSeeker().getJob().getJobDescription();
		String text = "Your Application/appointmentId is : "+applicantId+"\n "+"Appointment Date is :"+appointment.getDate()+"\n "+
				 "Location :"+appointment.getLocation()+"\n "+"Job Name :"+JobName+"\n "+"Job Description :"+JobDescription;
		
		Message message = new Message();
		message.setMessage(text);
		message.setSenderId(appoint.getJobSeeker().getJob().getRoleId().getRoleId());
		message.setReceiverId(appoint.getJobSeeker().getGraduate().getRoleId().getRoleId());
		
		messageRepository.save(message);
		
		sendEmail(email,text,"Appointment Scheduled AND Location");
		
	}
	
	 private void sendEmail(String email,String text,String Subject) {
	
	        SimpleMailMessage message = new SimpleMailMessage();
	        message.setTo(email);
	        message.setSubject(Subject);
	        message.setText(text);
	        javaMailSender.send(message);
	    }

	public List<Appointment> getAllAppointmentNotSet(String roleId) {
		return appointmentRepository.getAllAppointmentNotSet(roleId);
		
	}

	public List<Appointment> getAllAppointmentSet(String roleId) {
		System.out.println(roleId);
		return appointmentRepository.getAllAppointmentSet(roleId);
	}

	public void rejectAppointment(String applicantId) {
		Appointment appoint = appointmentRepository.getById(applicantId);
		String text = "This Email is regarding that Your Application :"+" "+appoint.getApplicantId()+" "+
				"is rejected by the Employer Due to not satisfied requirement to the Company";
		String Subject ="Appointment Rejected";
		
		Message message = new Message();
		message.setMessage(Subject+"\n"+text);
		message.setSenderId(appoint.getJobSeeker().getJob().getRoleId().getRoleId());
		message.setReceiverId(appoint.getJobSeeker().getGraduate().getRoleId().getRoleId());
		appoint.setSet(2);
		appoint.setStatus("Rejected");
		appoint.setDate("null");
		appoint.setLocation("null");
		System.out.println(appoint.getApplicantId());
		System.out.println(appoint.getStatus());
		System.out.println(appoint.getJobSeeker().getEmail());
		
		
		appointmentRepository.save(appoint);
		messageRepository.save(message);
		sendEmail(appoint.getJobSeeker().getEmail(),text,Subject);

	}

	public byte[] download(String applicantId) {
		Appointment appoint = appointmentRepository.getById(applicantId);
		
		return FileUtil.decompressFile(appoint.getJobSeeker().getResume());
	}

	public List<Appointment> getAppointmentpending(String roleId) {
		// TODO Auto-generated method stub
		return appointmentRepository.getAppointmentpending(roleId);
	}

	public List<Appointment> getAppointmentaccepted(String roleId) {
		// TODO Auto-generated method stub
		return appointmentRepository.getAllappointmentaccpeted(roleId);
	}

	public List<Appointment> getAppointmentrejected(String roleId) {
		// TODO Auto-generated method stub
		return appointmentRepository.getAppointmentrejected(roleId);
	}

	
	    
}
