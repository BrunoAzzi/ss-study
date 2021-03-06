package br.org.sesisc.smart.auth.controllers;

import br.org.sesisc.smart.auth.models.User;
import br.org.sesisc.smart.auth.repositories.UserRepository;
import br.org.sesisc.smart.auth.responses.ErrorResponse;
import br.org.sesisc.smart.auth.responses.SuccessResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

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
}