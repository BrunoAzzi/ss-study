package br.org.sesisc.smart.safety.repositories;

import br.org.sesisc.smart.safety.models.RiskType;
import org.springframework.data.repository.CrudRepository;

import java.util.Set;

public interface RiskTypeRepository extends CrudRepository<RiskType, Long> {
    Set<RiskType> findAll();
}