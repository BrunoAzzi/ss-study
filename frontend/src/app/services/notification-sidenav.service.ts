import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class NotificationSidenavService {
    private dataObs$ = new Subject<boolean>();
    private state = false;

    isOpen() {
        return this.dataObs$;
    }

    close() {
        this.state = false;
        this.dataObs$.next(this.state);
    }

    toggle() {
        this.state = !this.state;
        this.dataObs$.next(this.state);
    }
}
