package br.org.sesisc.smart.safety.repositories;

import br.org.sesisc.smart.safety.models.Responsible;
import java.util.List;

public interface ResponsibleRepository {
    Responsible create(final Responsible responsible);
    void update(final long id, String type, final String[] properties, final Object[] values);
    List<Responsible> findAll();
    Object findById(final long id);
    Responsible findBy(final String[] properties, final Object[] values);
}
