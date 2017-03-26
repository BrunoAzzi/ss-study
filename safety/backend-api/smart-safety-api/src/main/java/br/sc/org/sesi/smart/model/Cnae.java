package br.sc.org.sesi.smart.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;

/**
 * Created by Alex on 22/03/2017.
 */
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Cnae implements Serializable {

    @Id
    @GeneratedValue(strategy = javax.persistence.GenerationType.IDENTITY)
    private Long id;

    @Column(length=10, nullable = false)
    private String codigo;

    @Column(length=200, nullable = false)
    private String descricao;
}
