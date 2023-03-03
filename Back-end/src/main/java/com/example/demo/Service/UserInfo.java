package com.example.demo.Service;

import com.example.demo.DTO.UsersDTO;
import com.example.demo.Enity.User;

public interface UserInfo {
    User creatnew (UsersDTO usersDTO);
    User updateUser (UsersDTO usersDTO);
    boolean CheckUser (String username , String password);
}
