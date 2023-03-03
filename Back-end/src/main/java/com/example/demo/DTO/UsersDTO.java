package com.example.demo.DTO;

import com.example.demo.Enity.User;
import com.example.demo.Utity.Utity;

import java.sql.Date;

public class UsersDTO {
    private Integer usersId;
    private String roleId;
    private String usersName;
    private String address;
    private String birth;
    private String phoneNumber;
    private String identityCard;
    private String avatar;
    private String email;
    private String pass;
    String createdAt;
    String updatedAt;

    public UsersDTO(String roleId, String usersName, String address, String birth, String phoneNumber, String identityCard, String avatar, String email, String pass, String createdAt, String updatedAt) {
        this.roleId = roleId;
        this.usersName = usersName;
        this.address = address;
        this.birth = birth;
        this.phoneNumber = phoneNumber;
        this.identityCard = identityCard;
        this.avatar = avatar;
        this.email = email;
        this.pass = pass;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public UsersDTO() {
    }

    public void setUsersId(Integer usersId) {
        this.usersId = usersId;
    }

    public void setRoleId(String roleId) {
        this.roleId = roleId;
    }

    public void setUsersName(String usersName) {
        this.usersName = usersName;
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

    public void setAvatar(String avatar) {
        this.avatar = avatar;
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

    public void add (User user) {
        this.usersId = user.getId();
        this.roleId = user.getRole().getRoleName();
        this.usersName = user.getUsersName();
        this.address = user.getAddress();
        this.birth = Utity.ConvertDateToString(user.getBirth());
        this.phoneNumber = user.getPhoneNumber();
        this.identityCard = user.getIdentityCard();
        this.avatar = user.getAvatar();
        this.createdAt = Utity.ConvertDateToString(user.getCreatedAt());
        this.updatedAt = Utity.ConvertDateToString(user.getUpdatedAt());
        this.email = user.getEmail();
    }


    public Integer getUsersId() {
        return usersId;
    }

    public String getRoleId() {
        return roleId;
    }

    public String getUsersName() {
        return usersName;
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

    public String getAvatar() {
        return avatar;
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
}
