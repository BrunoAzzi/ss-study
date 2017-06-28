import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Risk, RiskTypes, RiskLevels, RiskFactors } from '../../../../models/risk.model';

@Component({
  selector: 'related-risk',
  styleUrls: ['related-risk.component.scss'],
  templateUrl: 'related-risk.component.html'
})

export class RelatedRisk {

  riskTypes: any;
  levelTypes: any;
  factorTypes: any;

  

  riskType: number;  
  riskTypeLabel: string; 
  levelType: number;
  levelTypeLabel: string;
  factorType: number;

  @Input() data: any;

  @Input() risk
  @Output() updateRelatedRisk = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {
    this.risk.riskTypes = [];
    this.risk.riskTypeLabel = "";
    this.risk.levelTypeLabel = "";
    this.risk.riskTypes = RiskTypes; 
    this.risk.levelTypes = RiskLevels;
    this.risk.factorTypes = RiskFactors;

    /*this.riskType = this.data.riskType;
    this.levelType = this.data.levelType;
    this.factorType = this.data.factorType;*/
  }

  sendData():void {
      this.riskTypeLabel = RiskTypes[this.riskType];
      this.levelTypeLabel = RiskLevels[this.levelType];
      /*this.data.riskType = this.riskType;
      this.data.levelType = this.levelType;
      this.data.factorType = this.factorType;
      this.updateRelatedRisk.emit(this.data);*/
      console.log(this.riskType);
      console.log(this.levelType);
      console.log(this.factorType);
    }

}