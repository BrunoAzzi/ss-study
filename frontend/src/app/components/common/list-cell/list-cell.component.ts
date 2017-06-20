import { Component, Input } from '@angular/core';

@Component({
    selector: 'list-cell',
    templateUrl: 'list-cell.template.html',
    styleUrls: ['./list-cell.component.scss']
})

export class ListCellComponent{
    @Input() text: string = "";
    @Input() time: string = "";
    @Input() icon: string = "";
    @Input() display: string = "left";

    constructor() { }
}