package com.example.Job_Recuritment.Controllers;

import com.example.Job_Recuritment.Events.RegistrationCompleteEvent;
import com.example.Job_Recuritment.Model.User;
import com.example.Job_Recuritment.Registration.RegistrationRequest;
import com.example.Job_Recuritment.Services.User.UserService;
import com.example.Job_Recuritment.Utilites.UrlUtil.UrlUtil;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@CrossOrigin(origins = "http://localhost:4200")
public class Controllers {

    @Autowired
    private UserService userService;
    @Autowired
    private ApplicationEventPublisher publisher;




    @PostMapping("/register")
    public String registerUser(@RequestBody RegistrationRequest registration, HttpServletRequest request){
        System.out.println(registration.getFullName());
        System.out.println(registration.getAddress());
        System.out.println(registration.getEmail());
        System.out.println(registration.getNationality());
        System.out.println(registration.getGender());
        System.out.println(registration.getPhone());
        System.out.println(registration.getPassword());
        System.out.println(registration.getDOB());
        System.out.println("the postmapping");
        User user = userService.registerUser(registration);
        System.out.println(user.getFullName());
        publisher.publishEvent(new RegistrationCompleteEvent(user, UrlUtil.getApplicationUrl(request)));

        return "redirect:/registration/success";
    }
}
