package br.sc.org.sesi.smart.service;

import br.sc.org.sesi.smart.model.Trabalhador;

public interface TrabalhadorService {

    Iterable<Trabalhador> listAllByCargo(Long cargoId);

    Iterable<Trabalhador> listarTrabalhadores();
}
