package br.org.sesisc.smart.safety.repositories;

import br.org.sesisc.smart.safety.models.Manager;
import java.util.List;

public interface ManagerRepository {
    Manager create(final Manager manager);
    void update(final long id, final String[] properties, final Object[] values);
    List<Manager> findAll();
    Object findById(final long id);
    Manager findBy(final String[] properties, final Object[] values);
}
