package com.example.Job_Recuritment.Registration.Token;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface VerificationTokenRepository extends JpaRepository <VerificationToken, Long>{
    public Optional<VerificationToken> findByToken(String token);


}
