package com.heleno.todolist.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.heleno.todolist.models.UserModel;

public interface IUserRepository extends JpaRepository<UserModel, UUID>{

    UserModel findByUsername(String username);

}