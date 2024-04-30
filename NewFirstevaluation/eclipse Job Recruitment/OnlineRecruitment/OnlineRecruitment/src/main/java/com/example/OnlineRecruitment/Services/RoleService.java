package com.example.OnlineRecruitment.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.example.OnlineRecruitment.Entities.Role;
import com.example.OnlineRecruitment.Entities.User;
import com.example.OnlineRecruitment.Repositories.RoleRepository;
import com.example.OnlineRecruitment.Repositories.UserRepository;
import com.example.OnlineRecruitment.ServiceInterface.RoleServiceInterface;
import com.fasterxml.jackson.databind.node.ObjectNode;

@Service
public class RoleService implements RoleServiceInterface {
	
	@Autowired
	private RoleRepository roleRepository;
	@Autowired
	private UserRepository userRepository;
	@Override
	public void setRole(Role role) {
		// TODO Auto-generated method stub
		roleRepository.save(role);
	}

	@Override
	public Role getRoleById(Integer id) {
		// TODO Auto-generated method stub
		return roleRepository.getById(id);
	}
	
	@Override
	public void deleteRoleById(Integer id) {
		User user = roleRepository.getById(id).getUser();
		user.setRole(null);
		userRepository.save(user);
		roleRepository.deleteById(id);
	}
	@Override
	public void updateRoleById(Integer id,Role role) {
		Role updateRole = roleRepository.getById(id);
		 updateRole.setRoleDescription(role.getRoleDescription());
		 updateRole.setRoleTitle(role.getRoleTitle());
		 updateRole.setUser(role.getUser());
		 roleRepository.save(updateRole);
		
	}
	
	
	
}