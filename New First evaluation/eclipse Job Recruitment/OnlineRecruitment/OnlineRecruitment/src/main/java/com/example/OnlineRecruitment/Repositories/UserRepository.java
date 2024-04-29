package com.example.OnlineRecruitment.Repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.OnlineRecruitment.Entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>{
	

}
