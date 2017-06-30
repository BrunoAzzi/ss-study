package br.org.sesisc.smart.safety.controllers;

import br.org.sesisc.smart.safety.models.Company;
import br.org.sesisc.smart.safety.repositories.CompanyRepository;
import br.org.sesisc.smart.safety.responses.ErrorResponse;
import br.org.sesisc.smart.safety.responses.SuccessResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

@RestController
@RequestMapping("/company")
public class CompanyController {

    @Autowired
    CompanyRepository repository;

    @Autowired
    ObjectMapper objectMapper;

    @PutMapping(value = "/{id}")
    public ResponseEntity<?> update(@PathVariable("id") long id, HttpServletRequest request) throws IOException {

        Company company = repository.findOne(id);

        if (company != null) {
            Company updateCompany = objectMapper.readerForUpdating(company).readValue(request.getReader());

            repository.save(updateCompany);

            return SuccessResponse.handle(
                    new String[] {"company"},
                    new Object[] {company},
                    HttpStatus.ACCEPTED
            );
        } else {
            return ErrorResponse.handle(
                    new String[] {"Empresa não encontrada."},
                    Company.class,
                    HttpStatus.NOT_FOUND
            );
        }
    }

}
