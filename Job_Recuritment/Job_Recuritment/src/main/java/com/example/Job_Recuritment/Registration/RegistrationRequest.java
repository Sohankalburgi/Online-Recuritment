package com.example.Job_Recuritment.Registration;

import com.example.Job_Recuritment.Model.Role;
import lombok.Data;




import java.util.Date;
import java.util.List;


@Data
public class RegistrationRequest {

    private String FullName;
    private String  Address;

    private String Email;
    private String PhoneNo;
    private String Password;
    private Date DOB;
    private String Gender;

    private String Nationality;
    private List<Role> roles;

}
