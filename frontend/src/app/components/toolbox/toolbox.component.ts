import { Component } from '@angular/core';

@Component({
    selector: 'toolbox',
    templateUrl: 'toolbox.component.html',
    styleUrls: ['toolbox.component.scss']
})

export class NameComponent {
    private currentTool: string;
    
    constructor() { }

    changeMark(name: string) {
        if (this.currentTool === name) {
            this.currentTool = '';
        } else {
            this.currentTool = name;
            if (name.length > 0) {
                // this.currentMark = L.icon({
                //     iconUrl: `assets/maps/markers/${name}.png`,
                //     iconSize: [53, 51],
                // });
            }
        }
    }
}