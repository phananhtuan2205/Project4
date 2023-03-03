package com.example.demo.API;
import com.example.demo.DTO.ProductDTO;
import com.example.demo.DTO.UsersDTO;
import com.example.demo.Enity.Product;
import com.example.demo.Enity.User;
import com.example.demo.Service.ProductInfo;
import com.example.demo.Service.UserInfo;
import com.example.demo.repo.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;

@RestController
@RequiredArgsConstructor
@RequestMapping(path = "/api/User")
@CrossOrigin(origins = "*")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserInfo userInfo;

    @PostMapping("/save")
    public User createUser (@RequestBody UsersDTO usersDTO) throws ParseException {
        return userInfo.creatnew(usersDTO);
    }
    @PostMapping("login")
    public UsersDTO Login (@RequestBody UsersDTO usersDTO) throws ParseException {
        boolean check = userInfo.CheckUser(usersDTO.getUsersName(),usersDTO.getPass());
        User user = userRepository.findByUsersName(usersDTO.getUsersName());
        UsersDTO usersDTO1 = new UsersDTO();
        usersDTO1.add(user);
        if (check){
            return usersDTO1;
        }
        else {
            return null;
        }
    }

    @PutMapping("/edit")
    public User edit (@RequestBody UsersDTO usersDTO) throws ParseException {
        return userInfo.updateUser(usersDTO);
    }

    @DeleteMapping("/delete")
    public void delete (@RequestParam("id") Integer id) throws ParseException {
        userRepository.deleteById(id);
    }
}
