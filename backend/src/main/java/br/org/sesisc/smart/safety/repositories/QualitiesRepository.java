package br.org.sesisc.smart.safety.repositories;

import br.org.sesisc.smart.safety.models.Certification;
import org.springframework.data.repository.CrudRepository;

import java.util.Set;

public interface QualitiesRepository extends CrudRepository<Certification, Long> {
    Set<Certification> findAll();

}