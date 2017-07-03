package br.org.sesisc.smart.safety.repositories;

import br.org.sesisc.smart.safety.models.Aso;
import org.springframework.data.repository.CrudRepository;

import java.util.Set;

public interface AsoRepository extends CrudRepository<Aso, Long> {
    Set<Aso> findAll();

}
