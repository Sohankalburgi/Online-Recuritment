package com.example.OnlineRecruitment.ServiceInterface;

import com.example.OnlineRecruitment.Entities.Role;

public interface RoleServiceInterface {
	
	public void setRole(Role role);
	
	public Role getRoleById(Integer id);

	public void deleteRoleById(Integer id);

	public void updateRoleById(Integer id, Role role);
	
	
}