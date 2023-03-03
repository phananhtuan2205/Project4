package com.example.demo.DTO;

public class OrdersDTO {
    private Integer orderId;
    private Integer customerId;
    private Integer userId;
    private String address;
    private String phoneNumber;

    public OrdersDTO() {
    }

    public OrdersDTO(Integer orderId, Integer customerId, Integer userId, String address, String phoneNumber, Double totalPrice, Integer totalQuantity) {
        this.orderId = orderId;
        this.customerId = customerId;
        this.userId = userId;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.totalPrice = totalPrice;
        this.totalQuantity = totalQuantity;
    }

    private Double totalPrice;
    private Integer totalQuantity;

    public Integer getOrderId() {
        return this.orderId;
    }

    public void setOrderId(Integer orderId) {
        this.orderId = orderId;
    }

    public Integer getCustomerId() {
        return this.customerId;
    }

    public void setCustomerId(Integer customerId) {
        this.customerId = customerId;
    }

    public Integer getUserId() {
        return this.userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getAddress() {
        return this.address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhoneNumber() {
        return this.phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public Double getTotalPrice() {
        return this.totalPrice;
    }

    public void setTotalPrice(Double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public Integer getTotalQuantity() {
        return this.totalQuantity;
    }

    public void setTotalQuantity(Integer totalQuantity) {
        this.totalQuantity = totalQuantity;
    }
}
