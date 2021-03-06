package br.org.sesisc.smart.safety.controllers;

import br.org.sesisc.smart.safety.models.Cnae;
import br.org.sesisc.smart.safety.repositories.CnaeRepository;
import br.org.sesisc.smart.safety.responses.SuccessResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/cnaes")
public class CnaeController {

    @Autowired
    CnaeRepository repository;

    @GetMapping("/{code}")
    public ResponseEntity<?> show(@PathVariable("code") String code) {
        Cnae cnae  = repository.findByCode(code);


        return SuccessResponse.handle(
                new String[] {"cnae"},
                new Object[] {cnae},
                HttpStatus.OK
        );
    }
}
