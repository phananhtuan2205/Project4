package com.example.demo.Service;

import com.example.demo.DTO.CategoryDTO;
import com.example.demo.Enity.Category;

import java.util.List;
import java.util.Optional;

public interface CategoryInfo {
    List<Category> getAll();
    Optional<Category> findbyid(Integer id);
    Category save(CategoryDTO category);
    Category update (Category category);
    Category delete (CategoryDTO categoryDTO);
}
