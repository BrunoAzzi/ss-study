import { EmotionalResult } from './../../../models/emotional-result.model';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'workers-overview',
    styleUrls: ['./workers-overview.component.scss'],
    templateUrl: 'workers-overview.template.html',
})
export class WorkersOverviewComponent {
    results = new EmotionalResult(20, 76, 34, 250, 20);
    total: number = 360;
}
