package com.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.model.Review;

public interface ReviewRepository extends JpaRepository<Review, Long>{
	
	public List<Review> findByCounsellor_counsellorId(Long counsellorId);


}
