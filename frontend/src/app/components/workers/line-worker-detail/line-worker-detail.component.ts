import { Component, Input } from '@angular/core';
import { Worker } from "../../../models/worker.model";

@Component({
    selector: 'line-worker-detail',
    templateUrl: './line-worker-detail.template.html',
    styleUrls: ['./line-worker-detail.component.scss']
})
export class LineWorkerDetailComponent {
    @Input() worker: Worker;
}
