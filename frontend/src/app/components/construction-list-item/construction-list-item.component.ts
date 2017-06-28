import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Construction } from "../../models/construction.model";

@Component({
    selector: 'construction-list-item',
    templateUrl: './construction-list-item.template.html',
    styleUrls: ['./construction-list-item.component.scss']
})
export class ConstructionListItemComponent {
    
    @Input() construction: Construction;
    @Output() toEdit : EventEmitter<Construction> = new EventEmitter();
    
    status: any = {};
    statusIcon: any = "";

    ngOnInit() {
        switch (this.construction.getStatus()) {
            case "FINISHED":
                this.statusIcon = "finalizadas";
                break;
            case "PAUSED":
                this.statusIcon = "paralizadas";
                break;
            case "IN_PROGRESS":
                this.statusIcon = "andamento";
                break;
        }

        this.status = {
            "success": this.construction.getStatus() == "FINISHED",
            "warn": this.construction.getStatus() == "IN_PROGRESS",
            "danger": this.construction.getStatus() == "PAUSED"
        }
    }


}
