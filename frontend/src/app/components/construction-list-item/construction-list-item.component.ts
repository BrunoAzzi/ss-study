import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Construction } from "../../models/construction.model";

@Component({
    selector: 'construction-list-item',
    templateUrl: './construction-list-item.template.html',
    styleUrls: ['./construction-list-item.component.scss']
})
export class ConstructionListItemComponent {
    
    @Input() constructionSite: Construction;
    @Output() toEdit : EventEmitter<Construction> = new EventEmitter();
    
    status: any = {};
    statusIcon: any = "";

    ngOnInit() {
        switch (this.constructionSite.status) {
            case "finalizada":
                this.statusIcon = "check";
                break;
            case "paralisada":
                this.statusIcon = "remove";
                break;
            case "em andamento":
                this.statusIcon = false;
                break;
        }

        this.status = {
            "success": this.constructionSite.status == "finalizada",
            "warn": this.constructionSite.status == "em andamento",
            "danger": this.constructionSite.status == "paralisada"
        }
    }


}
