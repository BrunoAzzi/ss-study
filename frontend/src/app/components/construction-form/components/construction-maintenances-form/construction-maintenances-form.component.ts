import {Component} from '@angular/core';

@Component({
    selector: 'construction-maintenances-form',
    templateUrl: './construction-maintenances-form.component.html',
    styleUrls: ['./construction-maintenances-form.component.scss']
})
export class ConstructionMaintenancesFormComponent {

    categories : Array<string> = [];

    addNewCategory(category) {
        this.categories = [...this.categories, category];
    }

    editCategory({ category, index }) {
        this.categories[index] = category
    }

}
