package br.org.sesisc.smart.safety.mailer;

import br.org.sesisc.smart.safety.models.User;

public interface MessageMailer {

    public boolean sendRecoverPassword(final User user);

}
