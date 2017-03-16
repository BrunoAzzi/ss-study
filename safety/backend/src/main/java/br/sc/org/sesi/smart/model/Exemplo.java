package br.sc.org.sesi.smart.model;

import java.io.Serializable;

/**
 * Created by Igor on 2/13/2017.
 */
public class Exemplo implements Serializable{

    private int codExemplo;
    private String dsExemplo;

    public int getCodExemplo() {
        return codExemplo;
    }

    public void setCodExemplo(int codExemplo) {
        this.codExemplo = codExemplo;
    }

    public String getDsExemplo() {
        return dsExemplo;
    }

    public void setDsExemplo(String dsExemplo) {
        this.dsExemplo = dsExemplo;
    }
}
