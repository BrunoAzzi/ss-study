package br.org.sesisc.smart.safety.mailer;

import br.org.sesisc.smart.safety.models.User;
import com.google.common.base.Charsets;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.MailSender;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Service;
import org.springframework.web.util.UriUtils;

@Service("messageMailer")
public class MessageMailerImpl implements MessageMailer {

    @Autowired
    MailSender mailSender;

    @Value("${smart.safety.recover_password_url}")
    private String recoverPasswordUrl;

    @Value("${smart.safety.email_from")
    private String emailFrom;

    public boolean sendRecoverPassword(final User user) {
        SimpleMailMessage message = new SimpleMailMessage();

        try {
            final String encodedToken = UriUtils.encode(user.getRecoverPassToken(), Charsets.UTF_8.toString());
            final String link = String.format("%s?token=%s", recoverPasswordUrl, encodedToken);
            final String text = String.format("Olá,\n\nFoi solicitado uma recuperação de senha para o sistema SmartSafety, caso não tenha solicitado favor ignorar esse email.\nAcesse o link para trocar sua senha: %s.\n\n Atenciosamente,", link);
            message.setText(text);
            message.setSubject("[SmartSafety] Recuperação de senha");
            message.setTo(user.getEmail());
            message.setFrom(emailFrom);
            mailSender.send(message);
            return true;
        } catch (Exception e) {
            System.err.println(e.getMessage());
            return false;
        }
    }

}
