package com.example.demo.API;

import com.example.demo.DTO.CategoryDTO;
import com.example.demo.Enity.Category;
import com.example.demo.Service.CategoryInfo;
import com.example.demo.repo.CategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping(path = "/api/Category")
@CrossOrigin(origins = "*")
public class CategoryController {
    @Autowired
    private CategoryInfo categoryInfo;
    private final CategoryRepository categoryRepository;
    @GetMapping("/list")
    public List<CategoryDTO> getCategory(){
        List<Category> category = categoryRepository.findAll();
        List<CategoryDTO> categoryDTOS = new ArrayList<>();
        for (Category item: category) {
            CategoryDTO cate = new CategoryDTO();
            cate.add(item);
            categoryDTOS.add(cate);
        }
        return categoryDTOS;
    }

    @PostMapping("/add")
    public Category createCate
            (@RequestBody CategoryDTO categoryDTO)throws ParseException {
        return categoryInfo.save(categoryDTO);
    }
}
