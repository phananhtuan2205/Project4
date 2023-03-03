package com.example.demo.DTO;

import com.example.demo.Enity.Customer;
import com.example.demo.Utity.Utity;

import java.sql.Date;

public class CustomerDTO {
    private Integer customerId;
    private String customerName;
    private String address;
    private String birth;
    private String identityCard;
    private String email;
    private String pass;
    private String createdAt;
    private String updatedAt;
    public void setCustomerId(Integer customerId) {
        this.customerId = customerId;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setBirth(String birth) {
        this.birth = birth;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public void setIdentityCard(String identityCard) {
        this.identityCard = identityCard;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPass(String pass) {
        this.pass = pass;
    }

    public void setCreatedAt(String createdAt) {
        this.createdAt = createdAt;
    }

    public void setUpdatedAt(String updatedAt) {
        this.updatedAt = updatedAt;
    }

    private String phoneNumber;

    public Integer getCustomerId() {
        return customerId;
    }

    public String getCustomerName() {
        return customerName;
    }

    public String getAddress() {
        return address;
    }

    public String getBirth() {
        return birth;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public String getIdentityCard() {
        return identityCard;
    }

    public String getEmail() {
        return email;
    }

    public String getPass() {
        return pass;
    }

    public String getCreatedAt() {
        return createdAt;
    }

    public String getUpdatedAt() {
        return updatedAt;
    }



    public CustomerDTO(Integer customerId, String customerName, String address, String birth, String phoneNumber, String identityCard, String email, String pass, String createdAt, String updatedAt) {
        this.customerId = customerId;
        this.customerName = customerName;
        this.address = address;
        this.birth = birth;
        this.phoneNumber = phoneNumber;
        this.identityCard = identityCard;
        this.email = email;
        this.pass = pass;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }


    public  void add(Customer customer){
        this.customerId = customer.getId();
        this.customerName = customer.getCustomerName();
        this.address = customer.getAddress();
        this.birth = Utity.ConvertDateToString(customer.getBirth());
        this.phoneNumber = customer.getPhoneNumber();
        this.identityCard = customer.getIdentityCard();
        this.email = customer.getEmail();
        this.pass = customer.getPass();
        this.createdAt = Utity.ConvertDateToString(customer.getCreatedAt());
        this.updatedAt = Utity.ConvertDateToString(customer.getUpdatedAt());
    }

    public CustomerDTO() {
    }

}
