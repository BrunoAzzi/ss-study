import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IMyDpOptions } from 'mydatepicker';
import { Skill } from '../../../models/skill.model';
import { Recycling } from '../../../models/recycling.model';

@Component({
    selector:    'worker-skill-form',
    templateUrl: './worker-skill-form.template.html',
    styleUrls:   ['./worker-skill-form.component.scss'],
})

export class SkillComponent {
    @Input() skill: Skill = new Skill();
    @Input() nameList: any;
    @Input() form: any;

    @Output() skillNamesChange = new EventEmitter();
    @Output() removed          = new EventEmitter();

    formerName: string;
    recyclingList: Recycling[]      = [];
    recyclingMdSlideToggle: boolean = false;

    myDatePickerOptions: IMyDpOptions = {
        dateFormat:  'dd/mm/yyyy',
        dayLabels:   { su: 'Dom', mo: 'Seg', tu: 'Ter', we: 'Qua', th: 'Qui', fr: 'Sex', sa: 'Sab' },
        monthLabels: { 1: 'Jan', 2: 'Fev', 3: 'Mar', 4: 'Abr', 5: 'Mai', 6: 'Jun', 7: 'Jul', 8: 'Ago', 9: 'Set', 10: 'Out', 11: 'Nov', 12: 'Dez' },
        todayBtnTxt: 'Hoje'
    };

    onFileSelect(event) {}

    setPeriodicity(periodicity: number) {
        if (periodicity) {
            this.skill.periodicity = periodicity;
            this.updateDueDate();
        }
    }

    setValidityStart(event) {
        this.skill.validityStart = event.jsdate;
        this.updateDueDate();
    }

    updateDueDate() {
        const validityStart = new Date(this.skill.validityStart.getTime());
        const newMonthValue = validityStart.getMonth() + this.skill.periodicity;
        validityStart.setMonth(newMonthValue);
        this.skill.dueDate = validityStart;
        this.checkOverdue();
    }

    checkOverdue() {
        const today = new Date();
        if (this.skill.dueDate.getTime() < today.getTime()) {
            this.skill.overdue = true;
        } else {
            this.skill.overdue = false;
        }
    }

    addReciclagem() {
        this.recyclingList.push(new Recycling());
    }

    removeReciclagem(recycling: Recycling) {
        const index = this.recyclingList.indexOf(recycling);
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
        const index = this.nameList.indexOf(name);
        if (index > -1) this.nameList.splice(index, 1);
    }

    addNameInList(name: string) {
        if (name) this.nameList.push(name);
    }

    set skillNames(val) {
        this.nameList = val;
        this.skillNamesChange.emit(this.nameList);
    }

    clickRecycling(value) {
        value.checked === true
            ? this.recyclingMdSlideToggle = true
            : this.recyclingMdSlideToggle = false;
    }

    @Input()
    get skillNames() {
        return this.nameList;
    }
}
