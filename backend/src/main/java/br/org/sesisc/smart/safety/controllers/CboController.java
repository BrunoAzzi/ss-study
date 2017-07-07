package br.org.sesisc.smart.safety.controllers;

import br.org.sesisc.smart.safety.models.Cbo;
import br.org.sesisc.smart.safety.models.Cnae;
import br.org.sesisc.smart.safety.repositories.CboRepository;
import br.org.sesisc.smart.safety.repositories.CnaeRepository;
import br.org.sesisc.smart.safety.responses.ErrorResponse;
import br.org.sesisc.smart.safety.responses.SuccessResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/cbos")
public class CboController {

    @Autowired
    CboRepository repository;

    @GetMapping("/{code}")
    public ResponseEntity<?> show(@PathVariable("id") long id) {
        Cbo cbo  = repository.findOne(id);

        if(cbo!=null){
        return SuccessResponse.handle(
                new String[] {"cbo"},
                new Object[] {cbo},
                HttpStatus.OK
        );
        } else {
                return ErrorResponse.handle(
                        new String[] {"CBO não encontrado."},
                        Cbo.class,
                        HttpStatus.NOT_FOUND
                );
        }
    }
}
