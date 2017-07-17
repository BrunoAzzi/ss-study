import { Construction } from './../../../models/construction.model';
import { ConstructionsService } from './../../../services/constructions.service';
import { Component } from '@angular/core';
import {MdSnackBar} from '@angular/material';

@Component({
    selector: 'construction-form-c',
    templateUrl: './construction-form.template.html',
    styleUrls: ['./construction-form.container.scss']
})
export class ConstructionFormSmartComponent {

    constructor(public snackBar: MdSnackBar, public service: ConstructionsService) { }

    onConstructionUpdated(construction: Construction) {

        const floorsWithImage = construction.sectors.reduce((sum, sector) => sum.concat(sector.floors.filter(floor => floor.imageFile)), []);

        this.service.saveConstruction(construction).subscribe(
                savedConstruction => {
                    this.service.updateFloorsImages(savedConstruction, floorsWithImage).subscribe(c => console.log(c));
                    construction.id = savedConstruction.id;
                    if (construction.imageFile) {
                        this.service.updateConstructionLogo(construction).subscribe(
                            savedConstruction2 => {
                                this.snackBar.open('Sucesso ao salvar!', null, { duration: 3000 });
                            },
                            error =>  {
                                this.handleError(error);
                            }
                        );
                    } else {
                        this.snackBar.open('Sucesso ao salvar!', null, { duration: 3000 });
                    }
                    console.log(savedConstruction);
                },
                error => {
                    this.handleError(error);
                }
            );
    }

    handleError(error) {
        if (error.json() && error.json().errors && error.json().errors.length > 0) {
            this.snackBar.open(error.json().errors[0].message, null, { duration: 3000 });
            console.log(error.json().errors[0].message);
        } else {
            this.snackBar.open('Erro no servidor!', null, { duration: 3000 });
            console.log('Erro no servidor!');
        }
    }

}
