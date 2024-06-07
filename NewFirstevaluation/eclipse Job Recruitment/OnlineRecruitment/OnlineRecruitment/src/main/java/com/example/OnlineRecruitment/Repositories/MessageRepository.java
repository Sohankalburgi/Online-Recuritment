package com.example.OnlineRecruitment.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.OnlineRecruitment.Entities.Message;

@Repository
public interface MessageRepository extends JpaRepository<Message,Long> {

	@Query("SELECT m FROM Message m WHERE m.senderId = :senderId OR m.receiverId = :senderId ")
	List<Message> getAllMessageBySenderId(String senderId);

	@Query("SELECT m FROM Message m WHERE m.receiverId = :a OR m.senderId = :a")
	List<Message> getAllMessageforAdmin(String a);

	
}
