package br.sc.org.sesi.smart.rest.admin.holder;

import java.io.Serializable;
import java.util.List;

/**
 * Created by Igor on 4/6/2016.
 */
public class LoginAdminResponse implements Serializable {

    private boolean success;

    private List<String> roles;

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public List<String> getRoles() {
        return roles;
    }

    public void setRoles(List<String> roles) {
        this.roles = roles;
    }
}
