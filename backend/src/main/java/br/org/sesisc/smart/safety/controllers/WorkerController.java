package br.org.sesisc.smart.safety.controllers;

import br.org.sesisc.smart.safety.models.Worker;
import br.org.sesisc.smart.safety.repositories.WorkerRepository;
import br.org.sesisc.smart.safety.responses.ErrorResponse;
import br.org.sesisc.smart.safety.responses.SuccessResponse;
import br.org.sesisc.smart.safety.service.StorageService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.multipart.MultipartFile;
import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.io.IOException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import java.util.Set;

import static br.org.sesisc.smart.safety.helpers.FileHelper.JPEG_TYPE;
import static br.org.sesisc.smart.safety.helpers.FileHelper.PNG_TYPE;

@RestController
@RequestMapping("/workers")
public class WorkerController {


    @Autowired
    WorkerRepository repository;

    @Autowired
    private StorageService storageService;

    @Autowired
    private ObjectMapper objectMapper;


    @GetMapping()
    public ResponseEntity<?> index() {
        Set<Worker> workers = repository.findByActivatedTrue();
        return SuccessResponse.handle(
                new String[] { "workers" },
                new Object[] { workers },
                HttpStatus.OK
        );
    }

    @GetMapping("/cpf/{cpf}")
    public ResponseEntity<?> findByCpf(@PathVariable("cpf") String cpf) {

        Worker worker = repository.findByCpfAndActivatedTrue(cpf);
        return SuccessResponse.handle(
                new String[] { "worker" },
                new Object[] { worker },
                HttpStatus.OK
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> show(@PathVariable("id") long id) {
        Worker worker = repository.findByIdAndActivatedTrue(id);

        if (worker != null) {
            return SuccessResponse.handle(
                    new String[] { "worker" },
                    new Object[] { worker },
                    HttpStatus.OK
            );
        }
        else {
            return ErrorResponse.handle(
                    new String[] {"Trabalhador não encontrado."},
                    Worker.class,
                    HttpStatus.NOT_FOUND
            );
        }
    }

    @PostMapping
    public ResponseEntity<?> create(@RequestBody @Valid final Worker cParams, Errors errors) {
        if (errors.hasErrors()) {
            return ErrorResponse.handle(errors, HttpStatus.UNPROCESSABLE_ENTITY);
        }

        Worker worker = repository.save(cParams);

        return SuccessResponse.handle(
                new String[] {"worker"},
                new Object[] {worker},
                HttpStatus.CREATED
        );
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> destroy(@PathVariable("id") long id) {
        Worker worker = repository.findOne(id);

        if (worker != null) {
            worker.setActivated(false);
            repository.save(worker);

            return SuccessResponse.handle(HttpStatus.OK);
        }

        return ErrorResponse.handle(
                new String[] {"Trabalhador não encontrado."},
                Worker.class,
                HttpStatus.NOT_FOUND
        );
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<?> update(@PathVariable("id") long id, HttpServletRequest request) throws IOException {

        Worker worker = repository.findOne(id);

        if (worker != null) {
            Worker updateWorker = objectMapper.readerForUpdating(worker).readValue(request.getReader());

            repository.save(updateWorker);

            return SuccessResponse.handle(
                    new String[] {"worker"},
                    new Object[] {worker},
                    HttpStatus.ACCEPTED
            );
        } else {
            return ErrorResponse.handle(
                    new String[] {"Trabalhador não encontrado."},
                    Worker.class,
                    HttpStatus.NOT_FOUND
            );
        }
    }


    @PostMapping("/photoProfile/{id}")
    public ResponseEntity<?> uploadFile(
            @PathVariable("id") long id,
            @RequestParam("file") MultipartFile file
    ) {
        Worker worker = repository.findOne(id);

        if (worker != null && file != null) {
            if(file.getContentType().equals(PNG_TYPE) || file.getContentType().equals(JPEG_TYPE)) {
                String fileName = storageService.store(file);
                worker.setPhotoFilename(fileName);
                worker.setPhotoUrl(String.format("/workers/photoProfile/%d", id));

                repository.save(worker);

                return SuccessResponse.handle(
                        new String[]{"workers"},
                        new Object[]{worker},
                        HttpStatus.OK
                );
            } else {
                return ErrorResponse.handle(
                        new String[] {"Arquivo incompatível."},
                        Worker.class,
                        HttpStatus.UNSUPPORTED_MEDIA_TYPE
                );
            }
        }

        return ErrorResponse.handle(
                new String[] {"Trabalhador não encontrado."},
                Worker.class,
                HttpStatus.NOT_FOUND
        );
    }

    @GetMapping("/photoProfile/{id}")
    public ResponseEntity<?> loadFile(
            @PathVariable("id") long id
    ) {
        Worker worker = repository.findOne(id);


        if (worker != null){
            String fileName = worker.getPhotoFilename();
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
                            Worker.class,
                            HttpStatus.NOT_FOUND
                    );
                }
            } else {
                return ErrorResponse.handle(
                        new String[] {"Arquivo não encontrado."},
                        Worker.class,
                        HttpStatus.NOT_FOUND
                );
            }
        }

        return ErrorResponse.handle(
                new String[] {"Construção não encontrada."},
                Worker.class,
                HttpStatus.NOT_FOUND
        );

    }
}
