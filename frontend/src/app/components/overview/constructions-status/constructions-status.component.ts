import { Component } from '@angular/core';

@Component({
    selector: 'constructions-status',
    styleUrls: ['./constructions-status.component.scss'],
    templateUrl: 'constructions-status.template.html',
})
export class ConstructionsStatusComponent {
    status: number = 4;
    color: string = "bad";
    text: string = "Risco Mediano";
}
