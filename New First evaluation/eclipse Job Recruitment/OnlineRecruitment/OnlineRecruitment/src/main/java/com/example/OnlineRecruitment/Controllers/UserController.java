package com.example.OnlineRecruitment.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
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

import com.example.OnlineRecruitment.Entities.User;

import com.example.OnlineRecruitment.Services.UserService;

import jakarta.validation.Valid;



@RestController
@CrossOrigin("http://localhost:4200")
public class UserController {
	
	@Autowired
	private UserService userService;

	
	@PostMapping("/user")
	public String saveUser(@Valid @RequestBody User user,BindingResult bindingResult) {
		
		if(bindingResult.hasErrors()) {
			return bindingResult.toString();
		}
		userService.saveUser(user);
		return "Created";
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
	public String userDeleteById(@PathVariable Integer id) {
		userService.deleteUser(id);
		return "User Deleted";
	}
	@PutMapping("/userupdate/{id}")
	public String userUpdateById(@PathVariable Integer id,@Valid @RequestBody User user,
			BindingResult bindingResult) {
		if(bindingResult.hasErrors()) {
			return bindingResult.toString();
		}
		userService.updateUserById(id, user);
		return "Updated";
	}
	
	
}
