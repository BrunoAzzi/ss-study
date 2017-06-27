package br.org.sesisc.smart.safety.controllers;

import br.org.sesisc.smart.safety.exceptions.ConstructionException;
import br.org.sesisc.smart.safety.models.Construction;
import br.org.sesisc.smart.safety.repositories.ConstructionRepository;
import br.org.sesisc.smart.safety.responses.ErrorResponse;
import br.org.sesisc.smart.safety.responses.SuccessResponse;
import br.org.sesisc.smart.safety.service.StorageService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartException;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.io.IOException;
import java.util.Set;

import static br.org.sesisc.smart.safety.helpers.FileHelper.*;

@RestController
@RequestMapping("/constructions")
public class ConstructionController {

    @Autowired
    ConstructionRepository repository;

    @Autowired
    StorageService storageService;

    @Autowired
    ObjectMapper objectMapper;


    @GetMapping
    public ResponseEntity<?> index() {
        Set<Construction> constructions = repository.findAll();

        return SuccessResponse.handle(
                new String[] {"constructions"},
                new Object[] {constructions},
                HttpStatus.OK
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> show(@PathVariable("id") long id) {
        Construction construction = repository.findOne(id);

        return SuccessResponse.handle(
                new String[] {"construction"},
                new Object[] {construction},
                HttpStatus.OK
        );
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> create(@RequestBody @Valid final Construction cParams, Errors errors) {

        if (errors.hasErrors()) {
            return ErrorResponse.handle(errors, HttpStatus.UNPROCESSABLE_ENTITY);
        }

        Construction construction = repository.save(cParams);

        return SuccessResponse.handle(
                new String[] {"construction"},
                new Object[] {construction},
                HttpStatus.CREATED
        );
    }

    @RequestMapping(value = "/{id}/{type}", method = RequestMethod.GET)
    public ResponseEntity<Resource> loadFile(@PathVariable("id") long id,
                                              @PathVariable("type") String type) {

        Construction construction = repository.findOne(id);

        Resource file = null;

        if (construction != null) {
            switch (type) {
                case "logo":
                    if(construction.getCeiFileName() != null) {
                        file = storageService.loadFile(construction.getLogoFileName());
                    } else {
                        throw new ConstructionException("Arquivo não encontrado.");
                    }
                    break;
                case "cei":
                    if (construction.getCeiFileName() != null) {
                        file = storageService.loadFile(construction.getCeiFileName());
                    } else {
                        throw new ConstructionException("Arquivo não encontrado.");
                    }
                    break;
                default:
                    break;
            }

            return ResponseEntity
                    .ok()
                    .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\""+file.getFilename()+"\"")
                    .body(file);
        } else {
            throw new ConstructionException("Arquivo não encontrado.");
        }

    }


    @RequestMapping(value = "/{id}/files/logo", method = RequestMethod.PUT)
    public ResponseEntity<?> uploadLogo(@PathVariable("id") long id,
                                        @RequestParam("logo") MultipartFile logo) {

        Construction construction = repository.findOne(id);

        if (construction != null
                && logo != null
                && (PNG_TYPE.equals(logo.getContentType())
                || JPEG_TYPE.equals(logo.getContentType()))) {

            String fileName = storageService.store(logo);
            construction.setLogoFileName(fileName);
            construction.setLogoUrl(String.format("/constructions/%d/logo", id));

            repository.save(construction);

        } else {
            throw new ConstructionException("Arquivo incompatível.");
        }

        return SuccessResponse.handle(
                new String[] {"construction"},
                new Object[] {construction},
                HttpStatus.OK
        );
    }

    @RequestMapping(value = "/{id}/files/cei", method = RequestMethod.PUT)
    public ResponseEntity<?> uploadCei(@PathVariable("id") long id,
                                        @RequestParam("cei") MultipartFile cei) {

        Construction construction = repository.findOne(id);

        if (construction != null
                && cei != null
                && PDF_TYPE.equals(cei.getContentType())) {

            String fileName =  storageService.store(cei);
            construction.setCeiFileName(fileName);
            construction.setCeiUrl(String.format("/constructions/%d/cei", id));

            repository.save(construction);
        } else {
            throw new ConstructionException("Arquivo incompatível.");
        }

        return SuccessResponse.handle(
                new String[] {"construction"},
                new Object[] {construction},
                HttpStatus.OK
        );
    }


    @PutMapping(value = "/{id}")
    public ResponseEntity<?> update(@PathVariable("id") long id, HttpServletRequest request) throws IOException {

        Construction construction = repository.findOne(id);

        if (construction != null) {
            Construction updatedConstruction = objectMapper.readerForUpdating(construction).readValue(request.getReader());

            repository.save(updatedConstruction);

            return new ResponseEntity<>(updatedConstruction, HttpStatus.ACCEPTED);
        } else {
            return ErrorResponse.handle(
                    new String[] {"Construção não encontrada."},
                    Construction.class,
                    HttpStatus.NOT_FOUND
            );
        }
    }

    @ExceptionHandler({ConstructionException.class, MultipartException.class})
    public ResponseEntity<?> handleConstructionException(Exception exception) throws IOException {
        return ErrorResponse.handle(exception.getClass() == MultipartException.class ? "Tamanho do arquivo inválido." : exception.getMessage(),exception.getClass(), HttpStatus.UNPROCESSABLE_ENTITY);
    }

}
