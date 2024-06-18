package com.example.bookmyshowapplite.service;

import com.example.bookmyshowapplite.entity.Review;
import com.example.bookmyshowapplite.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;

    public List<Review> getReviewsByMovieId(Long movieId) {
        return reviewRepository.findByMovieId(movieId);
    }

    public Review createReview(Review review) {
        return reviewRepository.save(review);
    }
}
