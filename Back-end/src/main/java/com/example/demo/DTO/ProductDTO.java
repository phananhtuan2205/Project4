package com.example.demo.DTO;

import com.example.demo.Enity.Product;
import com.example.demo.Utity.Utity;

public class ProductDTO {
    int Product_ID ,Quantity;
    String Category_ID ;
    String Producer_ID;
    String Product_Name,Title,Screen,CPU,GPU,RAM,ROM,Describes;
    String Thumnail;
    Double Price;
    String Created_at,Updated_at;

    public ProductDTO() {
    }

    public ProductDTO(int quantity, String category_ID, String producer_ID, String product_Name, String title, String screen, String CPU, String GPU, String RAM, String ROM, String describes, String thumnail, Double price, String created_at) {
        Quantity = quantity;
        Category_ID = category_ID;
        Producer_ID = producer_ID;
        Product_Name = product_Name;
        Title = title;
        Screen = screen;
        this.CPU = CPU;
        this.GPU = GPU;
        this.RAM = RAM;
        this.ROM = ROM;
        Describes = describes;
        Thumnail = thumnail;
        Price = price;
        Created_at = created_at;
    }

    public  void add(Product pro){
        this.Product_ID = pro.getId();
        this.Quantity = pro.getQuantity();
        this.Category_ID = pro.getCategory().getCategoryName();
        this.Producer_ID = pro.getProducer().getProducerName();
        this.Product_Name = pro.getProductName();
        this.Title = pro.getTitle();
        this.Screen = pro.getScreen();
        this.CPU = pro.getCpu();
        this.GPU = pro.getGpu();
        this.RAM = pro.getRam();
        this.ROM = pro.getRom();
        this.Describes = pro.getDescribes();
        this.Thumnail = pro.getThumnail();
        this.Price = pro.getPrice();
        this.Created_at = Utity.ConvertDateToString(pro.getCreatedAt());
        this.Updated_at = Utity.ConvertDateToString(pro.getUpdatedAt());
//
    }

    public ProductDTO(int Product_ID, int Quantity, String Category_ID, String Producer_ID, String Product_Name, String Title, String Screen, String CPU, String GPU, String RAM, String ROM, String Describes, String Thumnail, Double Price, String Created_at, String Updated_at) {
        this.Product_ID = Product_ID;
        this.Quantity = Quantity;
        this.Category_ID = Category_ID;
        this.Producer_ID = Producer_ID;
        this.Product_Name = Product_Name;
        this.Title = Title;
        this.Screen = Screen;
        this.CPU = CPU;
        this.GPU = GPU;
        this.RAM = RAM;
        this.ROM = ROM;
        this.Describes = Describes;
        this.Thumnail = Thumnail;
        this.Price = Price;
        this.Created_at = Created_at;
        this.Updated_at = Updated_at;
    }

    public int getProduct_ID() {
        return Product_ID;
    }

    public void setProduct_ID(int Product_ID) {
        this.Product_ID = Product_ID;
    }

    public int getQuantity() {
        return Quantity;
    }

    public void setQuantity(int Quantity) {
        this.Quantity = Quantity;
    }

    public String getCategory_ID() {
        return Category_ID;
    }

    public void setCategory_ID(String Category_ID) {
        this.Category_ID = Category_ID;
    }

    public String getProducer_ID() {
        return Producer_ID;
    }

    public void setProducer_ID(String Producer_ID) {
        this.Producer_ID = Producer_ID;
    }

    public String getProduct_Name() {
        return Product_Name;
    }

    public void setProduct_Name(String Product_Name) {
        this.Product_Name = Product_Name;
    }

    public String getTitle() {
        return Title;
    }

    public void setTitle(String Title) {
        this.Title = Title;
    }

    public String getScreen() {
        return Screen;
    }

    public void setScreen(String Screen) {
        this.Screen = Screen;
    }

    public String getCPU() {
        return CPU;
    }

    public void setCPU(String CPU) {
        this.CPU = CPU;
    }

    public String getGPU() {
        return GPU;
    }

    public void setGPU(String GPU) {
        this.GPU = GPU;
    }

    public String getRAM() {
        return RAM;
    }

    public void setRAM(String RAM) {
        this.RAM = RAM;
    }

    public String getROM() {
        return ROM;
    }

    public void setROM(String ROM) {
        this.ROM = ROM;
    }

    public String getDescribes() {
        return Describes;
    }

    public void setDescribes(String Describes) {
        this.Describes = Describes;
    }

    public String getThumnail() {
        return Thumnail;
    }

    public void setThumnail(String Thumnail) {
        this.Thumnail = Thumnail;
    }

    public Double getPrice() {
        return Price;
    }

    public void setPrice(Double Price) {
        this.Price = Price;
    }

    public String getCreated_at() {
        return Created_at;
    }

    public void setCreated_at(String Created_at) {
        this.Created_at = Created_at;
    }

    public String getUpdated_at() {
        return Updated_at;
    }

    public void setUpdated_at(String Updated_at) {
        this.Updated_at = Updated_at;
    }




}
