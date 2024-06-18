package com.example.bookmyshowapplite.repository;

import com.example.bookmyshowapplite.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
