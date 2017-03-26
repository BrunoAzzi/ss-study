package br.sc.org.sesi.smart.repository;

import br.sc.org.sesi.smart.model.Funcao;
import br.sc.org.sesi.smart.model.Trabalhador;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface TrabalhadorRepository extends CrudRepository<Trabalhador, Long> {

    Iterable<Trabalhador> findAllByFuncaoOrderByNome(Funcao funcao);

    @Query(value = "select max(id) from funcionario", nativeQuery = true)
    Integer findMaxId();

}
