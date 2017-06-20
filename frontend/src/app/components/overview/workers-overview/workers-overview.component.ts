import { EmotionalResult } from './../../../models/emotional-result.model';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'workers-overview',
    styleUrls: ['./workers-overview.component.scss'],
    templateUrl: 'workers-overview.template.html',
})
export class WorkersOverviewComponent {
    @Input() results : EmotionalResult;
    @Input() total: number = 0;
}
