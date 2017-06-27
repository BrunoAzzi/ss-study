import { Construction } from './../../../../models/construction.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'construction-managers-form',
  templateUrl: './construction-managers-form.component.html',
  styleUrls: ['./construction-managers-form.component.scss']
})
export class ConstructionManagersFormComponent {

  @Input() construction : Construction
  @Output() saved : EventEmitter<Construction> = new EventEmitter()

  constructor() { }

  save(f) {

  }

}
