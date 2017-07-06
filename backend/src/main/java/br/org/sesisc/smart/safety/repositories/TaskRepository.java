package br.org.sesisc.smart.safety.repositories;

import br.org.sesisc.smart.safety.models.Task;
import org.springframework.data.repository.CrudRepository;
import java.util.Set;

public interface TaskRepository extends CrudRepository<Task, Long> {
    Task findById(long id);
    Set<Task> findAll();
}
