package br.org.sesisc.smart.safety.controllers;

import br.org.sesisc.smart.safety.helpers.FileHelper;
import br.org.sesisc.smart.safety.models.AttachmentFile;
import br.org.sesisc.smart.safety.models.Company;
import br.org.sesisc.smart.safety.models.Task;
import br.org.sesisc.smart.safety.repositories.AttachmentRepository;
import br.org.sesisc.smart.safety.repositories.TaskRepository;
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
@RequestMapping("/tasks")
public class TaskController {

    @Autowired
    TaskRepository repository;

    @Autowired
    AttachmentRepository attachRepository;

    @Autowired
    ObjectMapper objectMapper;

    @Autowired
    private StorageService storageService;

    @PostMapping
    public ResponseEntity<?> create(@RequestBody @Valid Task params, Errors errors) {
        if (errors.hasErrors()) {
            return ErrorResponse.handle(errors, HttpStatus.UNPROCESSABLE_ENTITY);
        }

        Task task = repository.save(params);

        return SuccessResponse.handle(
                new String[] {"task"},
                new Object[] {task},
                HttpStatus.CREATED
        );
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<?> update(@PathVariable("id") long id, HttpServletRequest request) throws IOException {

        Task task = repository.findOne(id);

        if (task != null) {
            Task updateCompany = objectMapper.readerForUpdating(task).readValue(request.getReader());

            repository.save(updateCompany);

            return SuccessResponse.handle(
                    new String[] {"task"},
                    new Object[] {task},
                    HttpStatus.ACCEPTED
            );
        } else {
            return ErrorResponse.handle(
                    new String[] {"Tarefa não encontrada."},
                    Task.class,
                    HttpStatus.NOT_FOUND
            );
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> show(@PathVariable("id") long id) {
        Task task = repository.findOne(id);
        if(task != null) {
            return SuccessResponse.handle(
                    new String[] { "task" },
                    new Object[] { task },
                    HttpStatus.OK
            );
        } else {
            return ErrorResponse.handle(
                    new String[] {"Tarefa não encontrada."},
                    Task.class,
                    HttpStatus.NOT_FOUND
            );
        }

    }

    @GetMapping()
    public ResponseEntity<?> index() {
        Set<Task> tasks = repository.findAll();
        return SuccessResponse.handle(
                new String[] { "tasks" },
                new Object[] { tasks },
                HttpStatus.OK
        );
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> removeTask(@PathVariable("id") long id) {

        Task task = repository.findOne(id);

        if (task != null) {
            repository.delete(id);
            return SuccessResponse.handle(HttpStatus.OK);
        } else {
            return ErrorResponse.handle(
                    new String[] {"Tarefa não encontrada."},
                    Task.class,
                    HttpStatus.NOT_FOUND
            );
        }
    }

    @PostMapping("/{id}/{type}")
    public ResponseEntity<?> uploadFile(
            @PathVariable("id") long id,
            @PathVariable("type") String type,
            @RequestParam("file") MultipartFile file
    ) {
        Task task = repository.findOne(id);

        if (task != null && file != null) {
            if (FileHelper.checkTypeAndFileContent(type, file.getContentType())) {
                String fileName = storageService.store(file);

                AttachmentFile attachmentFile =
                        new AttachmentFile(fileName,
                                String.format("/tasks/%d/%s", id, type),
                                type);
                task.getAttachmentFiles().add(attachmentFile);

                repository.save(task);

                return SuccessResponse.handle(
                        new String[]{"task"},
                        new Object[]{task},
                        HttpStatus.OK
                );
            } else {
                return ErrorResponse.handle(
                        new String[] {"Arquivo incompatível."},
                        Task.class,
                        HttpStatus.UNSUPPORTED_MEDIA_TYPE
                );
            }
        }

        return ErrorResponse.handle(
                new String[] {"Tarefa não encontrada."},
                Task.class,
                HttpStatus.NOT_FOUND
        );
    }

    @GetMapping("/{id}/attachments/{type}/{attach_id}")
    public ResponseEntity<?> loadFile(
            @PathVariable("id") long id,
            @PathVariable("type") String type,
            @PathVariable("attach_id") long attachId
    ) {
        Task task = repository.findOne(id);
        AttachmentFile attachmentFile = attachRepository.findOne(attachId);

        if (task != null && FileHelper.checkType(type)) {
            String fileName = attachmentFile.getFileName();
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

}
