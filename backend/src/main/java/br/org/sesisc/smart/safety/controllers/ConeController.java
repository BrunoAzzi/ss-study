package br.org.sesisc.smart.safety.controllers;

import br.org.sesisc.smart.safety.models.Cone;
import br.org.sesisc.smart.safety.repositories.ConeRepository;
import br.org.sesisc.smart.safety.responses.ErrorResponse;
import br.org.sesisc.smart.safety.responses.SuccessResponse;
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
@RequestMapping("/cones")
public class ConeController {

    @Autowired
    ConeRepository repository;

    @PostMapping
    public ResponseEntity<?> create(@RequestBody @Valid Cone params, Errors errors) {
        if (errors.hasErrors()) {
            return ErrorResponse.handle(errors, HttpStatus.UNPROCESSABLE_ENTITY);
        }

        Cone cone = repository.save(params);

        return SuccessResponse.handle(
                new String[] {"cone"},
                new Object[] {cone},
                HttpStatus.CREATED
        );
    }

}
