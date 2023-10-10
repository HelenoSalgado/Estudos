package com.heleno.todolist.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.heleno.todolist.models.UserModel;

@RestController
@RequestMapping("user")
public class UserController {

   @GetMapping("test")
   public String test(){
      return "Funcionou";
   }

   @PostMapping("create")
   public void create(@RequestBody UserModel user){
      System.out.println(user.name);
   }

}
