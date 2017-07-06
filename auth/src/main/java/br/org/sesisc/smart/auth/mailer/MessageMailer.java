package br.org.sesisc.smart.auth.mailer;

import br.org.sesisc.smart.auth.models.User;

public interface MessageMailer {

    public boolean sendRecoverPassword(final User user);

}
