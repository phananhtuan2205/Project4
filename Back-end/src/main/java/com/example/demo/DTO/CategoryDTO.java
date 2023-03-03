package com.example.demo.DTO;

import com.example.demo.Enity.Category;
import com.example.demo.Enity.Product;
import com.example.demo.Utity.Utity;

public class CategoryDTO {
    private Integer category_ID;
    private String category_Name;

    public CategoryDTO() {
    }
    public  void add(Category category){
        this.category_ID = category.getId();
        this.category_Name = category.getCategoryName();
//
    }
    public CategoryDTO(Integer categoryId, String categoryName) {
        this.category_ID = categoryId;
        this.category_Name = categoryName;
    }

    public Integer getCategoryId() {
        return this.category_ID;
    }

    public void setCategoryId(Integer categoryId) {
        this.category_ID = categoryId;
    }

    public String getCategoryName() {
        return this.category_Name;
    }

    public void setCategoryName(String categoryName) {
        this.category_Name = categoryName;
    }
}
