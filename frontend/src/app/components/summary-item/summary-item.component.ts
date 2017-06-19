import { Component, Input } from '@angular/core';

@Component({
    selector: 'summary-item',
    templateUrl: 'summary-item.template.html',
    styleUrls: ['./summary-item.component.scss']
})

export class SummaryItemComponent {

    @Input() imageUrl: string;
    @Input() number: number;

    constructor() { }
}
