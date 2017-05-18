import { Component, OnInit, Input } from '@angular/core';
import { Notification } from "../../../../mocks/notification/notification";
import { NotificationType } from "../../../../mocks/notification-type/notification-type";

@Component({
    selector: 'notification',
    templateUrl: 'notification.template.html',
    styleUrls: ['./notification.component.scss'],
})

export class NotificationComponent {
    @Input() notification: Notification;

    constructor() { }

    getNotificationType(notificationType: NotificationType) {
        if (notificationType.label == "acidentes") { return "notification-acidente"; }
        if (notificationType.label == "incidentes") { return "notification-incidente"; }
        if (notificationType.label == "não conformidades") { return "notification-nao-conformidade"; }
        if (notificationType.label == "fiscalizações") { return "notification-fiscalizacao"; }
        return "";
    }
}
