package com.example.OnlineRecruitment.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.OnlineRecruitment.Classes.Email;
import com.example.OnlineRecruitment.Classes.ForgotPassword;
import com.example.OnlineRecruitment.Classes.ResponseMessage;
import com.example.OnlineRecruitment.Entities.Role;
import com.example.OnlineRecruitment.Entities.User;

import com.example.OnlineRecruitment.Services.UserService;

import jakarta.validation.Valid;



@RestController
@CrossOrigin("http://localhost:4200")
public class UserController {
	
	@Autowired
	private UserService userService;

	
	@PostMapping("/user")
	public ResponseEntity<?> saveUser(@Valid @RequestBody User user){
		try {
		System.out.println("the enter to backend");
		userService.saveUser(user);
		}
		catch(Exception e) {
			System.out.println("the exception occured"+e.getMessage());
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ResponseMessage("error"));
		}
		return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage("Created"));
	}
	
	@GetMapping("/user/{id}")
	public User getUserById(@PathVariable Integer id) {
		return userService.getUserById(id);
	}
	
	@GetMapping("/alluser")
	public List<User> getAllUser(){
		return userService.getAllUsers();
	}
	
	@DeleteMapping("/userdelete/{id}")
	public boolean userDeleteById(@PathVariable String id) {
		userService.deleteUser(id);
		return true;
	}
	@PutMapping("/userupdate/{roleid}")
	public boolean userUpdateById(@PathVariable String  roleid,@Valid @RequestBody User user) {
		
		System.out.println(user.toString());
		
		userService.updateUserById(roleid, user);
		return true;
	}
	
	@PostMapping("/userlogin")
	public boolean checkUserexist(@RequestBody Email email) {
		try {
		System.out.println(email.toString());
		return userService.checkUserexist(email);
		}
		catch(Exception e) {
			System.out.println("the Exception occured"+e.getMessage());
			return false;
		}
	}
	
	@PutMapping("/updatepassword")
	public boolean updatePassword(@RequestBody ForgotPassword forgotPass) {
		return userService.setForgotPassword(forgotPass);
	}
	
	@PostMapping("/userregistercheck/{email}")
	public boolean checkUserexistforregister(@PathVariable String email) {
		try {
			System.out.println(email);
			return userService.checkUserexistforregister(email);
			}
			catch(Exception e) {
				System.out.println("the Exception occured"+e.getMessage());
				return false;
			}
	}
	
	@GetMapping("/getUserbyRoleId/{roleId}")
	public User getUserbyRoleId(@PathVariable String roleId) {
		return userService.getUserByRoleId(roleId);
	}
}
