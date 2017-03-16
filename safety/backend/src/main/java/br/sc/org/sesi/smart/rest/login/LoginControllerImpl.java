package br.sc.org.sesi.smart.rest.login;

import java.util.Arrays;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.sc.org.sesi.smart.rest.login.holder.LoginRequest;
import br.sc.org.sesi.smart.rest.login.holder.LoginResponse;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

/**
 * @see LoginController
 */
@RestController
public class LoginControllerImpl implements LoginController {

    private final static String SECRET_KEY = "sesi@health_SecretKey";
    private final Map<String, List<String>> usuariosTemp = new HashMap<>();

    public LoginControllerImpl() {
        usuariosTemp.put("admin", Arrays.asList("ROLE_EXEMPLO"));
    }

    @Override
    public LoginResponse login(@RequestBody LoginRequest login) throws ServletException {


        if (login.getLogin() == null || !login.getLogin().equalsIgnoreCase("admin")) {
            throw new ServletException("Login invalido");
        }

        LoginResponse response = new LoginResponse();
        response.setToken(Jwts.builder().setSubject(login.getLogin())
                .claim("roles", usuariosTemp.get(login.getLogin())).setIssuedAt(new Date())
                .signWith(SignatureAlgorithm.HS256, SECRET_KEY).compact());

        return response;
    }
}
