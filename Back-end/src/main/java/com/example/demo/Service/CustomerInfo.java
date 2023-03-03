package com.example.demo.Service;

import com.example.demo.DTO.CustomerDTO;
import com.example.demo.Enity.Customer;

public interface CustomerInfo {
    Customer them(CustomerDTO customerDTO);
    Customer edit(CustomerDTO customerDTO);
    boolean CheckCustomer (String email , String password);
}
