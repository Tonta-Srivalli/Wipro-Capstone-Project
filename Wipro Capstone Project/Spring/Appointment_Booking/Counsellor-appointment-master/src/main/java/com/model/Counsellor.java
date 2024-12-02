package com.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Counsellor {
 
	@Id@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long counsellorId;
	
	@Column(length=100)
	private String counsellorName;
	
	@Column(length=5000)
	private String counsellorImage;
	
	@Column(length=1000)
	private String counsellorDesc;
	
	@Column(length=20)
	private double counsellorPrice;
	
	 @OneToMany(mappedBy = "counsellor")
	    private List<Review> reviews;
	
	public Counsellor() {
		super();
	}

	public Long getcounsellorId() {
		return counsellorId;
	}

	public void setcounsellorId(Long counsellorId) {
		this.counsellorId = counsellorId;
	}

	public String getcounsellorName() {
		return counsellorName;
	}

	public void setcounsellorName(String counsellorName) {
		this.counsellorName = counsellorName;
	}

	public String getcounsellorImage() {
		return counsellorImage;
	}

	public void setcounsellorImage(String counsellorImage) {
		this.counsellorImage = counsellorImage;
	}

	public String getcounsellorDesc() {
		return counsellorDesc;
	}

	public void setcounsellorDesc(String counsellorDesc) {
		this.counsellorDesc = counsellorDesc;
	}

	public double getcounsellorPrice() {
		return counsellorPrice;
	}

	public void setcounsellorPrice(double counsellorPrice) {
		this.counsellorPrice = counsellorPrice;
	}
}
