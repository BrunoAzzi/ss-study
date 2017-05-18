import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class NotificationService {
    private notificationsUrl = "api/notifications";

    constructor(private http: Http) { }

    getNotifications() {
        return this.http.get(this.notificationsUrl).map( response => response.json().data )
    }

}
