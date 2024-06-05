package com.example.OnlineRecruitment.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.example.OnlineRecruitment.Entities.Message;
import com.example.OnlineRecruitment.Entities.User;
import com.example.OnlineRecruitment.Repositories.MessageRepository;
import com.example.OnlineRecruitment.Repositories.UserRepository;

@Service
public class MessageServices {

	@Autowired
	private MessageRepository messageRepository;
	
	@Autowired
	private JavaMailSender javaMailSender;
	
	
	@Autowired
	private UserRepository userRepository;
	
	public void sendtoadmin(Message message) {
		message.setReceiverId("admin");
		User user = userRepository.findUserByRoleId(message.getSenderId());
		String text = "The Request Regarding the Message which is given below is submitted: " + message.getMessage();
	
		messageRepository.save(message);
		sendEmail(user.getEmail(),text);
		sendEmail("sohankalburgi2004@gmail.com",text);
		
	}
	
	  private void sendEmail(String email,String text) {
	        SimpleMailMessage message = new SimpleMailMessage();
	        message.setTo(email);
	        message.setSubject("Contact Us Support Was Submitted");
	        message.setText(text);
	        javaMailSender.send(message);
	 }
	    

	public List<Message> getAllMessageBySenderId(String roleId) {
		// TODO Auto-generated method stub
		return messageRepository.getAllMessageBySenderId(roleId);
	}

	public void deleteById(Long id) {
		// TODO Auto-generated method stub
		messageRepository.deleteById(id);
	}

	public List<Message> getAllMessageforAdmin() {
		// TODO Auto-generated method stub
		return messageRepository.getAllMessageforAdmin("admin");
	}

	public void sendtograd(Message message) {
		System.out.println(message.getId());
		Message prevMessage = messageRepository.getById(message.getId());
		String noti = "\n"+prevMessage.getMessage()+"\n The Reply: \n"+message.getMessage();
		message.setMessage(noti);
		messageRepository.save(message);
		User user = userRepository.findUserByRoleId(message.getReceiverId());
		String text = "The Request Regarding the Message which is given below is submitted: " + message.getMessage();
		sendEmail(user.getEmail(),text);
		sendEmail("sohankalburgi2004@gmail.com",text);
		
	}
}
