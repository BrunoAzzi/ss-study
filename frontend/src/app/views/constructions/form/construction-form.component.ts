import { Construction } from './../../../models/construction.model';
import { ConstructionsService } from './../../../services/constructions.service';
import { Component } from '@angular/core';

@Component({
    selector: 'construction-form',
    templateUrl: './construction-form.template.html',
    styleUrls: ['./construction-form.component.scss']
})
export class ConstructionFormComponent { 

    constructor(public service: ConstructionsService) { }

    onConstructionUpdated(construction: Construction) {
        this.service.saveConstruction(construction)
    }

}
