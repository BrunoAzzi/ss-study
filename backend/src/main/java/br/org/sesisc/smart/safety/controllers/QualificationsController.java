package br.org.sesisc.smart.safety.controllers;

import br.org.sesisc.smart.safety.models.Qualification;
import br.org.sesisc.smart.safety.repositories.QualificationsRepository;
import br.org.sesisc.smart.safety.responses.ErrorResponse;
import br.org.sesisc.smart.safety.responses.SuccessResponse;
import br.org.sesisc.smart.safety.service.StorageService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


import static br.org.sesisc.smart.safety.helpers.FileHelper.JPEG_TYPE;
import static br.org.sesisc.smart.safety.helpers.FileHelper.PDF_TYPE;
import static br.org.sesisc.smart.safety.helpers.FileHelper.PNG_TYPE;

@RestController
@RequestMapping("/qualifications")
public class QualificationsController {


    @Autowired
    QualificationsRepository repository;

    @Autowired
    private StorageService storageService;

    @Autowired
    private ObjectMapper objectMapper;


    @PostMapping("/attachment/{id}")
    public ResponseEntity<?> uploadFile(
            @PathVariable("id") long id,
            @RequestParam("file") MultipartFile file
    ) {
        Qualification qualification = repository.findOne(id);

        if (qualification != null && file != null) {
            if(file.getContentType().equals(PNG_TYPE) || file.getContentType().equals(JPEG_TYPE)|| file.getContentType().equals(PDF_TYPE) ) {
                String fileName = storageService.store(file);
                qualification.setAttachmentFileName(fileName);
                qualification.setAttachmentUrl(String.format("/qualifications/attachment/%d", id));

                repository.save(qualification);

                return SuccessResponse.handle(
                        new String[]{"qualification"},
                        new Object[]{qualification},
                        HttpStatus.OK
                );
            } else {
                return ErrorResponse.handle(
                        new String[] {"Arquivo incompatível."},
                        Qualification.class,
                        HttpStatus.UNSUPPORTED_MEDIA_TYPE
                );
            }
        }

        return ErrorResponse.handle(
                new String[] {"Qualificação não encontrada."},
                Qualification.class,
                HttpStatus.NOT_FOUND
        );
    }




    @GetMapping("/attachment/{id}")
    public ResponseEntity<?> loadFile(
            @PathVariable("id") long id
    ) {
        Qualification qualification = repository.findOne(id);


        if (qualification != null){
            String fileName = qualification.getAttachmentFileName();
            if (!fileName.isEmpty()) {
                Resource file = storageService.loadFile(fileName);
                if (file != null) {
                    return ResponseEntity
                            .ok()
                            .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\""+file.getFilename()+"\"")
                            .body(file);
                } else {
                    return ErrorResponse.handle(
                            new String[] {"Problema ao encontrar arquivo no servidor."},
                            Qualification.class,
                            HttpStatus.NOT_FOUND
                    );
                }
            } else {
                return ErrorResponse.handle(
                        new String[] {"Arquivo não encontrado."},
                        Qualification.class,
                        HttpStatus.NOT_FOUND
                );
            }
        }

        return ErrorResponse.handle(
                new String[] {"Qualificação não encontrada."},
                Qualification.class,
                HttpStatus.NOT_FOUND
        );

    }
}
