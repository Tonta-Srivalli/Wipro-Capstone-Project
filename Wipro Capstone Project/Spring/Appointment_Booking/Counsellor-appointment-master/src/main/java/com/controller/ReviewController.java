package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.model.Counsellor;
import com.model.Review;
import com.repository.CounsellorRepository;
import com.service.ReviewService;

@RestController
@RequestMapping("/api/reviews")
@CrossOrigin(origins = "http://localhost:4200")
public class ReviewController {

    @Autowired
    private ReviewService reviewDao;

    @Autowired
    private CounsellorRepository counsellorRepository;

    @GetMapping("/counsellor/{counsellorId}")
    public List<Review> getReviewsForCounsellor(@PathVariable Long counsellorId) {
        return reviewDao.getReviewsForCounsellor(counsellorId);
    }

    @PostMapping("/submit")
    public Review submitReview(@RequestBody Review review) {
        if (review == null) {
            throw new IllegalArgumentException("Review data is missing");
        }

        if (review.getCounsellor() == null || review.getCounsellor().getcounsellorId() == null) {
            throw new IllegalArgumentException("Counsellor data is missing in the review");
        }

        System.out.println("Received review for counsellor ID: " + review.getCounsellor().getcounsellorId());

        Counsellor counsellor = counsellorRepository.findById(review.getCounsellor().getcounsellorId()).orElse(null);
        if (counsellor != null) {
            review.setCounsellor(counsellor);  
            return reviewDao.saveReview(review);
        } else {
            throw new IllegalArgumentException("Counsellor not found");
        }
    }
}
