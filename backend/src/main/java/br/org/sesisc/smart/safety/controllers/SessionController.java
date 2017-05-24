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

@RestController
@RequestMapping("/sessions")
public class SessionController {

    @Autowired
    private UserDao serviceUser;

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> create(@Valid @RequestBody final User userParams, Errors errors) {
        if (errors.hasErrors()) {
            return ErrorResponse.handle(errors, HttpStatus.UNPROCESSABLE_ENTITY);
        }

        User user = serviceUser.findBy(new String[] {"email"}, new Object[] {userParams.getEmail()});
        if (user != null && user.authenticate(userParams.getPassword())) {
            user.genNewToken();
            serviceUser.update(user.getId(), new String[] { "token" }, new Object[] { user.getToken() });

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
