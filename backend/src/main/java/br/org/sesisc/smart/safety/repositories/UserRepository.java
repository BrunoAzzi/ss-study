package br.org.sesisc.smart.safety.repositories;

import br.org.sesisc.smart.safety.models.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
    User findByEmail(String email);
    User findByToken(String token);
    User findByRecoverPassToken(String recoverPassToken);
}