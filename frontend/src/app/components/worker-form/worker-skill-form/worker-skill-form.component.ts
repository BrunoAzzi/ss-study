import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { IMyDpOptions } from 'mydatepicker';
import { Qualification } from '../../../models/qualification.model';
import { Recycling } from '../../../models/recycling.model';
import * as moment from 'moment';

@Component({
    selector:    'worker-skill-form',
    templateUrl: './worker-skill-form.template.html',
    styleUrls:   ['./worker-skill-form.component.scss'],
})

export class SkillComponent implements OnInit {
    @Input() skill: Qualification;
    @Input() skillNames: any;
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
     
    ngOnInit() {
       const constRealizationDate     = moment(this.skill.realizationDate, 'YYYY-MM-DD HH:mm:ss');
       this.skill.realizationDate =  { date: { year: constRealizationDate.year(), month: constRealizationDate.month() + 1, day: constRealizationDate.date() } };
    }

    onFileSelect(event) {}

     setPeriodicity(periodicity: number) {
        if (periodicity) {
            this.skill.periodicity = periodicity;
            this.updateDueDate();
        }
    } 

    setValidityStart(event) {
        this.skill.realizationDate = event.jsdate;
        this.updateDueDate();
    } 

     updateDueDate() {
        const validityStart = new Date();
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
        const index = this.skillNames.indexOf(name);
        if (index > -1) this.skillNames.splice(index, 1);
    }

    addNameInList(name: string) {
        if (name) this.skillNames.push(name);
    }


    clickRecycling(value) {
        value.checked === true
            ? this.recyclingMdSlideToggle = true
            : this.recyclingMdSlideToggle = false;
    }


}
