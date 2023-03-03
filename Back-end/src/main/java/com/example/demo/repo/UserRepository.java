package com.example.demo.repo;

import com.example.demo.Enity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    User findByUsersName (String username);
    @Query("select u from  User u where  u.id = :id")
    User findUserByID (@Param("id") Integer id);
}