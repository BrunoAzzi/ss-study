package br.org.sesisc.smart.safety.controllers;

import br.org.sesisc.smart.safety.helpers.FileHelper;
import br.org.sesisc.smart.safety.models.Floor;
import br.org.sesisc.smart.safety.models.Marker;
import br.org.sesisc.smart.safety.repositories.FloorRepository;
import br.org.sesisc.smart.safety.repositories.MarkerRepository;
import br.org.sesisc.smart.safety.responses.ErrorResponse;
import br.org.sesisc.smart.safety.responses.SuccessResponse;
import br.org.sesisc.smart.safety.service.StorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;

import static br.org.sesisc.smart.safety.helpers.FileHelper.JPEG_TYPE;
import static br.org.sesisc.smart.safety.helpers.FileHelper.PNG_TYPE;
import static br.org.sesisc.smart.safety.helpers.FileHelper.SVG_TYPE;

@RestController
@RequestMapping("/floors")
public class FloorController {

    @Autowired
    FloorRepository repository;

    @Autowired
    MarkerRepository markerRepository;

    @Autowired
    private StorageService storageService;

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

    @GetMapping("/{id}/blueprint")
    public ResponseEntity<?> loadFile(@PathVariable("id") long id) {
        Floor floor = repository.findOne(id);

        if (floor != null){
            String fileName = floor.getImageFileName();
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
                            Floor.class,
                            HttpStatus.NOT_FOUND
                    );
                }
            } else {
                return ErrorResponse.handle(
                        new String[] {"Arquivo não encontrado."},
                        Floor.class,
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

    @PostMapping("/{id}/blueprint")
    public ResponseEntity<?> uploadFile(
            @PathVariable("id") long id,
            @RequestParam("file") MultipartFile file
    ) {
        Floor floor = repository.findOne(id);

        if (floor != null && file != null) {
            String contentType = file.getContentType();
            if (contentType.equals(PNG_TYPE) || contentType.equals(JPEG_TYPE) || contentType.equals(SVG_TYPE)) {
                String fileName = storageService.store(file);

                floor.setImageUrl(String.format("/floors/%d/blueprint", id));
                floor.setImageFileName(fileName);

                repository.save(floor);

                return SuccessResponse.handle(
                        new String[]{"floor"},
                        new Object[]{floor},
                        HttpStatus.OK
                );
            } else {
                return ErrorResponse.handle(
                        new String[] {"Arquivo incompatível."},
                        Floor.class,
                        HttpStatus.UNSUPPORTED_MEDIA_TYPE
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
