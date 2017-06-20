import { OnInit } from '@angular/core';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'constructions-status',
    styleUrls: ['./constructions-status.component.scss'],
    templateUrl: 'constructions-status.template.html',
})
export class ConstructionsStatusComponent implements OnInit {
    @Input() status: number = 0;
    color: string = "";
    text: string = "";

    ngOnInit(){
        switch (+this.status) {
            case 1: {
                this.color = "very-bad";
                this.text = "Risco Alto";
                break;
            }

            case 2: {
                this.color = "bad";
                this.text = "Risco Alto";
                break;
            }

            case 3: {
                this.color = "bad-medium";
                this.text = "Risco Mediano";
                break;
            }

            case 4: {
                this.color = "good-medium";
                this.text = "Risco Mediano";
                break;
            }
        
            case 5: {
                this.color = "good";
                this.text = "Risco Baixo";
                break;
            }
        
            default: {
                this.color = "very-good";
                this.text = "Risco Baixo";
                break;
            }
        }
    }
}
