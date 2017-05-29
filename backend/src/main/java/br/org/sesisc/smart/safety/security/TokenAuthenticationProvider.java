package br.org.sesisc.smart.safety.security;

import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.preauth.PreAuthenticatedAuthenticationToken;

public class TokenAuthenticationProvider implements AuthenticationProvider{

    private TokenCustomService tokenService;

    public TokenAuthenticationProvider(TokenCustomService tokenService) {
        this.tokenService = tokenService;
    }

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        String token = authentication.getPrincipal().toString();
        if (token.isEmpty()) {
            throw new BadCredentialsException("Invalid token");
        } else if (!tokenService.contains(token, authentication)) {
            throw new BadCredentialsException("Invalid token or token expired");
        }
        return tokenService.retrieve(token);
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return authentication.equals(PreAuthenticatedAuthenticationToken.class);
    }
}
