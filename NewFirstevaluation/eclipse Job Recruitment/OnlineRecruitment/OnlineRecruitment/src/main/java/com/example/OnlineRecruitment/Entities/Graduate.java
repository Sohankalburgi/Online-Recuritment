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
	
	@NotEmpty(message = "Enter the Student Id")
	@Id
	private String studentId;
	
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
	private String percentage;
	@NotEmpty(message = "Enter the Language")
	private String language;
	@NotEmpty(message = "Enter the keySkills")
	private String keySkill;
	@NotEmpty(message = "Enter the Project")
	private String project;
	
	
	public Graduate() {
		super();
	}

	public Graduate(Role roleId, String studentId, String city, String state, String pinCode, String collegeName,
			String collegeAddress, String yearOfPassing, String percentage, String language, String keySkill,
			String project) {
		super();
		this.roleId = roleId;
		this.studentId = studentId;
		this.city = city;
		this.state = state;
		this.pinCode = pinCode;
		this.collegeName = collegeName;
		this.collegeAddress = collegeAddress;
		this.yearOfPassing = yearOfPassing;
		this.percentage = percentage;
		this.language = language;
		this.keySkill = keySkill;
		this.project = project;
	}

	public Role getRoleId() {
		return roleId;
	}

	public void setRoleId(Role roleId) {
		this.roleId = roleId;
	}
	

	public String getStudentId() {
		return studentId;
	}

	public void setStudentId(String studentId) {
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

	public String getPercentage() {
		return percentage;
	}

	public void setPercentage(String percentage) {
		this.percentage = percentage;
	}

	public String getLanguage() {
		return language;
	}

	public void setLanguage(String language) {
		this.language = language;
	}

	public String getKeySkill() {
		return keySkill;
	}

	public void setKeySkill(String keySkill) {
		this.keySkill = keySkill;
	}

	public String getProject() {
		return project;
	}

	public void setProject(String project) {
		this.project = project;
	}
	
	
}