package br.org.sesisc.smart.safety.controllers;

import br.org.sesisc.smart.safety.helpers.FileHelper;
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
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.io.IOException;
import java.util.Set;

@RestController
@RequestMapping("/constructions")
public class ConstructionController {

    @Autowired
    private ConstructionRepository repository;

    @Autowired
    private StorageService storageService;

    @Autowired
    private ObjectMapper objectMapper;


    @GetMapping
    public ResponseEntity<?> index() {
        Set<Construction> constructions = repository.findByActivatedTrue();

        return SuccessResponse.handle(
                new String[] {"constructions"},
                new Object[] {constructions},
                HttpStatus.OK
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> show(@PathVariable("id") long id) {
        Construction construction = repository.findOne(id);

        if (construction != null) {
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

    @PostMapping
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


    @PutMapping(value = "/{id}")
    public ResponseEntity<?> update(@PathVariable("id") long id, HttpServletRequest request) throws IOException {

        Construction construction = repository.findOne(id);

        if (construction != null) {
            Construction updatedConstruction = objectMapper.readerForUpdating(construction).readValue(request.getReader());

            repository.save(updatedConstruction);

            return SuccessResponse.handle(
                new String[] {"construction"},
                new Object[] {construction},
                HttpStatus.ACCEPTED
            );
        } else {
            return ErrorResponse.handle(
                    new String[] {"Construção não encontrada."},
                    Construction.class,
                    HttpStatus.NOT_FOUND
            );
        }
    }

    @GetMapping("/{id}/{type}")
    public ResponseEntity<?> loadFile(
            @PathVariable("id") long id,
            @PathVariable("type") String type
    ) {
        Construction construction = repository.findOne(id);

        if (construction != null && FileHelper.checkType(type)){
            String fileName = type.equals("logo") ? construction.getLogoFileName() : construction.getCeiFileName();
            if (fileName != null && !fileName.isEmpty()) {
                Resource file = storageService.loadFile(fileName);
                if (file != null) {
                    return ResponseEntity
                            .ok()
                            .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\""+file.getFilename()+"\"")
                            .body(file);
                } else {
                    return ErrorResponse.handle(
                            new String[] {"Problema ao encontrar arquivo no servidor."},
                            Construction.class,
                            HttpStatus.NOT_FOUND
                    );
                }
            } else {
                return ErrorResponse.handle(
                        new String[] {"Arquivo não encontrado."},
                        Construction.class,
                        HttpStatus.NOT_FOUND
                );
            }
        }

        return ErrorResponse.handle(
                new String[] {"Construção não encontrada."},
                Construction.class,
                HttpStatus.NOT_FOUND
        );

    }

    @PostMapping("/{id}/{type}")
    public ResponseEntity<?> uploadFile(
            @PathVariable("id") long id,
            @PathVariable("type") String type,
            @RequestParam("file") MultipartFile file
    ) {
        Construction construction = repository.findOne(id);

        if (construction != null && file != null) {
            if (FileHelper.checkTypeAndFileContent(type, file.getContentType())) {
                String fileName = storageService.store(file);

                if (type.equals("logo")) {
                    construction.setLogoFileName(fileName);
                    construction.setLogoUrl(String.format("/constructions/%d/%s", id, type));
                } else if (type.equals("cei")) {
                    construction.setCeiFileName(fileName);
                    construction.setCeiUrl(String.format("/constructions/%d/%s", id, type));
                }

                repository.save(construction);

                return SuccessResponse.handle(
                        new String[]{"construction"},
                        new Object[]{construction},
                        HttpStatus.OK
                );
            } else {
                return ErrorResponse.handle(
                        new String[] {"Arquivo incompatível."},
                        Construction.class,
                        HttpStatus.UNSUPPORTED_MEDIA_TYPE
                );
            }
        }

        return ErrorResponse.handle(
                new String[] {"Construção não encontrada."},
                Construction.class,
                HttpStatus.NOT_FOUND
        );
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> destroy(@PathVariable("id") long id) {
        Construction construction = repository.findOne(id);

        if (construction != null) {
            construction.setActivated(false);
            repository.save(construction);

            return SuccessResponse.handle(HttpStatus.OK);
        }

        return ErrorResponse.handle(
                new String[] {"Construção não encontrada."},
                Construction.class,
                HttpStatus.NOT_FOUND
        );
    }

}
