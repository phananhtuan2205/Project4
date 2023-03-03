package com.example.demo.Service.imp;

import com.example.demo.DTO.ProductDTO;
import com.example.demo.Enity.Category;
import com.example.demo.Enity.Producer;
import com.example.demo.Enity.Product;
import com.example.demo.Service.ProductInfo;
import com.example.demo.Utity.Utity;
import com.example.demo.repo.CategoryRepository;
import com.example.demo.repo.ProducerRepository;
import com.example.demo.repo.ProductRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class ProductServiceImp implements ProductInfo {
    @Autowired
    private  ProductRepository proRepo;
    @Autowired
    private ProducerRepository producerRepository;
    @Autowired
    private CategoryRepository categoryRepository;
    @Override
    public Product saveProduct(ProductDTO pro) throws ParseException {
        Product product = proRepo.findProductByProductName(pro.getProduct_Name());
        if (product != null && pro == null){
            return null;
        }

        Category category = categoryRepository.findAllByCategoryName(pro.getCategory_ID());
        Producer producer = producerRepository.findAllByProducerName(pro.getProducer_ID());

        Product product1 = new Product();
        product1.setProductName(pro.getProduct_Name());
        product1.setCategory(category);
        product1.setProducer(producer);
        product1.setQuantity(pro.getQuantity());
        product1.setPrice(pro.getPrice());
        product1.setCpu(pro.getCPU());
        product1.setGpu(pro.getGPU());
        product1.setDescribes(pro.getDescribes());
        product1.setThumnail(pro.getThumnail());
        product1.setRam(pro.getRAM());
        product1.setRom(pro.getROM());
        product1.setScreen(pro.getScreen());
        product1.setTitle(pro.getTitle());
        product1.setCreatedAt(Utity.ConverStringToDate(pro.getCreated_at()));
        product1.setUpdatedAt(Utity.ConverStringToDate(pro.getUpdated_at()));
        return proRepo.save(product1);
    }

    @Override
    public Product UpdateProduct(ProductDTO pro) throws ParseException {
        Product product = proRepo.findProById(pro.getProduct_ID());
        if (  pro == null){
            return null;
        }

        Category category = categoryRepository.findAllByCategoryName(pro.getCategory_ID());
        Producer producer = producerRepository.findAllByProducerName(pro.getProducer_ID());


        product.setProductName(pro.getProduct_Name());
        product.setCategory(category);
        product.setProducer(producer);
        product.setQuantity(pro.getQuantity());
        product.setPrice(pro.getPrice());
        product.setCpu(pro.getCPU());
        product.setGpu(pro.getGPU());
        product.setDescribes(pro.getDescribes());
        product.setThumnail(pro.getThumnail());
        product.setRam(pro.getRAM());
        product.setRom(pro.getROM());
        product.setScreen(pro.getScreen());
        product.setTitle(pro.getTitle());
        product.setCreatedAt(Utity.ConverStringToDate(pro.getCreated_at()));
        product.setUpdatedAt(Utity.ConverStringToDate(pro.getUpdated_at()));
        return proRepo.save(product);
    }

    @Override
    public Producer saveProducer(Producer producer) {
        return null;
    }

    @Override
    public List<Product> getAll() {
        log.info("Test Database");
        return proRepo.findAll();
    }

    @Override
    public List<Product> getByProducerID(Integer id) {
        return null;
    }
    @Override
    public Page<Product> getByCategoryID(Integer id,Pageable pageable) {
        return  proRepo.findProductByCategory(id,pageable );
    }

    @Override
    public Product FindByProductID(String name) {
        return  proRepo.findProductByProductName(name);
    }

    @Override
    public List<Product> FindLikeName(String name) {
        return proRepo.findLikeName(name);
    }

    @Override
    public Page<Product> ByName(String name, Pageable pageable) {
        return proRepo.findLikeName(name, pageable);
    }

    @Override
    public Page<Product> getallpagel(Pageable pageable) {
        return proRepo.findAll(pageable);
    }

    @Override
    public List<Product> getpro(Pageable pageable) {
        return proRepo.getpro(pageable);
    }

    @Override
    public Product findbythumnail(String thum) {
        return proRepo.findProductByThumnail(thum);
    }
}
