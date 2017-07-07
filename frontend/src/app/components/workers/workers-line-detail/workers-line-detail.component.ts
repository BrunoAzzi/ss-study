import { Component, Input } from '@angular/core';
import { Worker } from '../../../models/worker.model';

@Component({
    selector:    'workers-line-detail',
    templateUrl: './workers-line-detail.template.html',
    styleUrls:   ['./workers-line-detail.component.scss']
})

export class LineWorkerDetailComponent {
    @Input() worker: Worker;
}
