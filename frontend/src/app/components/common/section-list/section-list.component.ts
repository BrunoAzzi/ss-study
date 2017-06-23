import { Component, Input } from '@angular/core';

@Component({
    selector: 'section-list',
    templateUrl: 'section-list.template.html',
    styleUrls: ['./section-list.component.scss']
})

export class SectionListComponent{
    @Input() sections = []
    
    constructor() { }
}