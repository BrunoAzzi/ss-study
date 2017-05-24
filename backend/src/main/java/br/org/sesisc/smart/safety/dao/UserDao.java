package br.org.sesisc.smart.safety.dao;

import br.org.sesisc.smart.safety.models.User;

import java.util.List;

public interface UserDao {
    User create(final User user);
    void update(final long id, final String[] properties, final Object[] values);
    List<User> findAll();
    Object findById(final long id);
    User findBy(final String[] properties, final Object[] values);
}
