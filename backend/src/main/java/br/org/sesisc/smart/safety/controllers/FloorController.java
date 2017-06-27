package br.org.sesisc.smart.safety.controllers;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/floors")
public class FloorController {

    @PostMapping("/{id}/marker")
    public void createMarker(@PathVariable("id") long id) {

    }
}
