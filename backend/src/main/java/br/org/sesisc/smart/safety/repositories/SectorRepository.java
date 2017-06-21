package br.org.sesisc.smart.safety.repositories;

import br.org.sesisc.smart.safety.models.Sector;

import java.util.List;

public interface SectorRepository {
    Sector create(final Sector sector);
    void update(final long id, final String[] properties, final Object[] values);
    List<Sector> findAll();
    Object findById(final long id);
    Sector findBy(final String[] properties, final Object[] values);
}
