package com.service;

import com.model.User;
import com.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
	
	@Autowired
	UserRepository userRepo;

	public List<User> getAllUsers() {
		return userRepo.findAll();
	}

	public User getUserById(Long userId) {
		return userRepo.findById(userId).orElse(null);
	}

	public User getUserByName(String name) {
		return userRepo.findByName(name);
	}

	public User registerUser(User user) {
		
		String emailContent = "Welcome to Doccure - Your Online Counseling Platform!\n\n " + 
			    "Dear " + user.getUserName() + ",\n\n" +
			    "Welcome to Doccure! We're thrilled to have you as a member of our online counseling platform. Our team is dedicated to providing you with professional counseling services, helping you through life's challenges, all from the comfort of your home.\n\n" + 
			    "If you have any questions, concerns, or need assistance, our support team is always here to help. Feel free to reach out to us via email or phone, and we'll be happy to assist you. Thank you once again for choosing Doccure as your trusted platform for counseling. We look forward to supporting you and helping you achieve a positive mental health journey.\n\n" + 
			    "Take care and stay well!\n\n" + 
			    "Doccure Customer Support Team";

			EmailService.sendEmail(emailContent, "Thank you for choosing Doccure", user.getEmailId(),
			    "doccure.counselling@gmail.com");

		
		String password = user.getPassword();
		System.out.println(password);

		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

		String hashedPassword = passwordEncoder.encode(password);
		System.out.println(hashedPassword);

		user.setPassword(hashedPassword);
		return userRepo.save(user);
	}
	
	public void deleteUser(Long userId) {
		userRepo.deleteById(userId);
	}
	
	public User login(String emailId, String password) {
		User user = userRepo.findByEmailId(emailId);

		if (user == null) {
			return null;
		}

		String hashedPassword = user.getPassword();
		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

		if (passwordEncoder.matches(password, hashedPassword)) {
			return user;
		} else {
			return null;
		}
	}

}
