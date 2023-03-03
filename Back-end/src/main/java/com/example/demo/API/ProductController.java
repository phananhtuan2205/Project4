package com.example.demo.API;

import ch.qos.logback.core.util.InterruptUtil;
import com.example.demo.DTO.ProductDTO;
import com.example.demo.Enity.Product;
import com.example.demo.Service.ProductInfo;
import com.example.demo.repo.ProductRepository;
import com.sun.jdi.IntegerValue;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping(path = "/api/Product")
@CrossOrigin(origins = "*")
public class ProductController {
    @Autowired
    private ProductInfo productInfo;

    private final ProductRepository productRepository;
    @GetMapping("/list")
    public List<Product> get1(){
        return productRepository.findAll();
    }
    @GetMapping("")
    public ResponseEntity<List<ProductDTO>> getProduct(@RequestParam("page") Optional<Integer> page ,@RequestParam("size")
            Optional<Integer>  size ){
          Sort sort = Sort.by(Sort.Direction.DESC, "id");
        Pageable pageable = PageRequest.of(page.orElse(1)-1 , size.orElse(6),sort);
        Page<Product> pro = productInfo.getallpagel(pageable);
        int total_Page = pro.getTotalPages();
        System.out.print(total_Page);
        List<ProductDTO> list = new ArrayList<>();
        for (Product item: pro) {
            ProductDTO productDTO = new ProductDTO();
            productDTO.add(item);
            list.add(productDTO);
        }
        return  ResponseEntity.ok().body(list);
    }
    @GetMapping("/{id}")
    public ProductDTO getProductByName(@PathVariable Integer id ){
        Product pro = productRepository.findProById(id);

        ProductDTO productDTO = new ProductDTO();
        productDTO.add(pro);

        return productDTO;
    }
    @GetMapping("/byProducer/{id}")
    public List<Product> getProductByProducerID(@PathVariable Integer id ){
        return  productRepository.findProductByProducer(id);
    }
    @GetMapping("/byCategory/{id}")
    public ResponseEntity<List<ProductDTO>> getProductByCategoryID(@PathVariable Integer id,@RequestParam("page") Optional<Integer> page,
                                                                   @RequestParam("size") Optional<Integer> size ){
        Sort sort = Sort.by(Sort.Direction.ASC, "id");
        Pageable pageable = PageRequest.of(page.orElse(1) -1 , size.orElse(6),sort);
        Page<Product> pro = productRepository.findProductByCategory(id,pageable);
        List<ProductDTO> list = new ArrayList<>();
        for (Product item: pro) {
            ProductDTO proDTO = new ProductDTO();
            proDTO.add(item);
            list.add(proDTO);
        }
        return  ResponseEntity.ok().body(list);
    }
    @GetMapping("/Name/{name}")
    public ResponseEntity<List<ProductDTO>> getProductLikeName(@PathVariable String name ){
        List<Product> pro = productInfo.FindLikeName(name);
        List<ProductDTO> list = new ArrayList<>();
        for (Product item: pro) {
            ProductDTO proDTO = new ProductDTO();
            proDTO.add(item);
            list.add(proDTO);
        }
        return  ResponseEntity.ok().body(list);
    }
    @GetMapping("/totalpage")
    public ResponseEntity<Integer> getTotalPage(@RequestParam("name") String name){
        List<Product> pro = null;
        if(StringUtils.hasText(name)){
            pro = productInfo.FindLikeName(name);
        }
        else{
            pro = productInfo.getAll();
        }
        Integer totalPage = pro.size();
        System.out.print(totalPage);
        return  ResponseEntity.ok().body(totalPage);
    }
    @GetMapping("/totalpagebyCate")
    public ResponseEntity<Integer> getTotalPageByCate(@RequestParam("cateID") Integer id){
        List<Product> pro = null;
        if(StringUtils.hasText(id.toString())){
            pro = productRepository.findProductByCategoryId(id);

        }
        else{
            pro = productInfo.getAll();
        }
        Integer totalPage = pro.size();
        System.out.print(totalPage);
        return  ResponseEntity.ok().body(totalPage);
    }
    @GetMapping("/Search")
    public ResponseEntity<List<ProductDTO>> SearchProductLikeName(@RequestParam("name") String name,
    @RequestParam("page") Optional<Integer> page,
    @RequestParam("size") Optional<Integer> size
    ){
        Sort sort = Sort.by(Sort.Direction.ASC, "id");
        Pageable pageable = PageRequest.of(page.orElse(1) -1 , size.orElse(6),sort);
        Page<Product> pro = null;
        if(StringUtils.hasText(name)){
            pro = productInfo.ByName(name,pageable);
        }
        else{
            pro = productInfo.getallpagel(pageable);
        }
        List<ProductDTO> list = new ArrayList<>();
        for (Product item: pro) {
            ProductDTO productDTO = new ProductDTO();
            productDTO.add(item);
            list.add(productDTO);
        }

        return  ResponseEntity.ok().body(list);
    }
    @PostMapping("/add")
    public Product createPro (@RequestBody ProductDTO product) throws ParseException {
        System.out.print(product.getCreated_at());
        return productInfo.saveProduct(product);
    }
    @GetMapping ("/namePro")
    public Product createPro (@RequestParam("name") String name)  {
        return productRepository.findProductByProductName(name);
    }

    @DeleteMapping("/deletePro")
    public void deletePro (@RequestParam("id") Integer id)  {
        productRepository.deleteById(id);
    }

    @PutMapping("/Edit")
    public Product editPro (@RequestBody ProductDTO product) throws ParseException {
        System.out.print(product.getCreated_at());
        return productInfo.UpdateProduct(product);
    }
}
