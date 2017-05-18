package br.org.sesisc.smart.safety.validations;

import br.org.sesisc.smart.safety.models.User;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

public class UserValidation implements Validator {

    @Override
    public boolean supports(Class<?> klass) {
        return User.class.equals(klass);
    }

    @Override
    public void validate(Object obj, Errors errors) {
        User user = (User)obj;
        if(user.getEmail() == null || user.getEmail().trim().length() == 0) {
            errors.rejectValue("email", "email.empty");
        }
    }
}
