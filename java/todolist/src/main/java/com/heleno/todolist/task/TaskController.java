package com.heleno.todolist.task;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("task")
public class TaskController {

   @Autowired
   private ITaskRepository taskRepository;

   @PostMapping("create")
   public ResponseEntity create(@RequestBody TaskModel taskModel) {

      var taskCreated = this.taskRepository.save(taskModel);
      System.out.println(taskCreated);
      return ResponseEntity.status(HttpStatus.CREATED).body(taskCreated);

   }

   @GetMapping("")
   public ResponseEntity getTasks() {

      var tasks = this.taskRepository.findAll();
      return ResponseEntity.status(HttpStatus.OK).body(tasks);

   }

}