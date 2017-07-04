package br.org.sesisc.smart.auth.controllers;

import br.org.sesisc.smart.auth.controllers.custom.params.PasswordUpdateParam;
import br.org.sesisc.smart.auth.controllers.custom.params.RecoverParam;
import br.org.sesisc.smart.auth.helpers.TokenHelper;
import br.org.sesisc.smart.auth.mailer.MessageMailer;
import br.org.sesisc.smart.auth.models.User;
import br.org.sesisc.smart.auth.repositories.UserRepository;
import br.org.sesisc.smart.auth.responses.ErrorResponse;
import br.org.sesisc.smart.auth.responses.SuccessResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/password")
public class PasswordController {

    @Autowired
    private UserRepository repository;

    @Autowired
    private MessageMailer mailer;

    @PostMapping("/recover")
    public ResponseEntity<?> recover(@Valid @RequestBody RecoverParam params, Errors errors) {
        if (errors.hasErrors()) {
            return ErrorResponse.handle(errors, HttpStatus.UNPROCESSABLE_ENTITY);
        }

        User user = repository.findByEmail(params.getEmail());
        if (user != null) {
            final String token = TokenHelper.getInstance().generateExpirableToken(String.format("%d", user.getId()));
            user.setRecoverPassToken(token);
            repository.save(user);
            boolean sent = mailer.sendRecoverPassword(user);
            if(!sent) {
                return ErrorResponse.handle(
                        new String[] { "Não foi possivel enviar email, favor tentar novamente mais tarde!\nCaso problema persista entre em contato pelo email suporte@smartsafety.com.br" },
                        User.class,
                        HttpStatus.UNPROCESSABLE_ENTITY
                );
            }
        }

        return SuccessResponse.handle(HttpStatus.CREATED);
    }

    @PostMapping("/update")
    public ResponseEntity<?> update(@Valid @RequestBody PasswordUpdateParam params, Errors errors) {
        if (errors.hasErrors()) {
            return ErrorResponse.handle(errors, HttpStatus.UNPROCESSABLE_ENTITY);
        }

        User user = repository.findByRecoverPassToken(params.getToken());
        if (user != null) {
            if (TokenHelper.getInstance().isValidExpirableToken(String.format("%d", user.getId()), user.getRecoverPassToken())) {
                user.digestPassword(params.getPassword());
                user.setToken(TokenHelper.getInstance().generateToken());
                repository.save(user);

                return SuccessResponse.handle(
                        new String[] {"user"},
                        new Object[] {user},
                        HttpStatus.OK
                );
            }
        }

        return ErrorResponse.handle(
                new String[] { "Token expirado ou inválido, favor repetir o processo." },
                User.class,
                HttpStatus.UNAUTHORIZED
        );
    }



}
