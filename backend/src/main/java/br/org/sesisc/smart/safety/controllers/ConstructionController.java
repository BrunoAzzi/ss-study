package br.org.sesisc.smart.safety.controllers;

import br.org.sesisc.smart.safety.models.Construction;
import br.org.sesisc.smart.safety.models.Manager;
import br.org.sesisc.smart.safety.repositories.ConstructionRepository;
import br.org.sesisc.smart.safety.repositories.ManagerRepository;
import br.org.sesisc.smart.safety.responses.ErrorResponse;
import br.org.sesisc.smart.safety.responses.SuccessResponse;
import br.org.sesisc.smart.safety.service.StorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;

@RestController
public class ConstructionController {

    @Autowired
    ConstructionRepository serviceConstruction;

    @Autowired
    ManagerRepository serviceManager;

    @Autowired
    StorageService storageService;

    @RequestMapping(value ="/constructions",method = RequestMethod.POST)
    public ResponseEntity<?> create(@Valid final Construction cParams, @RequestParam(value = "logo") final MultipartFile logo,
                                    @RequestParam(value = "highlight") final MultipartFile highlight, Errors errors) {

        if (logo != null) {
            storageService.store(logo);
            cParams.setLogoUrl(logo.getOriginalFilename());

        }

        if(highlight != null) {
            storageService.store(highlight);
            cParams.setHighlightUrl(highlight.getOriginalFilename());
        }

        if (errors.hasErrors()) {
            return ErrorResponse.handle(errors, HttpStatus.UNPROCESSABLE_ENTITY);
        }

        Construction construction = serviceConstruction.create(cParams);

        return SuccessResponse.handle(
                new String[] {"construction"},
                new Object[] {construction},
                HttpStatus.CREATED
        );
    }

    @RequestMapping(value ="/constructions/{constructionId}", method = RequestMethod.PUT)
    public ResponseEntity<?> update(@PathVariable long constructionId, @RequestBody final Construction cParams,Errors errors) {
        if (errors.hasErrors()) {
            return ErrorResponse.handle(errors, HttpStatus.UNPROCESSABLE_ENTITY);
        }

        Construction construction = serviceConstruction.findById(constructionId);

        if (construction != null) {
            construction = cParams;
            construction.setId(constructionId);
            serviceConstruction.update(constructionId,new String[] {"name","cep","address","status","description","highlight_url","logo_url","cei_url","cei_code"},new Object[] {cParams.getName(),cParams.getCep(),cParams.getAddress(),cParams.getStatus(), cParams.getDescription(),
                    cParams.getHighlightUrl(), cParams.getLogoUrl(),cParams.getCeiUrl(),cParams.getCeiCode()});
        }

        return SuccessResponse.handle(
                new String[] {"construction"},
                new Object[] {construction},
                HttpStatus.OK
        );
    }


}
