package br.org.sesisc.smart.safety.repositories;

import br.org.sesisc.smart.safety.models.Cbo;
import org.springframework.data.repository.CrudRepository;

import java.util.Set;

public interface CboRepository extends CrudRepository<Cbo, Long> {
    Set<Cbo> findAll();
    Set<Cbo> findByCode(String code);
}