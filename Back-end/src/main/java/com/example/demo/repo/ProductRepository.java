package com.example.demo.repo;

import com.example.demo.Enity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
    @Query("select p,c,pc from Product AS p left join Category as c on p.category.id = c.id " +
            "left join Producer as pc on p.producer.id = pc.id")
    List<Product> getpro(Pageable pageable);
    Product findProductByProductName(String productName);
    @Query("select p from Product p where p.producer.id = :producerid")
    List<Product> findProductByProducer(@Param("producerid") Integer ProuducerID);
    @Query("select p from Product p where p.category.id = :categoryid")
    Page<Product> findProductByCategory(@Param("categoryid") Integer CategoryID,Pageable pageable);
    @Query("select p from Product p where p.productName like ?1%")
    List<Product> findLikeName( String ProductName);
    @Query("select p from Product p where p.productName like ?1%")
    Page<Product> findLikeName(String ProductName, Pageable pageable);
    Page<Product> findAll(Pageable pageable);
    List<Product> findProductByCategoryId(Integer CategoryID);
    Product findProductByThumnail(String thum);
    @Query("select p from Product p where p.id = :id")
    Product findProById (@Param("id") Integer id);

}