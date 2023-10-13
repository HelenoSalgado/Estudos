package com.heleno.todolist.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import at.favre.lib.crypto.bcrypt.BCrypt;

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

      var hashPassword = BCrypt.withDefaults()
                        .hashToString(12, userModel.getPassword()
                        .toCharArray());

      userModel.setPassword(hashPassword);

      var userCreated = this.userRepository.save(userModel);
      System.out.println(userCreated);
      return ResponseEntity.status(HttpStatus.CREATED).body(userCreated);

   }

}
