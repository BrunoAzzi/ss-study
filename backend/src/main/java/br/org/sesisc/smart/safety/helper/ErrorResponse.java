package br.org.sesisc.smart.safety.helper;

import br.org.sesisc.smart.safety.models.ErrorMessage;
import org.springframework.validation.Errors;
import org.springframework.validation.FieldError;
import org.springframework.validation.ObjectError;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class ErrorResponse {

    public static HashMap<String, List<ErrorMessage>> handle(Errors e) {
        final List<ErrorMessage> errors = new ArrayList<ErrorMessage>();

        for (final FieldError error : e.getFieldErrors()) {
            errors.add(new ErrorMessage(error.getField(), "field", error.getDefaultMessage()));
        }

        for (final ObjectError error : e.getGlobalErrors()) {
            errors.add(new ErrorMessage(error.getObjectName(), "global", error.getDefaultMessage()));
        }

        HashMap<String, List<ErrorMessage>> result = new HashMap<String, List<ErrorMessage>>();
        result.put("errors", errors);

        return result;
    }

}
