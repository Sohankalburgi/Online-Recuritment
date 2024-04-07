package com.example.Job_Recuritment.Model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.ManyToAny;
import org.hibernate.annotations.NaturalId;

import java.util.Collection;
import java.util.Date;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;


    private String FullName;
    private String  Address;
    @NaturalId(mutable = true)
    private String email;
    private String PhoneNo;
    private String Password;
    private Date DOB;
    private String Gender;

    private String Nationality;

    @ManyToMany(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
    private List<Role> roles;

    private boolean isEnabled = false;

    public User(String fullName, String address, String email, String phoneNo,
                String password, Date DOB, String gender, String nationality, List<Role> roles) {
        FullName = fullName;
        Address = address;
        this.email = email;
        PhoneNo = phoneNo;
        Password = password;
        this.DOB = DOB;
        Gender = gender;
        Nationality = nationality;
        this.roles = roles;
    }
}
