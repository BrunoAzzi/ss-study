import { Construction } from './../../../models/construction.model';
import { ConstructionsService } from './../../../services/constructions.service';
import { Component } from '@angular/core';

@Component({
    selector: 'construction-form-c',
    templateUrl: './construction-form.template.html',
    styleUrls: ['./construction-form.container.scss']
})
export class ConstructionFormSmartComponent {

    constructor(public service: ConstructionsService) { }

    onConstructionUpdated(construction: Construction) {
        this.service.saveConstruction(construction).subscribe(
                data => {
                    console.log(data);
                },
                error => {
                    if (error.json() && error.json().errors && error.json().errors.length > 0) {
                        // this.showErrorBar(error.json().errors[0].message);
                        console.log(error.json().errors[0].message);
                    } else {
                        // this.showErrorBar('Erro no servidor!');
                        console.log('Erro no servidor!');
                    }
                }
            );
    }

}
