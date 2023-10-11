package com.heleno.todolist.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.heleno.todolist.models.UserModel;
import com.heleno.todolist.repository.IUserRepository;

@RestController
@RequestMapping("user")
public class UserController {

   @Autowired
   private IUserRepository userRepository;

   @PostMapping("create")
   public ResponseEntity create(@RequestBody UserModel userModel){

      var userExist = this.userRepository.findByUsername(userModel.getUsername());

      if(userExist != null){
          return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Usuário já existe");
      };  

      var userCreated = this.userRepository.save(userModel);
      System.out.println(userCreated);
      return ResponseEntity.status(HttpStatus.CREATED).body(userCreated);

   }

}
