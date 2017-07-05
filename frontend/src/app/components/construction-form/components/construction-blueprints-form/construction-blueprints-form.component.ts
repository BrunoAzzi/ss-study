import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Construction} from '../../../../models/construction.model';
import {Sector} from '../../../../models/sector.model';
import {Floor} from '../../../../models/floor.model';

@Component({
  selector: 'safety-construction-blueprints-form',
  templateUrl: './construction-blueprints-form.component.html',
  styleUrls: ['./construction-blueprints-form.component.scss']
})
export class ConstructionBlueprintsFormComponent implements OnInit {

  @Input() construction: Construction;
  @Output() saved: EventEmitter<Construction> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  addSector(sectorName) {
    const newSector = new Sector();
    newSector.name = sectorName;
    this.construction.sectors = [...this.construction.sectors, newSector];
  }

  editSector({ name, index }) {
    this.construction.sectors[index].name = name;
  }

  removeSector(index) {
    this.construction.sectors.splice(index, 1);
  }

  removeFloor(sectorIndex, floorIndex) {
    this.construction.sectors[sectorIndex].floors.splice(floorIndex, 1);
  }

  blueprintAdded(indexSector, inputs, imageFile: File) {
    const newFloor = Object.assign(new Floor(), {
        ...inputs,
        imageFile: imageFile
    });
    this.construction.sectors[indexSector].floors.push(newFloor);
  }

  blueprintEdited(floor: Floor, imageFile: File) {
    floor.imageFile = imageFile;
  }

  save() {
    this.saved.emit(this.construction);
  }

}
