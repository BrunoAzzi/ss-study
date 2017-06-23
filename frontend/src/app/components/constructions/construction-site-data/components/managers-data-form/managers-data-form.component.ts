import { Construction } from './../../../../../models/construction.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'managers-data-form',
  templateUrl: './managers-data-form.component.html',
  styleUrls: ['./managers-data-form.component.scss']
})
export class ManagersDataFormComponent {

  @Input() construction : Construction
  @Output() saved : EventEmitter<Construction> = new EventEmitter()

  constructor() { }

  save(f) {

  }

}
