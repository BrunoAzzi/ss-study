import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MdSelectModule } from '@angular/material';

import {Collaborator} from '../../../../models/colLaborator.model';

@Component({
  selector: 'permissions',
  styleUrls: ['permissions.component.scss'],
  templateUrl: 'permissions.component.html'
})

export class Permissions {

    permissionType: string;
    filteredSelectedCollaborators: Array<Collaborator> = [];
    @Input() dataConeChild: any;

    @Output() updatePermissions = new EventEmitter<string>();

    permissions = [
        {value: 'epi', viewValue: 'EPI'},
        {value: 'function', viewValue: 'FUNÇÃO'},
        {value: 'person', viewValue: 'PESSOA'},
        {value: 'enabling', viewValue: 'HABILITAÇÃO'}
    ];

    ngOnInit() {
        this.permissionType = this.dataConeChild.permissionType;
    }

    updateCollaboratorList(_data: any) {
        this.filteredSelectedCollaborators = _data;
        this.sendData();
    }

    sendData():void { 
        this.dataConeChild.permissionType = this.permissionType;
        this.dataConeChild.filteredSelectedCollaborators = this.filteredSelectedCollaborators;
        this.updatePermissions.emit(this.dataConeChild);
    }    
}