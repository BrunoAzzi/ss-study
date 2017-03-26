package br.sc.org.sesi.smart.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Calendar;

/**
 * Created by Alex on 22/03/2017.
 */
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Trabalhador  implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length=100, nullable = false)
    private String nome;

    @Column(length=11)
    private String cpf;

    @Column(nullable = false)
    private Boolean terceirizado;

    @Column
    private Boolean contratadoPessoaFisica;

    @Column @Temporal(TemporalType.DATE)
    private Calendar dataNascimento;

    @Column(length=10)
    private String estadoCivil;

    @Column(length=1, nullable = false)
    private Character sexo;

    @Column
    private Long quantidadeFilhos;

    @Column(nullable = false)
    private Boolean necessidadesEspeciais;

    @Column(length=20)
    private String nit;

    @Column(length=20)
    private String matricula;

    @Column(length=20)
    private String ctps;

    @Column(length=100)
    private String nomeMae;

    @Column(length=20)
    private String telefoneContato;

    @Column(length=50)
    private String nomeContato;

    @ManyToOne
    private Funcao funcao;

    @Column(length=100)
    private String infoASO;

    @Column(length=20)
    private String situacao;
}
