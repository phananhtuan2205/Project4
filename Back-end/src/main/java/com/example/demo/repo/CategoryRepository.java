package com.example.demo.repo;

import com.example.demo.Enity.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Integer> {
    Category findAllById(Integer id);
    Category findAllByCategoryName(String name);
}