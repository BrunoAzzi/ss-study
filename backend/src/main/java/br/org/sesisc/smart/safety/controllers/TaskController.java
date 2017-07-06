package br.org.sesisc.smart.safety.controllers;

import br.org.sesisc.smart.safety.models.Task;
import br.org.sesisc.smart.safety.repositories.TaskRepository;
import br.org.sesisc.smart.safety.responses.ErrorResponse;
import br.org.sesisc.smart.safety.responses.SuccessResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.Set;

@RestController
@RequestMapping("/tasks")
public class TaskController {

    @Autowired
    TaskRepository repository;

    @PostMapping
    public ResponseEntity<?> create(@RequestBody @Valid Task params, Errors errors) {
        if (errors.hasErrors()) {
            return ErrorResponse.handle(errors, HttpStatus.UNPROCESSABLE_ENTITY);
        }

        Task task = repository.save(params);

        return SuccessResponse.handle(
                new String[] {"task"},
                new Object[] {task},
                HttpStatus.CREATED
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> show(@PathVariable("id") long id) {
        Task task = repository.findOne(id);
        if(task != null) {
            return SuccessResponse.handle(
                    new String[] { "task" },
                    new Object[] { task },
                    HttpStatus.OK
            );
        } else {
            return ErrorResponse.handle("Tarefa não encontrada.", getClass(), HttpStatus.NOT_FOUND);
        }

    }

    @GetMapping()
    public ResponseEntity<?> index() {
        Set<Task> tasks = repository.findAll();
        return SuccessResponse.handle(
                new String[] { "tasks" },
                new Object[] { tasks },
                HttpStatus.OK
        );
    }


}
