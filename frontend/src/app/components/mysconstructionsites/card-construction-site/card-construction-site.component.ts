import { Component, Input } from '@angular/core';
import { ConstructionSite } from "../../../mocks/construction-site/construction-site";

@Component({
    selector: 'card-construction-site',
    templateUrl: './card-construction-site.template.html',
    styleUrls: ['./card-construction-site.component.scss']
})
export class CardConstructionDetailComponent {
    @Input() constructionSite: ConstructionSite;
}
