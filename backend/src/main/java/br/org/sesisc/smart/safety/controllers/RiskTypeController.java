package br.org.sesisc.smart.safety.controllers;

import br.org.sesisc.smart.safety.models.RiskFactor;
import br.org.sesisc.smart.safety.models.RiskType;
import br.org.sesisc.smart.safety.repositories.RiskFactorRepository;
import br.org.sesisc.smart.safety.repositories.RiskTypeRepository;
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
@RequestMapping("/risk_types")
public class RiskTypeController {

    @Autowired
    RiskTypeRepository repository;

    @Autowired
    RiskFactorRepository riskFactorRepository;

    @GetMapping()
    public ResponseEntity<?> index() {
        Set<RiskType> riskTypes = repository.findAll();

        return SuccessResponse.handle(
                new String[] {"riskTypes"},
                new Object[] {riskTypes},
                HttpStatus.OK
        );
    }

    @GetMapping("/{id}/risk_factors")
    public ResponseEntity<?> getRiskFactorsById(@PathVariable("id") long id) {
        Set<RiskFactor> riskFactors = riskFactorRepository.findById(id);

        return SuccessResponse.handle(
                new String[] {"riskFactors"},
                new Object[] {riskFactors},
                HttpStatus.OK
        );
    }
}
