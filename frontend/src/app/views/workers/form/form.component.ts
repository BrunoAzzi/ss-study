import { Component, EventEmitter  } from '@angular/core';
import { WorkerService } from '../../../services/worker.service';
import { Skill } from '../../../mocks/skill/skill';
import { Worker } from '../../../models/worker.model';

@Component({
    templateUrl: 'form.template.html',
    styleUrls: ['./form.component.scss'],
})
export class WorkerFormComponent {

    cpf: string = "";
    isReciclagem: boolean = false;
    maximunLength: number;
    isValid: boolean = false;
    skillList = [];
    resultado:any;
    worker: Worker = new Worker();//any = { personalData: {} };

    constructor(
        private service: WorkerService
    ) {
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

    getWorkerByCpf(cpf: string) {
     
        this.service.getWorkerByCpf(cpf).subscribe(subscribedworker => {
            console.log(subscribedworker)
            this.worker = subscribedworker
        } );
    }

    saveSkills(safetyCard) {
        if (this.isValid) safetyCard.close();
    }
}
