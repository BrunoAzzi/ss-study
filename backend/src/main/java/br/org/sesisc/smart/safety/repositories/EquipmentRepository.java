package br.org.sesisc.smart.safety.repositories;

import br.org.sesisc.smart.safety.models.Equipment;
import org.springframework.data.repository.CrudRepository;

import java.util.Set;

public interface EquipmentRepository extends CrudRepository<Equipment, Long> {
        Set<Equipment> findAll();
}