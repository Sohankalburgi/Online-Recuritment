package com.example.Job_Recuritment.Registration;

import com.example.Job_Recuritment.Model.Role;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;


import java.util.Date;
import java.util.List;


@Getter
@Setter
public class RegistrationRequest {

    private String FullName;
    private String  Address;

    private String email;
    private String Phone;
    private String Password;
    private Date DOB;
    private String Gender;

    private String Nationality;

}
