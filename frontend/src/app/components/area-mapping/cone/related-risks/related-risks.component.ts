import { Component } from '@angular/core';

@Component({
  selector: 'related-risks',
  styleUrls: ['related-risks.component.scss'],
  templateUrl: 'related-risks.component.html'
})

export class RelatedRisks {

  risks : Array<any> = []

  constructor() {}

  onAddRiskClicked() {
    this.risks.push({})
  }

  onRemoveRiskClicked() {
    
  }

}