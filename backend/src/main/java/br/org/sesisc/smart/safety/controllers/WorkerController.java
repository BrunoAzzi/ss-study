package br.org.sesisc.smart.safety.controllers;

import br.org.sesisc.smart.safety.models.Worker;
import br.org.sesisc.smart.safety.responses.SuccessResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Set;

/**
 * Created by tpeixoto on 27/06/17.
 */
@RestController
@RequestMapping("/workers")
public class WorkerController {

    @GetMapping
    public ResponseEntity<?> index() {
//        Set<Worker> workers = repository.findAll();
        ArrayList<Worker> workers = new ArrayList<>();

        return SuccessResponse.handle(
                new String[] { "workers" },
                new Object[] { workers },
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
}
