package br.org.sesisc.smart.safety.repositories;

import br.org.sesisc.smart.safety.models.Company;
import org.springframework.data.repository.CrudRepository;

public interface CompanyRepository extends CrudRepository<Company, Long> {
}
