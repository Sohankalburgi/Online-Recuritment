package com.example.Job_Recuritment.Repositories.User;

import com.example.Job_Recuritment.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface UserRepository extends JpaRepository<User,Long> {

    public Optional<User> findByEmail(String Email);

}
