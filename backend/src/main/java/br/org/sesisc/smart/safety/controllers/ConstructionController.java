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
    public ResponseEntity<?> create(@RequestBody @Valid final Construction cParams, Errors errors) {

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

    @RequestMapping(value = "/constructions/{id}/upload/logo", method = RequestMethod.PUT)
    public ResponseEntity<?> uploadLogo(@PathVariable("id") long id,
                                        @RequestParam("logo") MultipartFile logo) {

        Construction construction = serviceConstruction.findById(id);

        if (construction != null
                && logo != null
                && ("image/png".equals(logo.getContentType())
                || "image/jpeg".equals(logo.getContentType()))) {
            storageService.store(logo);
            serviceConstruction.update(id,new String[] {"logo_url"},new Object[] {logo.getName()});
            System.out.println("Name: "+logo.getName());
            System.out.println("Content Type: "+logo.getContentType());
        } else {
            return ErrorResponse.handle("Incompatible file.", getClass(), HttpStatus.UNPROCESSABLE_ENTITY);
        }

        return SuccessResponse.handle(
                new String[] {"construction"},
                new Object[] {construction},
                HttpStatus.OK
        );
    }

    @RequestMapping(value = "/constructions/{id}/upload/cei", method = RequestMethod.PUT)
    public ResponseEntity<?> uploadCei(@PathVariable("id") long id,
                                        @RequestParam("cei") MultipartFile cei) {

        Construction construction = serviceConstruction.findById(id);

        if (construction != null
                && cei != null
                && "application/pdf".equals(cei.getContentType())) {
            storageService.store(cei);
            serviceConstruction.update(id,new String[] {"cei_url"},new Object[] {cei.getName()});
        } else {
            return ErrorResponse.handle("Incompatible file.", getClass(), HttpStatus.UNPROCESSABLE_ENTITY);
        }

        return SuccessResponse.handle(
                new String[] {"construction"},
                new Object[] {construction},
                HttpStatus.OK
        );
    }

    @RequestMapping(value ="/constructions/{id}", method = RequestMethod.PUT)
    public ResponseEntity<?> update(@PathVariable("id") long id, @RequestBody final Construction cParams,Errors errors) {

        if (errors.hasErrors()) {
            return ErrorResponse.handle(errors, HttpStatus.UNPROCESSABLE_ENTITY);
        }

        Construction construction = serviceConstruction.findById(id);

        if (construction != null) {
            construction = cParams;
            construction.setId(id);
            serviceConstruction.update(id,new String[] {"name","cep","address","status","description","highlight_url","logo_url","cei_url","cei_code"},new Object[] {cParams.getName(),cParams.getCep(),cParams.getAddress(),cParams.getStatus(), cParams.getDescription(),
                    cParams.getHighlightUrl(), cParams.getLogoUrl(),cParams.getCeiUrl(),cParams.getCeiCode()});
        }

        return SuccessResponse.handle(
                new String[] {"construction"},
                new Object[] {construction},
                HttpStatus.OK
        );
    }

}
