package br.org.sesisc.smart.safety.controllers;

import br.org.sesisc.smart.safety.models.Worker;
import br.org.sesisc.smart.safety.repositories.WorkerRepository;
import br.org.sesisc.smart.safety.responses.ErrorResponse;
import br.org.sesisc.smart.safety.responses.SuccessResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import org.springframework.beans.factory.annotation.Autowired;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.io.IOException;
import java.util.Set;

/**
 * Created by tpeixoto on 27/06/17.
 */
@RestController
@RequestMapping("/workers")
public class WorkerController {

    @Autowired
    WorkerRepository repository;

    @Autowired
    private ObjectMapper objectMapper;


    @GetMapping()
    public ResponseEntity<?> index() {
        Set<Worker> workers = repository.findAll();
        return SuccessResponse.handle(
                new String[] { "workers" },
                new Object[] { workers },
                HttpStatus.OK
        );
    }

    @GetMapping("/cpf/{cpf}")
    public ResponseEntity<?> findByCpf(@PathVariable("cpf") String cpf) {

        Worker worker = repository.findByCpf(cpf);
        return SuccessResponse.handle(
                new String[] { "worker" },
                new Object[] { worker },
                HttpStatus.OK
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> show(@PathVariable("id") long id) {
        Worker worker = new Worker();

        return SuccessResponse.handle(
                new String[] { "worker" },
                new Object[] { worker },
                HttpStatus.OK
        );
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

    @PutMapping(value = "/{id}")
    public ResponseEntity<?> update(@PathVariable("id") long id, HttpServletRequest request) throws IOException {

        Worker worker = repository.findOne(id);

        if (worker != null) {
            Worker updatedConstruction = objectMapper.readerForUpdating(worker).readValue(request.getReader());

            repository.save(updatedConstruction);

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
}
