package com.example.OnlineRecruitment.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.OnlineRecruitment.Entities.User;
import com.example.OnlineRecruitment.Repositories.UserRepository;
import com.example.OnlineRecruitment.ServiceInterface.UserServiceInterface;

@Service
public class UserService implements UserServiceInterface{

	@Autowired
	private UserRepository userRepository;
	
	@Override
	public void saveUser(User user) {
		// TODO Auto-generated method stub
		userRepository.save(user);
	}

	@Override
	public User getUserById(Integer id) {
		// TODO Auto-generated method stub
		return  userRepository.getById(id);
		
	}
	@Override
	public List<User> getAllUsers(){
		return userRepository.findAll();
	}
	@Override
	public void deleteUser(Integer id) {
		userRepository.deleteById(id);
	}
	@Override
	public void updateUserById(Integer id,User user) {
		User updateUser = userRepository.getById(id);
		updateUser.setAddress(user.getAddress());
		updateUser.setDateOfBirth(user.getDateOfBirth());
		updateUser.setEmail(user.getEmail());
		updateUser.setGender(user.getGender());
		updateUser.setName(user.getName());
		updateUser.setNationality(user.getNationality());
		updateUser.setPassword(user.getPassword());
		updateUser.setPhone(user.getPhone());
		updateUser.setRole(user.getRole());
		userRepository.save(updateUser);
	}
	

}
