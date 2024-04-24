package com.example.Job_Recuritment.Registration;

import com.example.Job_Recuritment.Model.Role;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;


import java.util.Date;
import java.util.List;



@Data
public class RegistrationRequest {

    private String FullName;
    private String  Address;
    private String email;
    private String Phone;
    private String Password;
    private Date DOB;
    private String Gender;
    private String Nationality;
    
	public String getFullName() {
		return FullName;
	}
	public void setFullName(String fullName) {
		FullName = fullName;
	}
	public String getAddress() {
		return Address;
	}
	public void setAddress(String address) {
		Address = address;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhone() {
		return Phone;
	}
	public void setPhone(String phone) {
		Phone = phone;
	}
	public String getPassword() {
		return Password;
	}
	public void setPassword(String password) {
		Password = password;
	}
	public Date getDOB() {
		return DOB;
	}
	public void setDOB(Date dOB) {
		DOB = dOB;
	}
	public String getGender() {
		return Gender;
	}
	public void setGender(String gender) {
		Gender = gender;
	}
	public String getNationality() {
		return Nationality;
	}
	public void setNationality(String nationality) {
		Nationality = nationality;
	}


}
