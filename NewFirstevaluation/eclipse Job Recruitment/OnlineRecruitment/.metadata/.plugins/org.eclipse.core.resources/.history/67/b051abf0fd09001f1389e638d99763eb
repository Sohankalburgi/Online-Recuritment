package com.example.OnlineRecruitment.Entities;

import org.hibernate.annotations.NaturalId;

import jakarta.persistence.CascadeType;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.MapsId;
import jakarta.persistence.OneToOne;
import jakarta.validation.constraints.NotEmpty;

@Entity
public class Graduate{

	@OneToOne(fetch = FetchType.EAGER)
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
	@NotEmpty(message = "Enter the collegeName")
	private String collegeName;
	@NotEmpty(message = "Enter the collegeAddress")
	private String collegeAddress;
	@NotEmpty(message = "Enter the YearOfPassing")
	private String yearOfPassing;
	@NotEmpty(message = "Enter the Percentage")
	private String cgpa;
	
	
	
	public Graduate() {
		super();
	}

	public Graduate(Role roleId, String city, String state, String pinCode, String collegeName,
			String collegeAddress, String yearOfPassing,String cgpa) {
		super();
		this.roleId = roleId;
		this.city = city;
		this.state = state;
		this.pinCode = pinCode;
		this.collegeName = collegeName;
		this.collegeAddress = collegeAddress;
		this.yearOfPassing = yearOfPassing;
		this.cgpa = cgpa;
		
	}

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

	public String getCollegeName() {
		return collegeName;
	}

	public void setCollegeName(String collegeName) {
		this.collegeName = collegeName;
	}

	public String getCollegeAddress() {
		return collegeAddress;
	}

	public void setCollegeAddress(String collegeAddress) {
		this.collegeAddress = collegeAddress;
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

	
}
