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

        this.service.saveConstruction(construction).subscribe(
                data => {
                    this.service.updateFloorsImages(construction).subscribe(c => console.log(c));
                    if (construction.imageFile) {
                        this.service.updateConstructionLogo(construction).subscribe(
                            d => {
                                this.snackBar.open('Sucesso ao salvar!', null, { duration: 3000 });
                                console.log(d);
                            },
                            error =>  {
                                this.handleError(error)
                            }
                        );
                    } else {
                        this.snackBar.open('Sucesso ao salvar!', null, { duration: 3000 });
                    }
                    console.log(data);
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
