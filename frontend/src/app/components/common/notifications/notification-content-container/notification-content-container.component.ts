import { Component, OnInit, ViewChild } from "@angular/core";
import { MdSidenav } from '@angular/material';
import { NotificationSidenavService } from "../../../../services/notification-sidenav.service";

@Component({
  selector: 'notification-sidenav-container',
  templateUrl: 'notification-content-container.template.html',
  styleUrls: ['./notification-content-container.component.scss']
})
export class NotificationSidenavContainerComponent {
    @ViewChild('notificationSidenav') notificationSidenav: MdSidenav;

    constructor(private notificationSidenavService: NotificationSidenavService) { }

    ngOnInit() {
        this.notificationSidenavService.close();
        this.notificationSidenavService.isOpen().subscribe( isOpen => {
            if (!isOpen) this.notificationSidenav.close();
            if (isOpen) this.notificationSidenav.open();
        });
    }

    closeSidenav() {
        this.notificationSidenavService.close();
    }

}

@Component({
  selector: 'content-toolbar',
  template: '<ng-content></ng-content>',
})
export class ContentToolbarComponent { }

@Component({
  selector: 'main-content',
  template: '<ng-content></ng-content>',
  styles: [':host { height: 100%; }']
})
export class MainContentComponent { }
