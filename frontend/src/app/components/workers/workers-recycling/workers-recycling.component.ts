import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recycling } from '../../../mocks/recycling/recycling';

@Component({
    selector:    'workers-recycling',
    templateUrl: './workers-recycling.template.html',
    styleUrls:   ['./workers-recycling.component.scss'],
})

export class RecyclingComponent {
    @Input() recycling: Recycling;
    @Output() removed = new EventEmitter();

    removeMyself() {
        this.removed.emit(this);
    }

    onFileSelect(event) { }

    setPeriodicity(periodicity: number) {
        if (periodicity) {
            this.recycling.periodicity = periodicity;
            this.updateDueDate();
        }
    }

    updateDueDate() {
        let validityStart = new Date(this.recycling.validityStart.getTime());
        let newMonthValue = validityStart.getMonth() + this.recycling.periodicity;
        validityStart.setMonth(newMonthValue);
        this.recycling.dueDate = validityStart;
    }
}
