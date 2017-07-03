package br.org.sesisc.smart.safety.controllers;

import br.org.sesisc.smart.safety.helpers.FileHelper;
import br.org.sesisc.smart.safety.models.Company;
import br.org.sesisc.smart.safety.repositories.CompanyRepository;
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
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

@RestController
@RequestMapping("/company")
public class CompanyController {

    @Autowired
    CompanyRepository repository;

    @Autowired
    ObjectMapper objectMapper;

    @Autowired
    private StorageService storageService;

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

    @GetMapping("/{id}")
    public ResponseEntity<?> show(@PathVariable("id") long id) {
        Company company = repository.findOne(id);

        return SuccessResponse.handle(
                new String[] {"company"},
                new Object[] {company},
                HttpStatus.OK
        );
    }

    @GetMapping("/{id}/{type}")
    public ResponseEntity<?> loadFile(
            @PathVariable("id") long id,
            @PathVariable("type") String type
    ) {
        Company company = repository.findOne(id);

        if (company != null && FileHelper.checkType(type)){
            String fileName = type.equals("logo") ? company.getLogoFileName() : null;
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
                            Company.class,
                            HttpStatus.NOT_FOUND
                    );
                }
            } else {
                return ErrorResponse.handle(
                        new String[] {"Arquivo não encontrado."},
                        Company.class,
                        HttpStatus.NOT_FOUND
                );
            }
        }

        return ErrorResponse.handle(
                new String[] {"Empresa não encontrada."},
                Company.class,
                HttpStatus.NOT_FOUND
        );
    }

    @PostMapping("/{id}/{type}")
    public ResponseEntity<?> uploadFile(
            @PathVariable("id") long id,
            @PathVariable("type") String type,
            @RequestParam("file") MultipartFile file
    ) {
        Company company = repository.findOne(id);

        if (company != null && file != null) {
            if (FileHelper.checkTypeAndFileContent(type, file.getContentType())) {
                String fileName = storageService.store(file);

                if (type.equals("logo")) {
                    company.setLogoFileName(fileName);
                    company.setLogoUrl(String.format("/company/%d/%s", id, type));
                }

                repository.save(company);

                return SuccessResponse.handle(
                        new String[]{"company"},
                        new Object[]{company},
                        HttpStatus.OK
                );
            } else {
                return ErrorResponse.handle(
                        new String[] {"Arquivo incompatível."},
                        Company.class,
                        HttpStatus.UNSUPPORTED_MEDIA_TYPE
                );
            }
        }

        return ErrorResponse.handle(
                new String[] {"Construção não encontrada."},
                Company.class,
                HttpStatus.NOT_FOUND
        );
    }

}
