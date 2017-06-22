import { Component } from '@angular/core';
import { MdDialog, MdDialogRef, MdButton, MdToolbar } from '@angular/material';

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
  stageStepChild: number;
  totalSteps: number;

  constructor(public dialog: MdDialog) { }

    ngOnInit() {
        this.currentStageStep = 1;        
        this.totalSteps = 3;
        this.actionButton = this.ACTION_NEXT;
    }

    setStageStep(_stageStepChild: number, _totalSteps: number) {
      this.stageStepChild = _stageStepChild;
      this.totalSteps = _totalSteps;
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

}