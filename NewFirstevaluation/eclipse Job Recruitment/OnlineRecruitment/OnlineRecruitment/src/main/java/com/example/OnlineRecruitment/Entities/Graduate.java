package com.example.OnlineRecruitment.Entities;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.annotations.NaturalId;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonIgnoreType;

import jakarta.persistence.CascadeType;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MapsId;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.validation.constraints.NotEmpty;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Graduate{

	
	
	@OneToOne(fetch = FetchType.EAGER,cascade = CascadeType.MERGE)
	@JoinColumn(name = "roleId")
	private Role roleId;
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long studentId;
	
	@NotEmpty(message = "Enter the city")
	private String city;
	@NotEmpty(message = "Enter the state")
	private String state;
	@NotEmpty(message = "Enter the pincode")
	private String pinCode;

	@NotEmpty(message = "Enter the YearOfPassing")
	private String yearOfPassing;
	@NotEmpty(message = "Enter the Percentage")
	private String cgpa;
	
	
//	@ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.MERGE)
//	private Job job;

	@OneToMany(fetch = FetchType.EAGER,cascade = CascadeType.ALL,mappedBy = "graduate")
	@JsonIgnore
	@JsonIgnoreProperties
	private List<JobSeeker> jobseeker = new ArrayList<>();
	
	public Graduate() {
		super();
	}
	public Graduate(Role roleId, Long studentId, @NotEmpty(message = "Enter the city") String city,
			@NotEmpty(message = "Enter the state") String state,
			@NotEmpty(message = "Enter the pincode") String pinCode,
			@NotEmpty(message = "Enter the YearOfPassing") String yearOfPassing,
			@NotEmpty(message = "Enter the Percentage") String cgpa, List<JobSeeker> jobseeker) {
		super();
		this.roleId = roleId;
		this.studentId = studentId;
		this.city = city;
		this.state = state;
		this.pinCode = pinCode;
		this.yearOfPassing = yearOfPassing;
		this.cgpa = cgpa;
		this.jobseeker = jobseeker;
	}
	
	
	public List<JobSeeker> getJobseeker() {
		return jobseeker;
	}


	public void setJobseeker(List<JobSeeker> jobseeker) {
		this.jobseeker = jobseeker;
	}
	
//	public Job getJobs() {
//		return job;
//	}
//
//
//	public void setJobs(Job job) {
//		this.job = job;
//	}

	public Role getRoleId() {
		return roleId;
	}

	public void setRoleId(Role roleId) {
		this.roleId = roleId;
	}
	

	public Long getStudentId() {
		return studentId;
	}

	public void setStudentId(Long studentId) {
		this.studentId = studentId;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getPinCode() {
		return pinCode;
	}

	public void setPinCode(String pinCode) {
		this.pinCode = pinCode;
	}

	
	public String getYearOfPassing() {
		return yearOfPassing;
	}

	public void setYearOfPassing(String yearOfPassing) {
		this.yearOfPassing = yearOfPassing;
	}

	public String getCgpa() {
		return cgpa;
	}

	public void setCgpa(String cgpa) {
		this.cgpa = cgpa;
	}
	@Override
	public String toString() {
		return "Graduate [roleId=" + roleId + ", studentId=" + studentId + ", city=" + city + ", state=" + state
				+ ", pinCode=" + pinCode + ", yearOfPassing=" + yearOfPassing + ", cgpa=" + cgpa + "]";
	}

	
	
}
