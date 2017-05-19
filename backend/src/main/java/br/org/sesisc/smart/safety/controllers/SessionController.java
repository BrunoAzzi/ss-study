package br.org.sesisc.smart.safety.controllers;

import br.org.sesisc.smart.safety.helper.ErrorResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import br.org.sesisc.smart.safety.models.User;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/sessions")
public class SessionController {

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> create(@Valid @RequestBody final User userParams, Errors errors) {
        if (errors.hasErrors()) {
            return new ResponseEntity<HashMap>(ErrorResponse.handle(errors), HttpStatus.UNPROCESSABLE_ENTITY);
        }
        return new ResponseEntity<User>(new User(), HttpStatus.OK);
    }
}
