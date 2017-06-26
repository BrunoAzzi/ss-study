import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sensor-identification',
  styleUrls: ['sensor-identification.component.scss'],
  templateUrl: 'sensor-identification.component.html'
})

export class SensorIdentification {

    title: string;
    identification: string;
    @Input() dataConeChild: any;

    @Output() updateSensorIdentification = new EventEmitter<string>();

    ngOnInit() {
      this.title = this.dataConeChild.title;
      this.identification = this.dataConeChild.identification;
    }  

    sendData():void {      
      this.dataConeChild.identification = this.identification;
      this.dataConeChild.title = this.title;      
      this.updateSensorIdentification.emit(this.dataConeChild);
    }

}