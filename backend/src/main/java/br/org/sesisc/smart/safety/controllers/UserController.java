package br.org.sesisc.smart.safety.controllers;

import br.org.sesisc.smart.safety.models.User;
import br.org.sesisc.smart.safety.repositories.UserRepository;
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
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserRepository repository;

    @PostMapping
    public ResponseEntity<?> create(@Valid @RequestBody User params, Errors errors) {
        User user = null;
        try {
            if (errors.hasErrors()) {
                return ErrorResponse.handle(errors, HttpStatus.UNPROCESSABLE_ENTITY);
            }

            params.setActive(true);
            params.digestPassword(params.getPassword());

            user = repository.save(params);

            return SuccessResponse.handle(
                    new String[] {"user"},
                    new Object[] {user},
                    HttpStatus.CREATED
            );

        } catch (Exception e) {
            return ErrorResponse.handle("Usuário já existente.",e.getClass(), HttpStatus.CONFLICT);
        }
    }

    @GetMapping()
    public ResponseEntity<?> index() {
        Set<User> users = repository.findAll();
        return SuccessResponse.handle(
                new String[] { "users" },
                new Object[] { users },
                HttpStatus.OK
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> show(@PathVariable("id") long id) {
        User user = repository.findOne(id);
        if (user != null) {
            return SuccessResponse.handle(
                    new String[] {"user"},
                    new Object[] {user},
                    HttpStatus.OK
            );
        } else {
            return ErrorResponse.handle("Usuário não encontrado.",getClass(), HttpStatus.NOT_FOUND);
        }
    }
}
