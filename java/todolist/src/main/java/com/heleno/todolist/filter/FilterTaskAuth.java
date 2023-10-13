package com.heleno.todolist.filter;

import java.io.IOException;
import java.util.Base64;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.fasterxml.jackson.databind.JsonSerializable.Base;
import com.heleno.todolist.user.IUserRepository;

import at.favre.lib.crypto.bcrypt.BCrypt;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class FilterTaskAuth extends OncePerRequestFilter{

    @Autowired
    private IUserRepository userRepository;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
        throws ServletException, IOException {

        System.out.println("Chegou no filtro");

        var authorization = request.getHeader("Authorization").substring("basic".length()).trim();

        byte[] authDecode = Base64.getDecoder().decode(authorization);

        var authString = new String(authDecode);

        String[] credentials = authString.split(":");

        String username = credentials[0];
        String password = credentials[1];

        var userExist = this.userRepository.findByUsername(username);

        if(userExist == null){

          response.sendError(401);  

        }else{

            var passwordVerify = BCrypt.verifyer().verify(password.toCharArray(), userExist.getPassword());

            if(passwordVerify.verified){

                filterChain.doFilter(request, response);
                
            }else{

                response.sendError(401);
            }

        }





    }
    
}
