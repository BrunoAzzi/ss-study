import { Construction } from './../../../../models/construction.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'construction-managers-form',
  templateUrl: './construction-managers-form.component.html',
  styleUrls: ['./construction-managers-form.component.scss']
})
export class ConstructionManagersFormComponent {

  @Input() construction: Construction
  @Output() saved: EventEmitter<Construction> = new EventEmitter()

  constructor() { }

  save() {
    const construction = Object.assign(
        new Construction(),
        this.construction
    )
    this.saved.emit(construction);
  }

}
