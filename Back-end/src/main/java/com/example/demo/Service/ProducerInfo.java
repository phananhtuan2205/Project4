package com.example.demo.Service;

import com.example.demo.DTO.ProducerDTO;
import com.example.demo.Enity.Producer;

import java.util.List;
import java.util.Optional;


public interface ProducerInfo {
    List<Producer> getAll();
    Optional<Producer> findByID(Integer id);
    Producer save(Producer producer);
    Producer update(Producer producer);
    Producer delete(ProducerDTO producerDTO);
}
