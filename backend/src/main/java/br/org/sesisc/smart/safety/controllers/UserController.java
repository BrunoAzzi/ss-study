package br.org.sesisc.smart.safety.controllers;

import br.org.sesisc.smart.safety.dao.UserDao;
import br.org.sesisc.smart.safety.models.User;
import br.org.sesisc.smart.safety.responses.ErrorResponse;
import br.org.sesisc.smart.safety.responses.SuccessResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.HashMap;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserDao serviceUser;

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> create(@Valid @RequestBody User userParams, Errors errors) {
        if (errors.hasErrors()) {
            return ErrorResponse.handle(errors, HttpStatus.UNPROCESSABLE_ENTITY);
        }

        User user = new User();
        user.setEmail(userParams.getEmail());
        user.digestPassword(userParams.getPassword());
        user.setActive(true);
        serviceUser.create(user);

        return SuccessResponse.handle(
                new String[] {"user"},
                new Object[] {user},
                HttpStatus.OK
        );
    }
}
