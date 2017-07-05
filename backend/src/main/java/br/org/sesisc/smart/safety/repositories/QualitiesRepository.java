package br.org.sesisc.smart.safety.repositories;

import br.org.sesisc.smart.safety.models.Quality;
import org.springframework.data.repository.CrudRepository;

import java.util.Set;

public interface QualitiesRepository extends CrudRepository<Quality, Long> {
    Set<Quality> findAll();

}