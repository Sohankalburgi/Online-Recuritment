package com.example.OnlineRecruitment.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


import com.example.OnlineRecruitment.Entities.Job;
@Repository
public interface JobRepository extends JpaRepository<Job,Integer>{

	@Query("SELECT j FROM Job j WHERE j.roleId.roleId = :roleId")
	Job getByRoleId(String roleId);
}
