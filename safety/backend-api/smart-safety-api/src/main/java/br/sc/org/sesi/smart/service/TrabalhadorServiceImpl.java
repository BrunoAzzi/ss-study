package br.sc.org.sesi.smart.service;

import br.sc.org.sesi.smart.model.Funcao;
import br.sc.org.sesi.smart.model.Trabalhador;
import br.sc.org.sesi.smart.repository.FuncaoRepository;
import br.sc.org.sesi.smart.repository.TrabalhadorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class TrabalhadorServiceImpl implements TrabalhadorService {

    @Autowired
    TrabalhadorRepository funcionarioRepository;

    @Autowired
    FuncaoRepository funcaoRepository;

    public TrabalhadorServiceImpl(TrabalhadorRepository funcionarioRepository, FuncaoRepository funcaoRepository) {
        this.funcionarioRepository = funcionarioRepository;
        this.funcaoRepository = funcaoRepository;
    }

    @Override
    public Iterable<Trabalhador> listAllByCargo(Long cargoId) {
        Funcao funcao = funcaoRepository.findOne(cargoId);
        return funcionarioRepository.findAllByFuncaoOrderByNome(funcao);
    }

    @Override
    public Iterable<Trabalhador> listarTrabalhadores() {

        return funcionarioRepository.findAll();
    }
}
