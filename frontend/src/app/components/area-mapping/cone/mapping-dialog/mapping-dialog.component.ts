import { Component } from '@angular/core';
import { MdDialog, MdDialogRef, MdButton, MdToolbar } from '@angular/material';

import { Cone } from './../../../../models/cone.model';
import { Risk } from './../../../../models/risk.model';

@Component({
  selector: 'mapping-dialog',
  styleUrls: ['mapping-dialog.component.scss'],
  templateUrl: 'mapping-dialog.component.html'
})

export class MappingDialog {
  ACTION_NEXT = "PRÓXIMO";
  ACTION_FINISH = "FINALIZAR MAPEAMENTO";

  actionButton: string;
  currentStageStep: number;
  totalSteps: number;
  cone: Cone;
  dataCone: Object = {
    title: '',
    identification: '',
    risks: [],
    permissionType: ''
  } ;

  constructor() { }

    ngOnInit() {
        this.currentStageStep = 1;        
        this.totalSteps = 3;
        this.actionButton = this.ACTION_NEXT;        
        //this.cone = new Cone(this.dataCone);
    }

    updateStepStage(_actionType: string) {
        if(_actionType == 'next') {
          if(this.currentStageStep < this.totalSteps) {
            this.currentStageStep++;            
                if(this.currentStageStep == this.totalSteps) {
                    this.actionButton = this.ACTION_FINISH;
                }
          }
        }
        if(_actionType == 'back') {
          if(this.currentStageStep > 1) {
            this.currentStageStep--;
            this.actionButton = this.ACTION_NEXT;                 
          }
        }
    }

    updateSensorIdentification(_dataCone: any) {      
      this.dataCone['title'] = _dataCone.title;
      this.dataCone['identification'] = _dataCone.identification;      
    }

    updateRisks(_dataCone: any) {

    }

    updatePermissions(_dataCone: any) {
      this.dataCone['permissionType'] = _dataCone.permissionType;
      this.cone = new Cone(this.dataCone);
      //TODO submit form with values
      console.log(this.cone);      
    }

}