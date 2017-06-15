import { Floor } from './../../../models/floor.model';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'risk-graph',
    templateUrl: 'risk-graph.template.html',
    styleUrls: ['./risk-graph.component.scss']
})

export class RiskGraphComponent {

    @Input() floor : Floor

    constructor() { }
}
