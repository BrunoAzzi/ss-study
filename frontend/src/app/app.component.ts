import { Component, HostListener } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
    selector:    'app-root',
    templateUrl: './app.component.html',
    styleUrls:   ['./app.component.scss']
})
export class AppComponent {

    constructor() {
        let actualDate = Date.parse(new Date().toString());
        let closeDate  = Date.parse(localStorage.closeDate);
        let oneMinute  = 60 * 1000;

        if (closeDate && (actualDate - closeDate) > oneMinute) {
            Cookie.delete('auth_token');
        }
    }

    @HostListener('window:unload', ['$event'])
    unloadHandler(event) {
        localStorage.closeDate = new Date().toString();
    }

}
