import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { PasswordService } from '../../services/password.service';


@Component({
    selector: 'password-recovery',
    templateUrl: 'password-recovery.template.html',
    styleUrls: ['./password-recovery.component.scss']
})
export class PasswordRecoveryComponent { 
    model: any = {};
    loading = false;
    error = "";

    constructor(
        private passwordService: PasswordService,
        private router: Router) {}

    recoverPassword() {
        this.loading = true;
        this.passwordService.startRecover(this.model.email)
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