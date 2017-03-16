package br.sc.org.sesi.smart.rest.exemplo;

import br.sc.org.sesi.smart.rest.admin.holder.LoginAdminRequest;
import br.sc.org.sesi.smart.rest.admin.holder.LoginAdminResponse;
import br.sc.org.sesi.smart.rest.exemplo.holder.ExemploRequest;
import br.sc.org.sesi.smart.rest.exemplo.holder.ExemploResponse;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by Igor on 25/03/2015.
 */
public interface ExemploController {

    @RequestMapping(value = "/exemplo", method = RequestMethod.POST)
    @Transactional
    ExemploResponse postExemplo(@RequestBody ExemploRequest request);

}
