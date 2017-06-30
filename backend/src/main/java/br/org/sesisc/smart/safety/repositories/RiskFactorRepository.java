package br.org.sesisc.smart.safety.repositories;

import br.org.sesisc.smart.safety.models.RiskFactor;
import org.springframework.data.repository.CrudRepository;

import java.util.Set;

public interface RiskFactorRepository extends CrudRepository<RiskFactor, Long> {
    Set<RiskFactor> findByRiskTypeId(long riskTypeId);
}
