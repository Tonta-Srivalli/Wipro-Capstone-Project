package com.controller;

import com.model.User;
import com.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {
	
	@Autowired
	UserService userService;
	
	@GetMapping("getAllUsers")
	public List<User> getAllUsers() {
		return userService.getAllUsers();
	}
	
	@GetMapping("getUserById/{userId}")
	public User getUserById(@PathVariable("userId") Long id) {
		return userService.getUserById(id);
	}
	
	@GetMapping("getUserByName/{userName}")
	public User getUserByName(@PathVariable("userName") String name) {
		return userService.getUserByName(name);
	}
	
	@PostMapping("registerUser")
	public User registerUser(@RequestBody User user) {
		return userService.registerUser(user);
	}
	
	@PutMapping("registerUser")
	public User updateUser(@RequestBody User user) {
	    return userService.registerUser(user);
	}
	
	@DeleteMapping("deleteUser/{userId}")
	public String deleteUser(@PathVariable Long userId) {
		userService.deleteUser(userId);
	    return "User Deleted Successfully";
	}
	
	@GetMapping("/login/{emailId}/{password}")
	public User login(@PathVariable("emailId") String emailId, @PathVariable("password") String password) {
	    return userService.login(emailId, password);
	}


}
