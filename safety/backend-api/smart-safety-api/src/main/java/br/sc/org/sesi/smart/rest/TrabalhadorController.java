package br.sc.org.sesi.smart.rest;

import br.sc.org.sesi.smart.model.Trabalhador;
import br.sc.org.sesi.smart.repository.TrabalhadorRepository;
import br.sc.org.sesi.smart.rest.exceptions.UnmatchedObjectException;
import br.sc.org.sesi.smart.service.TrabalhadorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/trabalhador")
public class TrabalhadorController {

    @Autowired
    TrabalhadorService funcionarioService;

    @Autowired
    TrabalhadorRepository funcionarioRepository;

    @Autowired
    public TrabalhadorController(TrabalhadorService funcionarioService, TrabalhadorRepository funcionarioRepository) {
        this.funcionarioRepository = funcionarioRepository;
        this.funcionarioService = funcionarioService;
    }

    @RequestMapping(value = "/cargo/{cargoId}", method = RequestMethod.GET)
    @ResponseBody
    public Iterable<Trabalhador> listar(@PathVariable Long cargoId) {
        return  funcionarioService.listAllByCargo(cargoId);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    @ResponseBody
    public Trabalhador findById(@PathVariable Long id) {
        return  funcionarioRepository.findOne(id);
    }

    @RequestMapping(method = RequestMethod.GET)
    @ResponseBody
    public Iterable<Trabalhador> findAll() {
        return  funcionarioRepository.findAll();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    @ResponseBody
    public Trabalhador update(@PathVariable Long id, @RequestBody Trabalhador trabalhador) {
        if (id != trabalhador.getId()) {
            throw new UnmatchedObjectException("Id does not match object id.");
        }
        return  funcionarioRepository.save(trabalhador);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable Long id) {
        funcionarioRepository.delete(id);
    }

    @RequestMapping(method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED)
    public Trabalhador create(@RequestBody Trabalhador trabalhador) {
        return funcionarioRepository.save(trabalhador);
    }

}
