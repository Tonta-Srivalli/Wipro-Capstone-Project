package com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.model.Review;
import com.repository.ReviewRepository;

@Service
public class ReviewService {
	
	@Autowired
    private ReviewRepository reviewRepository;

    public List<Review> getReviewsForCounsellor(Long counsellorId) {
        return reviewRepository.findByCounsellor_counsellorId(counsellorId);
    }

    public Review saveReview(Review review) {
        return reviewRepository.save(review);
    }

}
