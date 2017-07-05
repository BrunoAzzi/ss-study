package br.org.sesisc.smart.safety.controllers;

import br.org.sesisc.smart.safety.models.Aso;
import br.org.sesisc.smart.safety.repositories.AsoRepository;
import br.org.sesisc.smart.safety.responses.SuccessResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Set;

@RestController
@RequestMapping("/asos")
public class AsoController {

    @Autowired
    AsoRepository repository;

    @GetMapping()
    public ResponseEntity<?> index() {
        Set<Aso> asos = repository.findAll();
        return SuccessResponse.handle(
                new String[] { "asos" },
                new Object[] { asos },
                HttpStatus.OK
        );
    }
}
