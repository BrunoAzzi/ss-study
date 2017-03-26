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
public class Habilitacao implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private TipoHabilitacao tipoHabilitacao;

    @Column(nullable = false)
    private Boolean habilitado;

    @Column(nullable = false) @Temporal(TemporalType.DATE)
    private Calendar validade;

    @Column(length=10, nullable = false)
    private String periodicidade;

    @Column
    private String anexos;

}
