import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { PasswordService } from '../../services/password.service';


@Component({
    selector: 'password-update',
    templateUrl: 'password-update.template.html',
    styleUrls: ['./password-update.component.scss']
})
export class PasswordUpdateComponent { 
    model: any = {};
    loading = false;
    error = "";

    form: FormGroup;
    sub: any;
    token: string;

    constructor(
        private passwordService: PasswordService,
        private router: Router,
        private route: ActivatedRoute,
        private fb: FormBuilder) {
            
        this.form = fb.group({
            password: ['', Validators.required],
            passwordConfirmation: ['', Validators.required]
        }, { validator: matchingPasswords('password', 'passwordConfirmation')})
    }

    ngOnInit() {
        this.sub = this.route.queryParams.subscribe(params => {
            this.token = params['token']
        })
    }

    ngOnDestroy() {
        this.sub.unsubscribe()
    }

    updatePassword() {
        this.loading = true;
        this.passwordService.overwritePassword(this.form.get('password').value, this.token)
            .subscribe(
                data => {
                    this.router.navigate(["/"]);
                },
                error => {
                    this.showErrorBar(error.json().errors[0].message);
                    this.loading = false;
                }
            );
    }

    showErrorBar(error: string) {
        this.error = error;
    }

}

function matchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup): {[key: string]: any} => {
        let password = group.controls[passwordKey];
        let passwordConfirmation = group.controls[passwordConfirmationKey];

        if (password.value !== passwordConfirmation.value) {
            passwordConfirmation.setErrors({ mismatchedPasswords: true })
            return {
                mismatchedPasswords: true
            }
        }
    }
}