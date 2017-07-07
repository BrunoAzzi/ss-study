package br.org.sesisc.smart.safety.repositories;

import br.org.sesisc.smart.safety.models.Qualification;
import org.springframework.data.repository.CrudRepository;

import java.util.Set;

public interface QualificationsRepository extends CrudRepository<Qualification, Long> {
    Set<Qualification> findAll();
}
