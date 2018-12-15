package com.revamp.core.dao;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.revamp.core.model.User;

public interface UserRepository extends CrudRepository<User, Long> {

	@Query("from User where emailAddress = :emailAddress")
	public User findByEmail(@Param("emailAddress") String email);

}
