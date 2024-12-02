package com.controller;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.model.Counsellor;
import com.service.CounsellorService;
@RestController
public class CounsellorController {

	@Autowired
	CounsellorService prodDAO;

	@GetMapping("/getAllCounsellors")
	public List<Counsellor> getAllCounsellors() {
		return prodDAO.getAllCounsellors();
	}

	@PostMapping("/registerCounsellor")
	public Counsellor registerCounsellor(@RequestBody Counsellor Counsellor) {	
		return prodDAO.registerCounsellor(Counsellor);
	}
	
	@GetMapping("/counsellors/{id}")
	public Counsellor getCounsellorById(@PathVariable Long id) {
	    return prodDAO.getCounsellorById(id)
	                  .orElseThrow(() -> new RuntimeException("Counsellor not found with ID: " + id));
	}
}