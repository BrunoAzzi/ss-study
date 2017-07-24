package br.org.sesisc.smart.safety.repositories;

import br.org.sesisc.smart.safety.models.User;
import org.springframework.data.repository.CrudRepository;
import java.util.Set;

public interface UserRepository extends CrudRepository<User, Long> {
    Set<User> findAll();
    User findByEmail(String email);
    User findByToken(String token);
    User findByRecoverPassToken(String recoverPassToken);
}