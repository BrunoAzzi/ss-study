import { Component, Input } from '@angular/core';

@Component({
    selector: 'summary',
    templateUrl: 'summary.template.html',
    styleUrls: ['./summary.component.scss']
})

export class SummaryComponent {

    @Input() cones: number;
    @Input() alerts: number;
    @Input() workers: number;

    constructor() { }
}
