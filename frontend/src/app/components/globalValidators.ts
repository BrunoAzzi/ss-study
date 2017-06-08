import { FormControl } from '@angular/forms';

export class GlobalValidators {

    static cpf(control: FormControl) {
        if (control.value == '') { return null; }
        var valid = seecpf(control.value);
        return valid ? null : { cpf: true };
    }

    static onlytext(control: FormControl) {
        if (control.value == '') { return null; }
        var regEx = /[a-zA-Z]+$/g;
        var valid = regEx.test(control.value);
        return valid ? null : { onlytext: true };
    }

    static onlyPositiveNumbers(control: FormControl) {
        var regEx = /\d+/g;
        if (control.value == '') { return null; }
        let numero = Number(control.value);
        var valid = regEx.test(control.value);
        if ((valid) && (numero >= 0)) {
            return null;
        }
        return { onlyPositiveNumbers: true };
    }

    static email(control: FormControl) {
        if (control.value == '') { return null; }
        var regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var valid = regEx.test(control.value);
        return valid ? null : { email: true };
    }
}


function eliminateInvalidCPFS(cpf) {
    if (cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999")
        return false;
}

function validateCPF(cpf) {
    cpf = String(cpf);
    let add = 0;
    for (let i = 0; i < 9; i++)
        add += parseInt(cpf.charAt(i)) * (10 - i);
    let rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(9)))
        return false;
    add = 0;
    for (let i = 0; i < 10; i++)
        add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(10)))
        return false;
    return true;
}

function cleanCPF(cpf) {
    return cpf.replace(/[^\d]+/g, '');
}

function seecpf(cpf) {
    cpf = String(cpf);
    cpf = cleanCPF(cpf);
    if (cpf == '') return false;
    if (eliminateInvalidCPFS(cpf) == false) return false;
    return validateCPF(cpf);
}
