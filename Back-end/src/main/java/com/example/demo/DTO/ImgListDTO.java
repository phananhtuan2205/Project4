package com.example.demo.DTO;

import com.example.demo.Enity.ImgList;

public class ImgListDTO {
    private Integer productId;
    private String img;
    private Integer id;

    public ImgListDTO() {
    }

    public ImgListDTO(Integer productId, String img, Integer id) {
        this.productId = productId;
        this.img = img;
        this.id = id;
    }
    public void add(ImgList img){
        this.id = img.getId();
        this.img = img.getImg();
        this.productId = img.getProduct().getId();
    }
    public Integer getProductId() {
        return this.productId;
    }

    public void setProductId(Integer productId) {
        this.productId = productId;
    }

    public String getImg() {
        return this.img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public Integer getId() {
        return this.id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}
