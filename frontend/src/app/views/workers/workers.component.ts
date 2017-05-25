import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skill } from '../../mocks/skill/skill';

@Component({
    selector: 'workers',
    templateUrl: 'workers.template.html',
    styleUrls: ['./workers.component.scss']
})
export class WorkersComponent {
    maximunLength: number;
    isValid: boolean = false;

    skillList = [];

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

    status = [
        { value: 'ativo', viewValue: 'Ativo' },
        { value: 'inativo', viewValue: 'Inativo' },
        { value: 'afastado', viewValue: 'Afastado' },
        { value: 'demitido', viewValue: 'Demitido' },
    ];

    cargos = [
        { value: 'prog', viewValue: 'Programador' },
        { value: 'des', viewValue: 'Desenvolvedor' },
    ];

    escolaridades = [
        { value: 'fund_i', viewValue: 'Fundamental incompleto' },
        { value: 'fund_c', viewValue: 'Fundamental completo' },
        { value: 'medio_i', viewValue: 'Médio incompleto' },
        { value: 'medio_c', viewValue: 'Médio completo' },
        { value: 'sup_i', viewValue: 'Superior incompleto' },
        { value: 'sup_c', viewValue: 'Superior completo' },
        { value: 'pos', viewValue: 'Pós Graduação' },
    ];

    necessidades = [
        { value: '', viewValue: '' },
        { value: '', viewValue: '' },
    ];

    constructor() {
        this.maximunLength = this.habilitacaoNames.length;
    }

    saveSkills() {
        console.log("skills saved!")
    }

}
