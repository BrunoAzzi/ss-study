import { Component, Input } from '@angular/core';
import { Construction } from "../../models/construction.model";

@Component({
    selector: 'card-construction-site',
    templateUrl: './card-construction-site.template.html',
    styleUrls: ['./card-construction-site.component.scss']
})
export class CardConstructionDetailComponent {
    @Input() constructionSite: Construction;
}
