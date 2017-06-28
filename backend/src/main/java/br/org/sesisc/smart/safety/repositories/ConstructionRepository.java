package br.org.sesisc.smart.safety.repositories;

import br.org.sesisc.smart.safety.models.Construction;
import org.springframework.data.repository.CrudRepository;

import java.util.Set;

public interface ConstructionRepository extends CrudRepository<Construction, Long> {
    Set<Construction> findByActivated(boolean activated);
}
