import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Equipment} from "../../models/equipment.model";

@Component({
  selector: 'safety-equipment-inline-form',
  templateUrl: './equipment-inline-form.component.html',
  styleUrls: ['./equipment-inline-form.component.scss']
})
export class EquipmentInlineFormComponent implements OnInit {

  @Output() removed: EventEmitter<Equipment> = new EventEmitter();
  @Input() equipment: Equipment;

  constructor() { }

  ngOnInit() {
  }

  onToggleChange(event) {
      console.log(event.checked);
  }

}
