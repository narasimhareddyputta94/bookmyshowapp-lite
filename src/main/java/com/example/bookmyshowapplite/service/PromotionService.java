package com.example.bookmyshowapplite.service;

import com.example.bookmyshowapplite.entity.Promotion;
import com.example.bookmyshowapplite.repository.PromotionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PromotionService {

    @Autowired
    private PromotionRepository promotionRepository;

    public List<Promotion> getAllPromotions() {
        return promotionRepository.findAll();
    }

    public Promotion createPromotion(Promotion promotion) {
        return promotionRepository.save(promotion);
    }

    public Promotion getPromotionByCode(String code) {
        return promotionRepository.findByCode(code);
    }
}
