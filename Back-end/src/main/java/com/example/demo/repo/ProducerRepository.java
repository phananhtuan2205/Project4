package com.example.demo.repo;

import com.example.demo.Enity.Producer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProducerRepository extends JpaRepository<Producer, Integer> {
    Producer findAllByProducerName (String name);
    Producer findAllById (Integer id);
}