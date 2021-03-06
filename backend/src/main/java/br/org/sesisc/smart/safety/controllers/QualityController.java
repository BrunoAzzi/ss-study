package br.org.sesisc.smart.safety.controllers;

import br.org.sesisc.smart.safety.models.Quality;
import br.org.sesisc.smart.safety.repositories.QualitiesRepository;
import br.org.sesisc.smart.safety.responses.ErrorResponse;
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
@RequestMapping("/qualities")
public class QualityController {

    @Autowired
    QualitiesRepository repository;


    @GetMapping()
    public ResponseEntity<?> index() {
        Set<Quality> qualities = repository.findAll();
        return SuccessResponse.handle(
                new String[] { "qualities" },
                new Object[] { qualities },
                HttpStatus.OK
        );
    }


}
