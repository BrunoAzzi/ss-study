package br.org.sesisc.smart.safety.repositories;

import br.org.sesisc.smart.safety.models.Worker;
import org.springframework.data.repository.CrudRepository;

import java.util.Set;

public interface WorkerRepository  extends CrudRepository<Worker, Long> {
    Set<Worker> findAll();
    Worker findByCpf(String cpf);
}
