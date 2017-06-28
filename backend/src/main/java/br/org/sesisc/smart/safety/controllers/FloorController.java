package br.org.sesisc.smart.safety.controllers;

import br.org.sesisc.smart.safety.models.Floor;
import br.org.sesisc.smart.safety.models.Marker;
import br.org.sesisc.smart.safety.repositories.FloorRepository;
import br.org.sesisc.smart.safety.repositories.MarkerRepository;
import br.org.sesisc.smart.safety.responses.ErrorResponse;
import br.org.sesisc.smart.safety.responses.SuccessResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/floors")
public class FloorController {

    @Autowired
    FloorRepository repository;

    @Autowired
    MarkerRepository markerRepository;

    @GetMapping("/{id}/markers")
    public ResponseEntity<?> getAllMarkers(@PathVariable("id") long id) {
        Floor floor = repository.findOne(id);

        if (floor != null) {
            return SuccessResponse.handle(
                    new String[] {"markers"},
                    new Object[] {floor.getMarkers()},
                    HttpStatus.OK
            );
        }

        return ErrorResponse.handle(
                new String[] {"Nível não encontrado."},
                Floor.class,
                HttpStatus.NOT_FOUND
        );
    }

    @PostMapping("/{id}/markers")
    public ResponseEntity<?> createMarker(
            @PathVariable("id") long id,
            @RequestBody @Valid Marker marker,
            Errors errors
    ) {
        if (errors.hasErrors()) {
            return ErrorResponse.handle(errors, HttpStatus.UNPROCESSABLE_ENTITY);
        }

        Floor floor = repository.findOne(id);

        if (floor != null) {
            floor.addMarker(marker);
            repository.save(floor);

            return SuccessResponse.handle(
                    new String[] {"floor"},
                    new Object[] {floor},
                    HttpStatus.OK
            );
        }

        return ErrorResponse.handle(
                new String[] {"Nível não encontrado."},
                Floor.class,
                HttpStatus.NOT_FOUND
        );
    }

    @DeleteMapping("/floor/{id}/markers/{markerId}")
    public ResponseEntity<?> removeMarker(@PathVariable("id") long id, @PathVariable("markerId") long markerId) {
        Floor floor = repository.findOne(id);

        if (floor != null) {
            Marker marker = markerRepository.findOne(markerId);

            if (marker != null) {
                floor.removeMarker(marker);
                repository.save(floor);
                markerRepository.delete(markerId);

                return SuccessResponse.handle(HttpStatus.OK);
            } else {
                return ErrorResponse.handle(
                        new String[] {"Marcador não encontrado."},
                        Marker.class,
                        HttpStatus.NOT_FOUND
                );
            }
        }

        return ErrorResponse.handle(
                new String[] {"Nível não encontrado."},
                Floor.class,
                HttpStatus.NOT_FOUND
        );
    }
}
