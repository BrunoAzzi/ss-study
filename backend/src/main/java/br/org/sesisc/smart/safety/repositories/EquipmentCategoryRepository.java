package br.org.sesisc.smart.safety.repositories;

import br.org.sesisc.smart.safety.models.EquipmentCategory;
import org.springframework.data.repository.CrudRepository;

import java.util.Set;

public interface EquipmentCategoryRepository extends CrudRepository<EquipmentCategory, Long> {
    Set<EquipmentCategory> findAll();
}