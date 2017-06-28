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

  @Input() risk: any;
  @Input() index: number;
  @Output() updateRelatedRisk = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {
    this.riskTypes = [];
    this.riskTypeLabel = "";
    this.levelTypeLabel = "";
    this.riskTypes = RiskTypes; 
    this.levelTypes = RiskLevels;
    this.factorTypes = RiskFactors;

    this.riskType = this.risk.type;
    this.levelType = this.risk.level;
    this.factorType = this.risk.factor;
  }

  sendData():void {
      this.riskTypeLabel = RiskTypes[this.riskType];
      this.levelTypeLabel = RiskLevels[this.levelType];
      this.risk.type = this.riskType;
      this.risk.level = this.levelType;
      this.risk.factor = this.factorType;      
      this.updateRelatedRisk.emit({ risk: this.risk, index: this.index});

  }

}