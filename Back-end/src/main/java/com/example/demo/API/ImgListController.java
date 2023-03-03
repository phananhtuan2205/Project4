package com.example.demo.API;

import com.example.demo.DTO.ImgListDTO;
import com.example.demo.Enity.ImgList;
import com.example.demo.Service.CategoryInfo;
import com.example.demo.Service.ImgListInfo;
import com.example.demo.repo.CategoryRepository;
import com.example.demo.repo.ImgListRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping(path = "/api/ImgList")
@CrossOrigin(origins = "*")
public class ImgListController {
    @Autowired
    private ImgListInfo imgListInfo;
    private final ImgListRepository imgListRepository;

    @GetMapping("")
    public List<ImgListDTO> getbyProductID(@RequestParam("ProductID") Integer id){
        List<ImgList> list = imgListInfo.getallByProduct(id);
        List<ImgListDTO> img = new ArrayList<>();
        for (ImgList item: list) {
            ImgListDTO imgListDTO = new ImgListDTO();
            imgListDTO.add(item);
            img.add(imgListDTO);
        }
        return img;
    }
}
