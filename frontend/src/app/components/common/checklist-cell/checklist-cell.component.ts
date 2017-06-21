import { Component, Input } from '@angular/core';

@Component({
    selector: 'checklist-cell',
    templateUrl: 'checklist-cell.template.html',
    styleUrls: ['./checklist-cell.component.scss']
})

export class ChecklistCellComponent{
    @Input() text: string = ""
    @Input() date: string = ""

    display : string = ""
    icon : string = ""
    time : string = ""

    constructor() { }
}