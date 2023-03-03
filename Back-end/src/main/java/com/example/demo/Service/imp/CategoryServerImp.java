package com.example.demo.Service.imp;

import com.example.demo.DTO.CategoryDTO;
import com.example.demo.Enity.Category;
import com.example.demo.Service.CategoryInfo;
import com.example.demo.repo.CategoryRepository;
import com.example.demo.repo.ImgListRepository;
import com.example.demo.repo.ProductRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class CategoryServerImp implements CategoryInfo {
    private final ImgListRepository imgListRepository;
    private final CategoryRepository cateRepo;
    @Override
    public List<Category> getAll() {
        return cateRepo.findAll();
    }

    @Override
    public Optional<Category> findbyid(Integer id) {
        return cateRepo.findById(id);
    }

    @Override
    public Category save(CategoryDTO category) {
        Category category1 = cateRepo.findAllByCategoryName(category.getCategoryName());
        Category cate = new Category();
        cate.setCategoryName(category.getCategoryName());

        return cateRepo.save(cate);
//        if (category1 != null){
//            return null;
//        }
//        else {
//            Category cate = new Category();
//            cate.setCategoryName(category.getCategoryName());
//
//            return cateRepo.save(cate);
//        }
    }

    @Override
    public Category update(Category category) {
        return null;
    }

    @Override
    public Category delete(CategoryDTO categoryDTO) {
        return null;
    }
}
