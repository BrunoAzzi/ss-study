package br.org.sesisc.smart.safety.controllers;

import br.org.sesisc.smart.safety.helpers.ClassHelper;
import br.org.sesisc.smart.safety.models.Construction;
import br.org.sesisc.smart.safety.repositories.ConstructionRepository;
import br.org.sesisc.smart.safety.repositories.ManagerRepository;
import br.org.sesisc.smart.safety.responses.ErrorResponse;
import br.org.sesisc.smart.safety.responses.SuccessResponse;
import br.org.sesisc.smart.safety.service.StorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/constructions")
public class ConstructionController {

    @Autowired
    ConstructionRepository repository;

    @Autowired
    StorageService storageService;

    @PostMapping
    public ResponseEntity<?> create(@RequestBody @Valid final Construction cParams, Errors errors) {

        if (errors.hasErrors()) {
            return ErrorResponse.handle(errors, HttpStatus.UNPROCESSABLE_ENTITY);
        }

        Construction construction = repository.create(cParams);

        return SuccessResponse.handle(
                new String[] {"construction"},
                new Object[] {construction},
                HttpStatus.CREATED
        );
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<?> update(@PathVariable("id") long id, @RequestBody final Construction cParams, Errors errors) {

        if (errors.hasErrors()) {
            return ErrorResponse.handle(errors, HttpStatus.UNPROCESSABLE_ENTITY);
        }

        Construction construction = repository.findById(id);

        if (construction != null) {
            ClassHelper.Pair<List<String>, List<Object>> changes = ClassHelper.merge(construction, cParams);
            if (changes != null) {
                String[] names = new String[changes.getLeft().size()];
                names = changes.getLeft().toArray(names);
                Object[] values = new Object[changes.getRight().size()];
                values = changes.getRight().toArray(values);
                repository.update(id, names, values);
            }

            return SuccessResponse.handle(
                    new String[] {"construction"},
                    new Object[] {construction},
                    HttpStatus.OK
            );
        } else {
            return ErrorResponse.handle(
                    new String[] {"Construção não encontrada."},
                    Construction.class,
                    HttpStatus.NOT_FOUND
            );
        }
    }

    @RequestMapping(value = "/{id}/upload/logo", method = RequestMethod.PUT)
    public ResponseEntity<?> uploadLogo(@PathVariable("id") long id,
                                        @RequestParam("logo") MultipartFile logo) {

        Construction construction = repository.findById(id);

        if (construction != null
                && logo != null
                && ("image/png".equals(logo.getContentType())
                || "image/jpeg".equals(logo.getContentType()))) {
            String fileName = storageService.store(logo);
            repository.update(id,new String[] {"logo_url"},new Object[] {fileName});
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

    @RequestMapping(value = "/{id}/upload/cei", method = RequestMethod.PUT)
    public ResponseEntity<?> uploadCei(@PathVariable("id") long id,
                                        @RequestParam("cei") MultipartFile cei) {

        Construction construction = repository.findById(id);

        if (construction != null
                && cei != null
                && "application/pdf".equals(cei.getContentType())) {
            storageService.store(cei);
            repository.update(id,new String[] {"cei_url"},new Object[] {cei.getName()});
        } else {
            return ErrorResponse.handle("Incompatible file.", getClass(), HttpStatus.UNPROCESSABLE_ENTITY);
        }

        return SuccessResponse.handle(
                new String[] {"construction"},
                new Object[] {construction},
                HttpStatus.OK
        );
    }

}
