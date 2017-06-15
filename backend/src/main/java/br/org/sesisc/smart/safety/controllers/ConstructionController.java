package br.org.sesisc.smart.safety.controllers;

import br.org.sesisc.smart.safety.models.Construction;
import br.org.sesisc.smart.safety.models.Manager;
import br.org.sesisc.smart.safety.repositories.ConstructionRepository;
import br.org.sesisc.smart.safety.repositories.ManagerRepository;
import br.org.sesisc.smart.safety.responses.ErrorResponse;
import br.org.sesisc.smart.safety.responses.SuccessResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;

@RestController
@RequestMapping("/constructions")
public class ConstructionController {

    @Autowired
    ConstructionRepository serviceConstruction;

    @Autowired
    ManagerRepository serviceManager;

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> create(@Valid @RequestBody final Construction cParams, Errors errors) {
        if (errors.hasErrors()) {
            return ErrorResponse.handle(errors, HttpStatus.UNPROCESSABLE_ENTITY);
        }

        Construction construction = new Construction(
                cParams.getName(),
                cParams.getCep(),
                cParams.getAddress(),
                cParams.getStatus(),
                cParams.getDescription(),
                cParams.getHighlightUrl(),
                cParams.getLogoUrl(),
                cParams.getCeiUrl(),
                cParams.getCeiCode());

        serviceConstruction.create(construction);

        return SuccessResponse.handle(
                new String[] {"construction"},
                new Object[] {construction},
                HttpStatus.CREATED
        );
    }

    @RequestMapping(method = RequestMethod.PUT)
    public ResponseEntity<?> update(@Valid @RequestBody final Manager mParams, Errors errors) {
        if (errors.hasErrors()) {
            return ErrorResponse.handle(errors, HttpStatus.UNPROCESSABLE_ENTITY);
        }

        Manager manager = new Manager(
                mParams.getManagerType(),
                mParams.getEmail(),
                mParams.getPhone());

        serviceManager.create(manager);

        return SuccessResponse.handle(
                new String[] {"manager"},
                new Object[] {manager},
                HttpStatus.OK
        );
    }


}
