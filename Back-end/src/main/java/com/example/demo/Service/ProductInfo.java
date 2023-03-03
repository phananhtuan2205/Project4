package com.example.demo.Service;

import com.example.demo.DTO.ProductDTO;
import com.example.demo.Enity.Producer;
import com.example.demo.Enity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.text.ParseException;
import java.util.List;

public interface ProductInfo {
   Product saveProduct(ProductDTO pro) throws ParseException;
   Product UpdateProduct(ProductDTO pro) throws ParseException;
   Producer saveProducer(Producer producer);
   List<Product> getAll();
   List<Product> getByProducerID(Integer id);
   Page<Product> getByCategoryID(Integer id,Pageable pageable);
   Product FindByProductID(String name);
   List<Product> FindLikeName(String name);
   Page<Product> ByName(String name , Pageable pageable);
   Page<Product> getallpagel(Pageable pageable);
   List<Product> getpro(Pageable pageable);
   Product findbythumnail(String thum);
}
