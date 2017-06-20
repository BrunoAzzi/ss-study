import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'mapping-stages',
    styleUrls: ['mapping-stages.component.scss'],
    templateUrl: 'mapping-stages.component.html'  
})

export class MappingStages {
    @Input() stageStepChild: number;
    @Input() totalSteps: number;

    @Output() updateStepStage = new EventEmitter<string>();

    constructor() {}

    backStep():void {
        this.updateStepStage.emit("back");
    }

}