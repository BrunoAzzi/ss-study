package br.org.sesisc.smart.auth.controllers;

import br.org.sesisc.smart.auth.helpers.TokenHelper;
import br.org.sesisc.smart.auth.models.Tenant;
import br.org.sesisc.smart.auth.models.User;
import br.org.sesisc.smart.auth.repositories.TenantRepository;
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

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.net.MalformedURLException;
import java.net.URL;

@RestController
@RequestMapping("/sessions")
public class SessionController {

    @Autowired
    private UserRepository repository;

    @Autowired
    private TenantRepository tenantRepository;

    @PostMapping
    public ResponseEntity<?> create(@Valid @RequestBody final User params, Errors errors, HttpServletRequest request) {
        if (errors.hasErrors()) {
            return ErrorResponse.handle(errors, HttpStatus.UNPROCESSABLE_ENTITY);
        }

        User user = repository.findByEmail(params.getEmail());
        if (user != null && user.authenticate(params.getPassword())) {
            user.setToken(TokenHelper.getInstance().generateToken());
            repository.save(user);

            URL requestUrl = null;
            try {
                requestUrl = new URL(request.getRequestURL().toString());
                Tenant tenant = tenantRepository.findByFrontendHostAndActiveTrue(requestUrl.getHost());
                if (tenant != null) {
                    return SuccessResponse.handle(
                            new String[] {"user", "tenant"},
                            new Object[] {user, tenant},
                            HttpStatus.OK
                    );
                }
            } catch (MalformedURLException e) {
                e.printStackTrace();
            }
        }

        return ErrorResponse.handle(
                new String[] { "Usuario e/ou senha inválido!" },
                User.class,
                HttpStatus.UNPROCESSABLE_ENTITY
        );
    }
}
