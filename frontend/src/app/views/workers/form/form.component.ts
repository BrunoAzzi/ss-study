import {Component, EventEmitter, ViewChild} from '@angular/core';
import { WorkerService } from '../../../services/worker.service';
import { Skill } from '../../../mocks/skill/skill';
import { Worker } from '../../../models/worker.model';
import {SafetyCardComponent} from "../../../components/common/safety-card/safety-card.component";

@Component({
    templateUrl: 'form.template.html',
    styleUrls: ['./form.component.scss'],
})
export class WorkerFormComponent {

    @ViewChild('qualificationsCard') qualificationsCard: SafetyCardComponent;

    cpf: string = "";
    isReciclagem: boolean = false;
    isValid: boolean = false;
    resultado: any;

    worker: Worker = new Worker();

    constructor(
        private service: WorkerService
    ) {
    }

    getWorkerByCpf(cpf: string) {
        this.service.getWorkerByCpf(cpf).subscribe(subscribedworker => {
            this.worker = subscribedworker
        } );
    }

    onQualificationsSaved(savedWorker : Worker) {
        console.log(savedWorker)
        this.qualificationsCard.close();
    }

    onDetailsSaved(savedWorker: Worker) {
        console.log(savedWorker)
        this.service.save(savedWorker)
    }
}
