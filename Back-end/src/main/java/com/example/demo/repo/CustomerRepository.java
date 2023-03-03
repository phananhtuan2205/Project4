package com.example.demo.repo;

import com.example.demo.Enity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {
    Customer findByEmail(String email);
    @Query("select c from Customer c where c.id = :id")
    Customer findID(@Param("id") Integer id);

}