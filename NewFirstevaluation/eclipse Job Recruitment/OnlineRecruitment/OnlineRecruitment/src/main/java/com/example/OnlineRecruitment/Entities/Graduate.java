//package com.example.OnlineRecruitment.Entities;
//
//import jakarta.persistence.CascadeType;
//import jakarta.persistence.Entity;
//import jakarta.persistence.GeneratedValue;
//import jakarta.persistence.GenerationType;
//import jakarta.persistence.Id;
//import jakarta.persistence.JoinColumn;
//import jakarta.persistence.OneToOne;
//
//@Entity
//public class Graduate {
//	@Id
//	@GeneratedValue(strategy = GenerationType.AUTO)
//	private Long graduateId;
//	
//	private String name;
//	
//	private String email;
//	
//	private String phone;
//	
//	private String yearOfPassing;
//	
//	private String percentage;
//	
//	private String language;
//	
//	private String keySkill;
//	
//	private String project;
//	
//	@OneToOne(cascade = CascadeType.ALL)
//	@JoinColumn(name = "roleId")
////	private Role role;
//	
//	
//}
