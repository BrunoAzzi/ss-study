package br.sc.org.sesi.smart.model;

import java.io.Serializable;

/**
 * Created by Igor on 26/03/2015.
 */
public class Userinfo implements Serializable {

    private Integer idUserinfo;
    private String email;


    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Integer getIdUserinfo() {
        return idUserinfo;
    }

    public void setIdUserinfo(Integer idUserinfo) {
        this.idUserinfo = idUserinfo;
    }
}
