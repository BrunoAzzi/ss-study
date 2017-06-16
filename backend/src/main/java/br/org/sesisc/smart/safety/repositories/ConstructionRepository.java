package br.org.sesisc.smart.safety.repositories;

import br.org.sesisc.smart.safety.models.Construction;

import java.util.List;

public interface ConstructionRepository {
    Construction create(final Construction construction);
    void update(final long id, final String[] properties, final Object[] values);
    Construction update(long id,Construction construction);
    List<Construction> findAll();
    Object findById(final long id);
    Construction findBy(final String[] properties, final Object[] values);
}