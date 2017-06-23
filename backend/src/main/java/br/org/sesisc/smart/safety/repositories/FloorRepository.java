package br.org.sesisc.smart.safety.repositories;

import br.org.sesisc.smart.safety.models.Floor;

import java.util.List;

public interface FloorRepository {
    Floor create(final Floor floor);
    void update(final long id, final String[] properties, final Object[] values);
    List<Floor> findAll();
    Object findById(final long id);
    Floor findBy(final String[] properties, final Object[] values);
    List<Floor> where(final String[] properties, final Object[] values);
}
