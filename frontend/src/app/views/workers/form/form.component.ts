import { Component, EventEmitter, ViewChild } from '@angular/core';
import { WorkerService } from '../../../services/worker.service';
import { Skill } from '../../../mocks/skill/skill';
import { Worker } from '../../../models/worker.model';
import { SafetyCardComponent } from '../../../components/common/safety-card/safety-card.component';

@Component({
    templateUrl: 'form.template.html',
    styleUrls: ['./form.component.scss'],
})
export class WorkerFormComponent {

    @ViewChild('qualificationsCard') qualificationsCard: SafetyCardComponent;
    @ViewChild('datailsCard') datailsCard: SafetyCardComponent;
    @ViewChild('securityCard') securityCard: SafetyCardComponent;
    @ViewChild('healthCard') healthCard: SafetyCardComponent;

    cpf = '';
    isReciclagem = false;
    isValid = false;
    resultado: any;

    worker: Worker = new Worker();

    constructor(private service: WorkerService) {}

    getWorkerByCpf(cpf: string) {
        this.service.getWorkerByCpf(cpf).subscribe(subscribedWorker => {
            this.worker = subscribedWorker;
        });
    }

    onCBOChanged(value) {
        this.service.getCBO(value).subscribe((cbo) => {
            this.worker.cboDescription = cbo;
        });
    }

    onQualificationsSaved(savedWorker: Worker) {
        this.qualificationsCard.close();
    }


    onSecuritySaved(savedWorker: Worker) {
        this.securityCard.close();
    }

    onDetailsSaved(savedWorker: Worker) {
        this.updateWorker(savedWorker);
        this.datailsCard.close();
    }

    onHealthSaved(savedWorker: Worker) {
        this.service.saveWorker(savedWorker);
        this.healthCard.close();
    }

    private updateWorker(worker: Worker) {
        this.service.saveWorker(worker).subscribe(
            data => {
                console.log(data);
            },
            error => {
                if (error.json() && error.json().errors && error.json().errors.length > 0) {
                    // this.showErrorBar(error.json().errors[0].message);
                    console.log(error.json().errors[0].message);
                } else {
                    // this.showErrorBar('Erro no servidor!');
                    console.log('Erro no servidor!');
                }
            }
        );
    }

}
