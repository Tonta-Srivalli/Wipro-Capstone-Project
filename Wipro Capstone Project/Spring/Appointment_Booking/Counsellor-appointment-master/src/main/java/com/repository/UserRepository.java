package com.repository;

import com.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface UserRepository extends JpaRepository<User, Long>{
	
	@Query("from User e where e.userName = :ename")
	User findByName(@Param("ename") String name);
	
	@Query("from User e where e.emailId = :emailId and e.password = :password")
	public User login(@Param("emailId") String emailId, @Param("password") String password);
	
	@Query("SELECT u.emailId FROM User u")
	public List<String> getAllEmailIds();
	
	@Query("from User u where u.emailId = :emailId")
	public User findByEmailId(@Param("emailId") String emailId);

}
