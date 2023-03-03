package com.example.demo.API;

import com.example.demo.DTO.CustomerDTO;
import com.example.demo.DTO.UsersDTO;
import com.example.demo.Enity.Customer;
import com.example.demo.Enity.User;
import com.example.demo.Service.CustomerInfo;
import com.example.demo.repo.CustomerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;

@RestController
@RequiredArgsConstructor
@RequestMapping(path = "/api/Customer")
@CrossOrigin(origins = "*")
public class CustomerController {
    @Autowired
    private CustomerRepository customerRepository;
    @Autowired
    private CustomerInfo customerInfo;
    @PostMapping("/save")
    public Customer creatCustomer (@RequestBody CustomerDTO customerDTO) throws ParseException {
        return customerInfo.them(customerDTO);
    }
    @PostMapping("login")
    public CustomerDTO Login (@RequestBody CustomerDTO customerDTO) throws ParseException {
        boolean check = customerInfo.CheckCustomer(customerDTO.getEmail(),customerDTO.getPass());

        if (check){
            Customer customer = customerRepository.findByEmail(customerDTO.getEmail());
            CustomerDTO customerDTO1 = new CustomerDTO();
            customerDTO1.add(customer);
            return customerDTO1;
        }
        else {
            return null;
        }
    }

    @PutMapping("/edit")
    public Customer edit (@RequestBody CustomerDTO customerDTO) throws ParseException {
        return customerInfo.edit(customerDTO);
    }

    @DeleteMapping("/delete")
    public void delete (@RequestParam("id") Integer id) throws ParseException {
        customerRepository.deleteById(id);
    }
    @GetMapping("/a")
    public Customer find (@RequestParam("email") String Email) throws ParseException {
        return customerRepository.findByEmail(Email);
    }
}
