import {Component} from '@angular/core';
import {Equipment} from '../../../../models/equipment.model';

@Component({
    selector: 'construction-maintenances-form',
    templateUrl: './construction-maintenances-form.component.html',
    styleUrls: ['./construction-maintenances-form.component.scss']
})
export class ConstructionMaintenancesFormComponent {

    categories: Array<Equipment> = [];

    addNewCategory(category) {
        this.categories = [...this.categories, new Equipment()];
    }

    editCategory({ category, index }) {
        this.categories[index] = category;
    }

    removeCategory(index) {
        this.categories.splice(index, 1);
    }

}
