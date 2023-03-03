package com.example.demo.API;

import com.example.demo.Enity.Producer;
import com.example.demo.Service.ProducerInfo;
import com.example.demo.Service.ProductInfo;
import com.example.demo.repo.ProducerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping(path = "/api/Producer")
@CrossOrigin(origins = "*")
public class ProducerController {
    @Autowired
    private ProducerInfo producerInfo;
    private final ProducerRepository producerRepository;
    @GetMapping("")
    public ResponseEntity<List<Producer>> getall (){
        return ResponseEntity.ok().body(producerInfo.getAll());
    }


}
