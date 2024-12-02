package com.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.model.Counsellor;
import com.repository.CounsellorRepository;

@Service

public class CounsellorService {

	@Autowired
	CounsellorRepository counsellorRepository;

	public List<Counsellor> getAllCounsellors() {
		return counsellorRepository.findAll();
	}

	public Counsellor registerCounsellor(Counsellor Counsellor) {
		return counsellorRepository.save(Counsellor);
	}
	
	public Optional<Counsellor> getCounsellorById(Long  counsellorId) {
        return counsellorRepository.findById(counsellorId);
    }
}
