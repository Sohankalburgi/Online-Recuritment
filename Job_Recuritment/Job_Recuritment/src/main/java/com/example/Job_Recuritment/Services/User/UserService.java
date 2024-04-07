package com.example.Job_Recuritment.Services.User;

import com.example.Job_Recuritment.Model.Role;
import com.example.Job_Recuritment.Model.User;
import com.example.Job_Recuritment.Registration.RegistrationRequest;
import com.example.Job_Recuritment.Repositories.User.UserRepository;
import lombok.NoArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
@NoArgsConstructor
public class UserService {
    private UserRepository userRepository;
    private PasswordEncoder passwordEncoder;
//    private final VerificationTokenService verificationTokenService;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User registerUser(RegistrationRequest registration) {
        var user = new User(registration.getFullName(),registration.getAddress(),registration.getEmail(),registration.getPhoneNo()
        ,passwordEncoder.encode(registration.getPassword()),registration.getDOB(),registration.getGender(),registration.getNationality(),
                registration.getRoles());

        return userRepository.save(user);
    }


    public Optional<User> findByEmail(String email) {
        return Optional.ofNullable(userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User not found")));
    }


    public Optional<User> findById(Long id) {
        return userRepository.findById(id);
    }

}
