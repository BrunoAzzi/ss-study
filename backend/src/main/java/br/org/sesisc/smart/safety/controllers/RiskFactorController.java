package br.org.sesisc.smart.safety.controllers;

import br.org.sesisc.smart.safety.models.RiskFactor;
import br.org.sesisc.smart.safety.repositories.RiskFactorRepository;
import br.org.sesisc.smart.safety.responses.SuccessResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Set;

@RestController
@RequestMapping("/risk_factors")
public class RiskFactorController {

    @Autowired
    RiskFactorRepository repository;

    @GetMapping
    public ResponseEntity<?> index() {
        Set<RiskFactor> riskFactors = repository.findAll();

        return SuccessResponse.handle(
                new String[] {"riskFactors"},
                new Object[] {riskFactors},
                HttpStatus.OK
        );
    }
}
