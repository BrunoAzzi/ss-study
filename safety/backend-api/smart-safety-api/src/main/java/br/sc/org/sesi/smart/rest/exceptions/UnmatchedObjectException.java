package br.sc.org.sesi.smart.rest.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value= HttpStatus.NOT_FOUND, reason="Id does not match object id.") // 404
public class UnmatchedObjectException extends RuntimeException {
    public UnmatchedObjectException(String mensagem) {
        super(mensagem);
    }
}
