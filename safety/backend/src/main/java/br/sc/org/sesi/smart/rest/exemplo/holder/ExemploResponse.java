package br.sc.org.sesi.smart.rest.exemplo.holder;

import java.io.Serializable;
import java.util.List;

/**
 * Created by Igor on 4/6/2016.
 */
public class ExemploResponse implements Serializable {

    private boolean success;

    private String resposta;

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public String getResposta() {
        return resposta;
    }

    public void setResposta(String resposta) {
        this.resposta = resposta;
    }
}
