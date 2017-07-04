package br.org.sesisc.smart.auth.repositories;

import br.org.sesisc.smart.auth.models.Tenant;
import org.springframework.data.repository.CrudRepository;
public interface TenantRepository extends CrudRepository<Tenant, Long> {

    Tenant findByFrontendHostAndActiveTrue(String host);

}