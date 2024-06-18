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

    public Review createReview(Review review) {
        return reviewRepository.save(review);
    }

    public Review getReviewById(Long id) {
        return reviewRepository.findById(id).orElse(null);
    }

    public List<Review> getAllReviews() {
        return reviewRepository.findAll();
    }

    public Review updateReview(Long id, Review reviewDetails) {
        Review review = reviewRepository.findById(id).orElse(null);
        if (review != null) {
            review.setMovie(reviewDetails.getMovie());
            review.setUser(reviewDetails.getUser());
            review.setRating(reviewDetails.getRating());
            review.setComment(reviewDetails.getComment());
            // Add any other fields that need to be updated
            return reviewRepository.save(review);
        }
        return null;
    }

    public void deleteReview(Long id) {
        reviewRepository.deleteById(id);
    }
}
