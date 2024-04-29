package com.example.OnlineRecruitment.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.OnlineRecruitment.Entities.Job;
@Repository
public interface JobRepository extends JpaRepository<Job,Integer>{

}
