import { Component, OnInit } from '@angular/core';
import { Notification } from "../../../../mocks/notification/notification";
import { NotificationService } from "../../../../services/notification.service";

@Component({
    selector: 'notification-menu',
    templateUrl: 'notification-menu.template.html',
    styleUrls: ['./notification-menu.component.scss'],
    providers: [NotificationService]
})
export class NotificationMenuComponent {
    notifications: Notification[]
    isNotReadNotifications: Boolean = false;
    numberOfNotReadNotifications: number = 0;

    constructor(private notificationService: NotificationService) { }

    getNotifications(): void {
        this.notificationService.getNotifications().subscribe(response => {
            this.notifications = response.sort( (a,b) => new Date (b.date).getTime() - new Date (a.date).getTime());

            this.notifications.forEach( notification => {
                if (!notification.isRead) {
                    this.isNotReadNotifications = true;
                    this.numberOfNotReadNotifications++;
                }
            });

        });
    }

    ngOnInit(): void {
        this.getNotifications();
    }
}
