import {Component, Input, OnInit} from '@angular/core';

const values = {
    'finalizada': { statusIcon: 'finalizadas', statusClass: 'success'},
    'paralisada': { statusIcon: 'paralizadas', statusClass: 'danger'},
    'em andamento': { statusIcon: 'andamento', statusClass: 'warn'}
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
        this.statusIcon = values[this.status].statusIcon;
        this.statusClass = values[this.status].statusClass;
    }

}

