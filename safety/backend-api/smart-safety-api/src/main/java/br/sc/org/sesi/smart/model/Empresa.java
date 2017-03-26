package br.sc.org.sesi.smart.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by Alex on 22/03/2017.
 */
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Empresa implements Serializable {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length=100, nullable = false)
    private String razaoSocial;

    @Column(length=100)
    private String nomeFantasia;

    @Column(length=14)
    private String cnpj;

    @Column(nullable = false)
    private Boolean clienteSesi;

    @Column(nullable = false)
    private Boolean possuiSESMT;

    @ManyToOne
    private Cnae cnae;

    @Column(length=100)
    private String endereco;

    @Column(length=20)
    private String complemento;

    @Column(length=50)
    private String bairro;

    @Column(length=50)
    private String cidade;

    @Column(length=2)
    private String uf;

    @Column(length=20)
    private String pais;

    @Column(length=10)
    private String cep;

    @Column(length=20)
    private String telefone;

    @Column(length=100)
    private String website;

    @Column(length=50)
    private String responsavelDiretor;

    @Column(length=50)
    private String responsavelGestor;

    @Column(length=50)
    private String responsavelRh;

    @Column(length=50)
    private String responsavelComercial;

    @Column(length=50)
    private String responsavelSST;

    @Column(length=20)
    private String telefoneDiretor;

    @Column(length=20)
    private String telefoneGestor;

    @Column(length=20)
    private String telefoneRh;

    @Column(length=20)
    private String telefoneComercial;

    @Column(length=20)
    private String telefoneSST;

    @Column
    private Long quantidadeFuncionarios;

    @Column(length=10)
    private String porteEmpresa;
}
