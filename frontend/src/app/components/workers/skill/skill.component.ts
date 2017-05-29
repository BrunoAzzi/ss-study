import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Skill } from '../../../mocks/skill/skill';
import { Recycling } from '../../../mocks/recycling/recycling';

@Component({
    selector: 'skill',
    styleUrls: ['./skill.component.scss'],
    templateUrl: 'skill.template.html',
})
export class SkillComponent {
    @Input() skill: Skill = new Skill();
    @Input() nameList: any;
    @Input() form: any;

    @Output() skillNamesChange = new EventEmitter();
    @Output() removed = new EventEmitter();

    formerName: string;
    recyclingList: Recycling[] = [];

    onFileSelect(event) { }

    setPeriodicity(periodicity: number) {
        if (periodicity) {
            this.skill.periodicity = periodicity;
            this.updateDueDate();
        }
    }

    updateDueDate() {
        let validityStart = new Date(this.skill.validityStart.getTime());
        let newMonthValue = validityStart.getMonth() + this.skill.periodicity;
        validityStart.setMonth(newMonthValue);
        this.skill.dueDate = validityStart;
        this.checkOverdue();
    }

    checkOverdue() {
        let today = new Date();
        if (this.skill.dueDate.getTime() < today.getTime()) {
            this.skill.overdue = true;
        } else {
            this.skill.overdue = false;
        }
    }

    addReciclagem() {
        this.recyclingList.push(new Recycling())
    }

    removeReciclagem(recycling: Recycling) {
        let index = this.recyclingList.indexOf(recycling);
        if (index > -1) this.recyclingList.splice(index, 1);
    }

    toggleName(name) {
        this.addNameInList(this.formerName);
        this.removeNameInList(name);
        this.formerName = name;
    }

    removeMyself() {
        this.addNameInList(this.formerName);
        this.removed.emit(this);
    }

    removeNameInList(name: string) {
        let index = this.nameList.indexOf(name);
        if (index > -1) this.nameList.splice(index, 1);
    }

    addNameInList(name: string) {
        if (name) this.nameList.push(name);
    }

    set skillNames(val) {
        this.nameList = val;
        this.skillNamesChange.emit(this.nameList);
    }

    @Input()
    get skillNames() {
        return this.nameList;
    }
}
