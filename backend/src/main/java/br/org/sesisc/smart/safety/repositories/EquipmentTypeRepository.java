package br.org.sesisc.smart.safety.repositories;

import br.org.sesisc.smart.safety.models.EquipmentType;
import org.springframework.data.repository.CrudRepository;

import java.util.Set;

public interface EquipmentTypeRepository extends CrudRepository<EquipmentType, Long> {
    Set<EquipmentType> findByEquipmentCategoryId(long equipmentCategoryId);
}