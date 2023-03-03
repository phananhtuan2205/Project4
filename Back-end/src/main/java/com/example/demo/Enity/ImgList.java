package com.example.demo.Enity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;

@Table(name = "img_list", indexes = {
        @Index(name = "IMG", columnList = "IMG", unique = true)
}, uniqueConstraints = {
        @UniqueConstraint(name = "IMG_2", columnNames = {"IMG"})
})
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@CrossOrigin("*")
public class ImgList {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @ManyToOne(optional = false)
    @JoinColumn(name = "Product_ID", nullable = false)

    private Product product;

    @Lob
    @Column(name = "IMG", nullable = false)
    private String img;

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}