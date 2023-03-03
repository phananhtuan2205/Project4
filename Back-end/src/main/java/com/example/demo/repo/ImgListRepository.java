package com.example.demo.repo;

import com.example.demo.Enity.ImgList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ImgListRepository extends JpaRepository<ImgList, Integer> {
    @Query("select i from  ImgList i where i.product.id = :productid")
    List<ImgList> findAllByProduct_Id (@Param("productid") Integer productID);
}