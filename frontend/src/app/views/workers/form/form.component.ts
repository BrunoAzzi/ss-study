import { Component, ViewChild } from '@angular/core';
import { WorkerService } from '../../../services/worker.service';
import { Worker } from '../../../models/worker.model';
import { SafetyCardComponent } from '../../../components/common/safety-card/safety-card.component';

@Component({
    templateUrl: 'form.template.html',
    styleUrls:   ['./form.component.scss'],
})
export class WorkerFormComponent {

    @ViewChild('qualificationsCard') qualificationsCard: SafetyCardComponent;
    @ViewChild('datailsCard') datailsCard: SafetyCardComponent;
    @ViewChild('securityCard') securityCard: SafetyCardComponent;
    @ViewChild('healthCard') healthCard: SafetyCardComponent;

    cpf          = '';
    isReciclagem = false;
    isValid      = false;
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

        console.log(savedWorker);
        this.updateWorker(savedWorker);
        this.datailsCard.close();
    }

    onHealthSaved(savedWorker: Worker) {
        this.service.saveWorker(savedWorker);
        this.healthCard.close();
    }

    private updateWorker(worker: Worker) {

        
       if(this.validateWorker(worker) ){
        this.service.saveWorker(worker).subscribe(
            data => {
              //  console.log(data);
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
      else{
          console.log("validação não aprovada");
      }
    }

    validaNulo(valor, tipo) {
        if (valor == null || valor == '') {
            alert(tipo+" Não Pode ser Nulo!");
            return false;
        }
        return true;
    }

    validateWorker(worker) {
      var a =  this.validaNulo(worker.cpf, "Cpf");
      var b =  this.validaNulo(worker.Nome, "Nome");
      if (!a || !b)
          return false;
      return true;
    }
}
