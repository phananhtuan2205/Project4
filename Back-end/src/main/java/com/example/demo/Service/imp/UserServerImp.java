package com.example.demo.Service.imp;

import com.example.demo.DTO.UsersDTO;
import com.example.demo.Enity.Role;
import com.example.demo.Enity.User;
import com.example.demo.Service.UserInfo;
import com.example.demo.Utity.Utity;
import com.example.demo.repo.RoleRepository;
import com.example.demo.repo.UserRepository;
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
public class UserServerImp implements UserInfo {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;
    @Override
    public User creatnew(UsersDTO usersDTO) {
        User user = userRepository.findByUsersName(usersDTO.getUsersName());
        Role role = roleRepository.findByRoleName(usersDTO.getRoleId());
        if(user != null &&  usersDTO == null && role == null){
            return null;
        }
        User user1 = new User();
        try {

            user1.setRole(role);
            user1.setUsersName(usersDTO.getUsersName());
            user1.setAddress(usersDTO.getAddress());
            user1.setBirth(Utity.ConverStringToDate(usersDTO.getBirth()));
            user1.setPhoneNumber(usersDTO.getPhoneNumber());
            user1.setIdentityCard(usersDTO.getIdentityCard());
            user1.setAvatar(usersDTO.getAvatar());
            user1.setEmail(usersDTO.getEmail());
            user1.setPass(BCrypt.hashpw(usersDTO.getPass(),BCrypt.gensalt(12)));
            user1.setCreatedAt(Utity.ConverStringToDate(usersDTO.getCreatedAt()));
            user1.setUpdatedAt(Utity.ConverStringToDate(usersDTO.getUpdatedAt()));
        } catch (ParseException e) {
            e.printStackTrace();
        }



        return userRepository.save(user1);
    }

    @Override
    public User updateUser(UsersDTO usersDTO) {
        User user = userRepository.findUserByID(usersDTO.getUsersId());
        Role role = roleRepository.findByRoleName(usersDTO.getRoleId());
        if(user == null &&  usersDTO == null && role == null){
            return null;
        }
        try {

            user.setRole(role);
            user.setUsersName(usersDTO.getUsersName());
            user.setAddress(usersDTO.getAddress());
            user.setBirth(Utity.ConverStringToDate(usersDTO.getBirth()));
            user.setPhoneNumber(usersDTO.getPhoneNumber());
            user.setIdentityCard(usersDTO.getIdentityCard());
            user.setAvatar(usersDTO.getAvatar());
            user.setEmail(usersDTO.getEmail());
            user.setPass(BCrypt.hashpw(usersDTO.getPass(),BCrypt.gensalt(12)));
            user.setCreatedAt(Utity.ConverStringToDate(usersDTO.getCreatedAt()));
            user.setUpdatedAt(Utity.ConverStringToDate(usersDTO.getUpdatedAt()));
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return userRepository.save(user);

    }

    @Override
    public boolean CheckUser(String username, String password) {
        User user = userRepository.findByUsersName(username);
        if (user != null){
            if (BCrypt.checkpw(password,user.getPass())){
                    return true;

            }
            else {
                return false;
            }

        }
        return false;
    }
}
