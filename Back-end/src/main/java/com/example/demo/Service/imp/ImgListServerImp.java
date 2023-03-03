package com.example.demo.Service.imp;

import com.example.demo.Enity.ImgList;
import com.example.demo.Service.ImgListInfo;
import com.example.demo.repo.ImgListRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class ImgListServerImp implements ImgListInfo {
    private final ImgListRepository imgListRepository;
    @Override
    public List<ImgList> getallByProduct(Integer id) {
        return imgListRepository.findAllByProduct_Id(id);
    }
}
