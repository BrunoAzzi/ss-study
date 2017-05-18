import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MdSidenavModule, MdListModule, MdIconModule } from '@angular/material';
import { NotificationSidenavService } from "../../../services/notification-sidenav.service";
import { NotificationMenuComponent } from "./notification-menu/notification-menu.component";
import { NotificationComponent } from "./notification/notification.component";

import {
    NotificationSidenavContainerComponent,
    ContentToolbarComponent,
    MainContentComponent
} from './notification-content-container/notification-content-container.component';

@NgModule({
    imports: [
        FlexLayoutModule,
        MdSidenavModule,
        MdListModule,
        MdIconModule,
        CommonModule
    ],
    exports: [
        NotificationSidenavContainerComponent,
        ContentToolbarComponent,
        MainContentComponent
    ],
    declarations: [
        NotificationSidenavContainerComponent,
        ContentToolbarComponent,
        MainContentComponent,
        NotificationMenuComponent,
        NotificationComponent
    ],
    providers: [
        NotificationSidenavService
    ]
})
export class NotificationSidenavContainerModule {}

export * from './notification-content-container/notification-content-container.component';
