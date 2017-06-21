import { Component } from '@angular/core';
import { MdSelectModule } from '@angular/material';

@Component({
  selector: 'permissions',
  styleUrls: ['permissions.component.scss'],
  templateUrl: 'permissions.component.html'
})

export class Permissions {
    permissions = [
        {value: 'epi', viewValue: 'EPI'},
        {value: 'function', viewValue: 'FUNÇÃO'},
        {value: 'person', viewValue: 'PESSOA'},
        {value: 'enabling', viewValue: 'HABILITAÇÃO'}
    ];
}