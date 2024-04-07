package com.example.Job_Recuritment.Registration.Password;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface PasswordResetTokenRepository extends JpaRepository<PasswordResetToken, Long> {

    public Optional<PasswordResetToken> findByToken(String theToken);
}
