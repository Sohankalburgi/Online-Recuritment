package com.example.OnlineRecruitment.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.OnlineRecruitment.Entities.JobList;

@Repository
public interface JobListRepository extends JpaRepository<JobList, Long> {
	@Query("SELECT * FROM JobList")
			List<JobList> findAll();
}
