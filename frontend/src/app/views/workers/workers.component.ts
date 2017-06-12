import { Component, EventEmitter  } from '@angular/core';
import { Skill } from '../../mocks/skill/skill';

@Component({
    selector: 'workers',
    templateUrl: 'workers.template.html',
    styleUrls: ['./workers.component.scss'],
})
export class WorkersComponent {

    isReciclagem: boolean = false;
    maximunLength: number;
    isValid: boolean = false;
    skillList = [];

    constructor() {
        if (this.skillList.length < 1) this.skillList.push(new Skill());
        this.maximunLength = this.skillNames.length;
    }

    addSkill() {
        if (this.skillList.length < this.maximunLength) this.skillList.push(new Skill());
    }

    removeSkill(skill: Skill) {
        let index = this.skillList.indexOf(skill);
        if (index > -1) this.skillList.splice(index, 1);
    }

    skillNames = [
        "NR 32",
        "NR 35",
        "NR 18",
        "NR 33",
    ];

    saveSkills(safetyCard) {
        if (this.isValid) safetyCard.close();
    }
}
