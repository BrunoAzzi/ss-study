import { Component } from '@angular/core';
import { SessionsService } from '../../services/sessions.service';
import { Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';


@Component({
    selector: 'login',
    templateUrl: 'login.template.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent { 
    model: any = {};
    loading = false;

    constructor(
        private sessionsService: SessionsService,
        private router: Router,
        public snackBar: MdSnackBar) {
        }

    login() {
        this.loading = true;
        this.sessionsService.login(this.model.email, this.model.password)
            .subscribe(
                data => {
                    this.router.navigate(["/"]);
                },
                error => {
                    this.showErrorBar(error);
                    this.loading = false;
                });
    }

    showErrorBar(error: string) {
    this.snackBar.open(error, "Ok", {
      duration: 3000
    });
  }
}