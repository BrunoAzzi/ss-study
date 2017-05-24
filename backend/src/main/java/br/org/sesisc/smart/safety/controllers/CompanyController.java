package br.org.sesisc.smart.safety.controllers;

import br.org.sesisc.smart.safety.models.Company;
import br.org.sesisc.smart.safety.responses.SuccessResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/companies")
public class CompanyController {

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<?> index() {

        List<Company> companies = new ArrayList<>();
        companies.add(new Company(1, "Empresa 1"));
        companies.add(new Company(2, "Empresa 2"));
        companies.add(new Company(3, "Empresa 3"));

        return SuccessResponse.handle(
                new String[] {"companies"},
                new Object[] {companies},
                HttpStatus.OK
        );

    }

}
