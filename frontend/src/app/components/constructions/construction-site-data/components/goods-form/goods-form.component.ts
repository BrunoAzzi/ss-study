import {Component} from '@angular/core';

@Component({
    selector: 'goods-form',
    templateUrl: './goods-form.component.html',
    styleUrls: ['./goods-form.component.scss']
})
export class GoodsFormComponent {

    categories : Array<string> = [];

    addNewCategory(category) {
        console.log(category)
        this.categories = [...this.categories, category];
    }

}
