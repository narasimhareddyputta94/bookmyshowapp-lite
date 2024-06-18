package com.example.bookmyshowapplite.repository;

import com.example.bookmyshowapplite.entity.Promotion;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PromotionRepository extends JpaRepository<Promotion, Long> {
    Promotion findByCode(String code);
}
