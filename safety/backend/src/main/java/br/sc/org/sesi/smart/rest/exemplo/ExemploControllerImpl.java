package br.sc.org.sesi.smart.rest.exemplo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.sc.org.sesi.smart.rest.exemplo.holder.ExemploRequest;
import br.sc.org.sesi.smart.rest.exemplo.holder.ExemploResponse;
import br.sc.org.sesi.smart.root.dao.exemplo.ExemploDao;

/**
 * Created by Igor on 4/6/2016.
 */
@RestController
public class ExemploControllerImpl implements ExemploController {


    @Autowired
    private ExemploDao exemploDao;

    @Override
    @RequestMapping(value = "/exemplo", method = RequestMethod.POST)
    @Transactional
    public ExemploResponse postExemplo(@RequestBody ExemploRequest request) {
        ExemploResponse response = new ExemploResponse();
        response.setSuccess(true);
        response.setResposta(request.getInfo());
        return response;
    }
}
