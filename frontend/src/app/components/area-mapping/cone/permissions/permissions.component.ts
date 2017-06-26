import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MdSelectModule } from '@angular/material';

@Component({
  selector: 'permissions',
  styleUrls: ['permissions.component.scss'],
  templateUrl: 'permissions.component.html'
})

export class Permissions {

    permissionType: string;

    @Input() dataConeChild: any;

    permissions = [
        {value: 'epi', viewValue: 'EPI'},
        {value: 'function', viewValue: 'FUNÇÃO'},
        {value: 'person', viewValue: 'PESSOA'},
        {value: 'enabling', viewValue: 'HABILITAÇÃO'}
    ];

    sendData():void { 
        this.dataConeChild.permissionType = this.permissionType;
        
    }    
}