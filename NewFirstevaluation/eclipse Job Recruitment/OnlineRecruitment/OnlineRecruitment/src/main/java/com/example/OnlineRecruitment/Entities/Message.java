package com.example.OnlineRecruitment.Entities;

import org.springframework.beans.factory.annotation.Autowired;

import jakarta.annotation.Generated;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

@Entity
public class Message {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	
	private String senderId;
	@Column(columnDefinition = "TEXT")
	private String message;
	

	private String receiverId;
	
	

	public Message() {
		super();
	}

	public Message(Long id, String senderId, String message, String receiverId) {
		super();
		this.id = id;
		this.senderId = senderId;
		this.message = message;
		this.receiverId = receiverId;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getSenderId() {
		return senderId;
	}

	public void setSenderId(String senderId) {
		this.senderId = senderId;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getReceiverId() {
		return receiverId;
	}

	public void setReceiverId(String receiverId) {
		this.receiverId = receiverId;
	}

	@Override
	public String toString() {
		return "Message [id=" + id + ", senderId=" + senderId + ", message=" + message + ", receiverId=" + receiverId
				+ "]";
	}

	
	
}
