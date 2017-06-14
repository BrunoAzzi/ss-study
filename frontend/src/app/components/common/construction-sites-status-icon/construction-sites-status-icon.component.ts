import {Component, Input, OnInit} from '@angular/core';

const values = {
    'finalizada': {statusIcon: 'check', statusClass: 'success'},
    'paralisada': {statusIcon: 'remove', statusClass: 'danger'},
    'em andamento': {statusIcon: false, statusClass: 'warn'}
};

@Component({
    selector: 'construction-sites-status-icon',
    templateUrl: './construction-sites-status-icon.component.html',
    styleUrls: ['./construction-sites-status-icon.component.scss']
})
export class ConstructionSitesStatusIconComponent implements OnInit {

    @Input() status;
    statusIcon;
    statusClass;

    ngOnInit() {
        this.statusIcon = values[status].statusIcon;
        this.statusClass = values[status].statusClass;
    }

}

