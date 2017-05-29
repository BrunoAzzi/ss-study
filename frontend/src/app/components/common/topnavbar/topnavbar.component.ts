import { Component, Input } from '@angular/core';
import { NotificationSidenavService } from "../../../services/notification-sidenav.service";
import { SessionsService } from "../../../services/sessions.service";
import { Router } from '@angular/router';

@Component({
    selector: 'topnavbar',
    templateUrl: 'topnavbar.template.html',
    styleUrls: ['./topnavbar.component.scss'],
})
export class TopnavbarComponent {

    showNotification: boolean = false;

    @Input()
    set notification(v: boolean) {
        this.showNotification = this.coerceBooleanProperty(v);
    }

    constructor(private notificationSidenavService: NotificationSidenavService,
                private sessionsService: SessionsService,
                private router: Router) { }

    toggle() {
        this.notificationSidenavService.toggle();
    }

    coerceBooleanProperty(value: any): boolean {
        return value != null && `${value}` !== 'false';
    }

    logoutClicked(){
        this.sessionsService.logout();
        this.router.navigate(["/login"]);
    }

}
