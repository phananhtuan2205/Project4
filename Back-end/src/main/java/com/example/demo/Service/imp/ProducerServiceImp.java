package com.example.demo.Service.imp;

import com.example.demo.DTO.ProducerDTO;
import com.example.demo.Enity.Producer;
import com.example.demo.Service.ProducerInfo;
import com.example.demo.repo.ProducerRepository;
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
public class ProducerServiceImp implements ProducerInfo {
   private final ProducerRepository producerRepository;

    @Override
    public List<Producer> getAll() {
        return producerRepository.findAll();
    }

    @Override
    public Optional<Producer> findByID(Integer id) {
        return producerRepository.findById(id);
    }

    @Override
    public Producer save(Producer producer) {
        return producerRepository.save(producer);
    }

    @Override
    public Producer update(Producer producer) {
        return null;
    }

    @Override
    public Producer delete(ProducerDTO producerDTO) {
        return null;
    }
}
