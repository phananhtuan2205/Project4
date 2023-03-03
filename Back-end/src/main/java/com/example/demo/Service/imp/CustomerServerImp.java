package com.example.demo.Service.imp;

import com.example.demo.DTO.CustomerDTO;
import com.example.demo.Enity.Customer;
import com.example.demo.Enity.User;
import com.example.demo.Service.CustomerInfo;
import com.example.demo.Utity.Utity;
import com.example.demo.repo.CustomerRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class CustomerServerImp implements CustomerInfo {
    @Autowired
    private CustomerRepository customerRepository;


    @Override
    public Customer them(CustomerDTO customerDTO) {
        Customer customer = customerRepository.findByEmail(customerDTO.getEmail());
        if(customer != null ){
            return  null;
        }
        Customer customer1 = new Customer();
        try {
            customer1.setCustomerName(customerDTO.getCustomerName());
            customer1.setAddress(customerDTO.getAddress());
            customer1.setBirth(Utity.ConverStringToDate(customerDTO.getBirth()));
            customer1.setPhoneNumber(customerDTO.getPhoneNumber());
            customer1.setIdentityCard(customerDTO.getIdentityCard());
            customer1.setEmail(customerDTO.getEmail());
            customer1.setPass(BCrypt.hashpw(customerDTO.getPass(),BCrypt.gensalt(12)));
            customer1.setCreatedAt(Utity.ConverStringToDate(customerDTO.getCreatedAt()));
            customer1.setUpdatedAt(Utity.ConverStringToDate(customerDTO.getUpdatedAt()));
        } catch (ParseException e) {
            e.printStackTrace();
        }

        return customerRepository.save(customer1);
    }

    @Override
    public Customer edit(CustomerDTO customerDTO) {
        Customer customer = customerRepository.findID(customerDTO.getCustomerId());
        try {
            customer.setCustomerName(customerDTO.getCustomerName());
            customer.setAddress(customerDTO.getAddress());
            customer.setBirth(Utity.ConverStringToDate(customerDTO.getBirth()));
            customer.setPhoneNumber(customerDTO.getPhoneNumber());
            customer.setIdentityCard(customerDTO.getIdentityCard());
            customer.setEmail(customerDTO.getEmail());
            customer.setPass(BCrypt.hashpw(customerDTO.getPass(),BCrypt.gensalt(12)));
            customer.setCreatedAt(Utity.ConverStringToDate(customerDTO.getCreatedAt()));
            customer.setUpdatedAt(Utity.ConverStringToDate(customerDTO.getUpdatedAt()));
        } catch (ParseException e) {
            e.printStackTrace();
        }

        return customerRepository.save(customer);
    }

    @Override
    public boolean CheckCustomer(String email, String password) {
        Customer customer = customerRepository.findByEmail(email);
        if (customer != null){
            if (BCrypt.checkpw(password,customer.getPass())){
                return true;

            }
            else {
                return false;
            }

        }
        return false;

    }
}
