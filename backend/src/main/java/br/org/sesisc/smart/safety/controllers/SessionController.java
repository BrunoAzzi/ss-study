package br.org.sesisc.smart.safety.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import br.org.sesisc.smart.safety.models.Session;

@RestController
@RequestMapping("/sessions")
public class SessionController {

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> create(@RequestBody Session sessionParams) {
        return new ResponseEntity<Session>(sessionParams, HttpStatus.OK);
    }
}
