package br.org.sesisc.smart.safety.controllers;

import br.org.sesisc.smart.safety.models.EquipmentCategory;
import br.org.sesisc.smart.safety.models.EquipmentType;
import br.org.sesisc.smart.safety.repositories.EquipmentCategoryRepository;
import br.org.sesisc.smart.safety.repositories.EquipmentTypeRepository;
import br.org.sesisc.smart.safety.responses.ErrorResponse;
import br.org.sesisc.smart.safety.responses.SuccessResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Set;

@RestController
@RequestMapping("/equipment_categories")
public class EquipmentCategoryController {

    @Autowired
    EquipmentCategoryRepository repository;

    @Autowired
    EquipmentTypeRepository typeRepository;

    @GetMapping
    public ResponseEntity<?> index() {
        Set<EquipmentCategory> equipmentCategories = repository.findAll();

        return SuccessResponse.handle(
                new String[] {"equipment_categories"},
                new Object[] {equipmentCategories},
                HttpStatus.OK
        );
    }

    @GetMapping("/{id}/types")
    public ResponseEntity<?> getTypesById(@PathVariable("id") long id) {
        EquipmentCategory equipmentCategory = repository.findOne(id);
        if (equipmentCategory != null) {
            Set<EquipmentType> equipmentTypes = typeRepository.findByEquipmentCategoryId(id);

            return SuccessResponse.handle(
                    new String[] {"equipment_types"},
                    new Object[] {equipmentTypes},
                    HttpStatus.OK
            );
        } else {
            return ErrorResponse.handle(
                    new String[] {"Categoria não encontrada."},
                    EquipmentCategory.class,
                    HttpStatus.NOT_FOUND
            );
        }
    }

}
