import {Component, EventEmitter, Output} from '@angular/core';
import {Equipment} from '../../../../models/equipment.model';

@Component({
    selector: 'construction-maintenances-form',
    templateUrl: './construction-maintenances-form.component.html',
    styleUrls: ['./construction-maintenances-form.component.scss']
})
export class ConstructionMaintenancesFormComponent {

    equipments: Array<Equipment> = [];

    addEquipment() {
        this.equipments.push(new Equipment);
    }

    removeEquipment(index) {
        this.equipments.splice(index, 1);
    }

}
