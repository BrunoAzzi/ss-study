import { Component, Input } from '@angular/core';
import { NotificationSidenavService } from "../../../services/notification-sidenav.service";

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

    constructor(private notificationSidenavService: NotificationSidenavService) { }

    toggle() {
        this.notificationSidenavService.toggle();
    }

    coerceBooleanProperty(value: any): boolean {
        return value != null && `${value}` !== 'false';
    }

}
