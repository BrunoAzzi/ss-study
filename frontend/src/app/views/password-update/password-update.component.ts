import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

    constructor(
        private passwordService: PasswordService,
        private router: Router) {}

    updatePassword() {
        this.loading = true;
        this.passwordService.overwritePassword(this.model.password)
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

    get confirmationValid() { return (this.model.password === this.model.passwordConfirmation) }

    get diagnostic() { return JSON.stringify(this.model) }
}