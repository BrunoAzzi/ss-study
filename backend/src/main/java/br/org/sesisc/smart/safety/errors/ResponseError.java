package br.org.sesisc.smart.safety.errors;

import org.springframework.validation.Errors;
import org.springframework.validation.FieldError;
import org.springframework.validation.ObjectError;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class ResponseError {

    public static HashMap<String, List<MessageError>> handle(Errors e) {
        final List<MessageError> errors = new ArrayList<MessageError>();

        for (final FieldError error : e.getFieldErrors()) {
            errors.add(new MessageError(error.getField(), "field", error.getDefaultMessage()));
        }

        for (final ObjectError error : e.getGlobalErrors()) {
            errors.add(new MessageError(error.getObjectName(), "global", error.getDefaultMessage()));
        }

        HashMap<String, List<MessageError>> result = new HashMap<String, List<MessageError>>();
        result.put("errors", errors);

        return result;
    }

}
