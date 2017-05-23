package br.org.sesisc.smart.safety.controllers;

import br.org.sesisc.smart.safety.dao.UserDao;
import br.org.sesisc.smart.safety.responses.ErrorResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import br.org.sesisc.smart.safety.models.User;

import javax.validation.Valid;
import java.util.HashMap;

@RestController
@RequestMapping("/sessions")
public class SessionController {

    @Autowired
    private UserDao serviceUser;

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> create(@Valid @RequestBody final User userParams, Errors errors) {
        if (errors.hasErrors()) {
            return new ResponseEntity<HashMap>(ErrorResponse.handle(errors), HttpStatus.UNPROCESSABLE_ENTITY);
        }

        User user = serviceUser.findBy(new String[] {"email"}, new Object[] {userParams.getEmail()});
        if (user.authenticate(userParams.getPassword())) {
            HashMap<String, Object> map = new HashMap<String, Object>();
            map.put("user", user);

            return new ResponseEntity<HashMap>(map, HttpStatus.OK);
        }

        return new ResponseEntity<User>(user, HttpStatus.OK);
    }
}
