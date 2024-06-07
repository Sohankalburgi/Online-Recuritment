package com.example.OnlineRecruitment.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.OnlineRecruitment.Classes.ResponseMessage;
import com.example.OnlineRecruitment.Entities.Message;
import com.example.OnlineRecruitment.Services.MessageServices;

import jakarta.annotation.PostConstruct;

@RestController
@CrossOrigin("http://localhost:4200")
public class MessageController {
	
	@Autowired
	private MessageServices messageService;
	
	@PostMapping("/sendtoadmin")
	public ResponseEntity<?> sendMessage(@RequestBody Message message){
		try {
			messageService.sendtoadmin(message);
		}
		catch(Exception e) {
			
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ResponseMessage("error"));
		}
		return ResponseEntity.status(HttpStatus.ACCEPTED).body(new ResponseMessage("saved"));
	}
	

	@PostMapping("/sendtograd")
	public ResponseEntity<?> sendMessagetograd(@RequestBody Message message){
		try {
			messageService.sendtograd(message);
		}
		catch(Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ResponseMessage("error"));
		}
		return ResponseEntity.status(HttpStatus.ACCEPTED).body(new ResponseMessage("saved"));
	}
	
	@GetMapping("/getInbox/{roleId}")
	public List<Message> getAllMessageBySenderId(@PathVariable String roleId){
		return messageService.getAllMessageBySenderId(roleId);
	}
	
	@GetMapping("/getInboxforadmin")
	public List<Message> getAllMessageforAdmin(){
		return messageService.getAllMessageforAdmin();
	}
	
	@DeleteMapping("/deletemessage/{id}")
	public ResponseEntity<?> deleteMessage(@PathVariable Long id){
		try {
			messageService.deleteById(id);
		}
		catch(Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ResponseMessage("error"));
		}
		return ResponseEntity.status(HttpStatus.ACCEPTED).body(new ResponseMessage("deleted"));
		
	}
}
