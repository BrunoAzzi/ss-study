package br.org.sesisc.smart.safety.controllers;

import br.org.sesisc.smart.safety.helpers.TokenHelper;
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

@RestController
@RequestMapping("/sessions")
public class SessionController {

    @Autowired
    private UserRepository repository;

    @PostMapping
    public ResponseEntity<?> create(@Valid @RequestBody final User params, Errors errors) {
        if (errors.hasErrors()) {
            return ErrorResponse.handle(errors, HttpStatus.UNPROCESSABLE_ENTITY);
        }

        User user = repository.findByEmail(params.getEmail());
        if (user != null && user.authenticate(params.getPassword())) {
            user.setToken(TokenHelper.getInstance().generateToken());
            repository.save(user);

            return SuccessResponse.handle(
                    new String[] {"user"},
                    new Object[] {user},
                    HttpStatus.OK
            );
        } else {
            return ErrorResponse.handle(
                    new String[] { "Usuario e/ou senha inválido!" },
                    User.class,
                    HttpStatus.UNPROCESSABLE_ENTITY
            );
        }
    }
}
