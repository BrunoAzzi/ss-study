import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'related-risks',
  styleUrls: ['related-risks.component.scss'],
  templateUrl: 'related-risks.component.html'
})

export class RelatedRisks {

  @Input() dataConeChild: any;

  @Output() updateRisks = new EventEmitter<any>();
  
  risks : Array<any> = []

  constructor() {}

  ngOnInit() {
    this.risks = this.dataConeChild.risks;
  }

  onAddRiskClicked() {
    this.risks.push({})
    this.dataConeChild.risks = this.risks;
    this.sendData();
  }

  onRemoveRiskClicked(index: number) {    
    if(index > -1) {
      this.risks.splice(index, 1);
      this.dataConeChild.risks = this.risks;
      this.sendData();
    }
  }

  updateRelatedRisk({ risk, index }) {    
    if(index > -1 && index <= this.risks.length) {
      this.risks[index] = risk;
      this.dataConeChild.risks = this.risks;
      this.sendData();
    }
  }

  sendData(){
    this.updateRisks.emit(this.dataConeChild);
  }

}