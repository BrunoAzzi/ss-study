import { Component } from '@angular/core';

import { Risk, TYPES, RiskLevels, RiskFactors } from '../../../../models/risk.model';

@Component({
  selector: 'related-risk',
  styleUrls: ['related-risk.component.scss'],
  templateUrl: 'related-risk.component.html'
})

export class RelatedRisk {

  riskTypes: Array<any>;
  levelTypes: any;
  factorTypes: any;

  riskType: string;  
  levelType: string;
  factorType: string;

  constructor() {}

  ngOnInit() {
    this.riskTypes = [];    
        for(let key in TYPES) {            
            this.riskTypes.push(
              {key: key, value: TYPES[key]}
            )
        }
    this.levelTypes = RiskLevels;
    this.factorTypes = RiskFactors;
  }

}