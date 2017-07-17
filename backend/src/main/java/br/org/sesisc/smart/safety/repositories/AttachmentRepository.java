package br.org.sesisc.smart.safety.repositories;

import br.org.sesisc.smart.safety.models.AttachmentFile;
import org.springframework.data.repository.CrudRepository;

public interface AttachmentRepository extends CrudRepository<AttachmentFile, Long> {

}
