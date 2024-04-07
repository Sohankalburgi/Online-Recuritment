package com.example.Job_Recuritment.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@Entity
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String RoleTitle;
    private String RoleDescription;

    public Role(String roleTitle, String roleDescription) {
        RoleTitle = roleTitle;
        RoleDescription = roleDescription;
    }
}
