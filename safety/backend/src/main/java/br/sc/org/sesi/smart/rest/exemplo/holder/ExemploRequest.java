package br.sc.org.sesi.smart.rest.exemplo.holder;

import java.io.Serializable;

/**
 * Created by Igor on 4/6/2016.
 */
public class ExemploRequest implements Serializable {
    private String info;


    public String getInfo() {
        return info;
    }

    public void setInfo(String info) {
        this.info = info;
    }
}
