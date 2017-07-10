import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Equipment} from '../../models/equipment.model';

@Component({
  selector: 'safety-equipment-inline-form',
  templateUrl: './equipment-inline-form.component.html',
  styleUrls: ['./equipment-inline-form.component.scss']
})
export class EquipmentInlineFormComponent implements OnInit {

  equipmentValue: Equipment = new Equipment();

  @Input() get equipment(): Equipment {
      return this.equipmentValue;
  };

  @Output() equipmentChange: EventEmitter<Equipment> = new EventEmitter();

  set equipment(val) {
      this.equipmentValue = val;
      this.equipmentChange.emit(this.equipmentValue);
  };

  @Output() removed: EventEmitter<Equipment> = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
