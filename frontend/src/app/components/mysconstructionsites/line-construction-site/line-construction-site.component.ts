import { Component, Input, OnInit } from '@angular/core';
import { ConstructionSite } from "../../../mocks/construction-site/construction-site";

@Component({
    selector: 'line-construction-site',
    templateUrl: './line-construction-site.template.html',
    styleUrls: ['./line-construction-site.component.scss']
})
export class LineConstructionSiteComponent {
    @Input() constructionSite: ConstructionSite;
    status: any = {};
    statusIcon: string = "";

    ngOnInit() {
        switch (this.constructionSite.status) {
            case "finalizada":
                this.statusIcon = "check";
                break;
            case "paralizada":
                this.statusIcon = "remove";
                break;
            case "em andamento":
                this.statusIcon = "check_circle";
                break;
        }

        this.status = {
            "success": this.constructionSite.status == "finalizada",
            "warn": this.constructionSite.status == "em andamento",
            "danger": this.constructionSite.status == "paralizada"
        }
    }
}
