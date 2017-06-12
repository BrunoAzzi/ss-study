import { Component } from '@angular/core';
import { SessionsService } from '../../services/sessions.service';
import { Router } from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: 'login.template.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    model: any = {};
    loading = false;
    error = "";

    constructor(
        private sessionsService: SessionsService,
        private router: Router) {
	}

    login() {
        this.loading = true;
        this.sessionsService.login(this.model.email, this.model.password)
            .subscribe(
			data => {
				this.router.navigate(["/"]);
			},
			error => {
				this.showErrorBar(error.json().errors[0].message);
				this.loading = false;
			});
    }

    showErrorBar(error: string) {
        this.error = error;
    }
}
