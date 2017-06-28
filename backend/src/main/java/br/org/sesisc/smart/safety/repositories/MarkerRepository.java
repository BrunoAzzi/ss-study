package br.org.sesisc.smart.safety.repositories;

import br.org.sesisc.smart.safety.models.Marker;
import org.springframework.data.repository.CrudRepository;

public interface MarkerRepository extends CrudRepository<Marker, Long> {
}
