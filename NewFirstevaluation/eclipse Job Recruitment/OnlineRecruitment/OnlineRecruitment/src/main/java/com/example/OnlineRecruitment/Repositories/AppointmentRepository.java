package com.example.OnlineRecruitment.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.OnlineRecruitment.Entities.Appointment;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, String> {

	@Query("SELECT a FROM Appointment a WHERE a.isSet = 0 AND a.jobSeeker.job.roleId.roleId =:roleId")
	List<Appointment> getAllAppointmentNotSet(String roleId);
	
	@Query("SELECT a FROM Appointment a WHERE a.jobSeeker.job.roleId.roleId =:roleId AND a.isSet = 1")
	List<Appointment> getAllAppointmentSet(String roleId);

	@Query("SELECT a FROM Appointment a WHERE a.jobSeeker.graduate.roleId.roleId=:roleId AND a.status ='Pending'")
	List<Appointment> getAppointmentpending(String roleId);

	@Query("SELECT a FROM Appointment a WHERE a.jobSeeker.graduate.roleId.roleId=:roleId AND a.status ='Accepted'")
	List<Appointment> getAllappointmentaccpeted(String roleId);

	@Query("SELECT a FROM Appointment a WHERE a.jobSeeker.graduate.roleId.roleId=:roleId AND a.status ='Rejected'")
	List<Appointment> getAppointmentrejected(String roleId);

	
}
