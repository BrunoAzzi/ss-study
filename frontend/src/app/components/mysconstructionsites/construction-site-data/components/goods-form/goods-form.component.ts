import {Component} from '@angular/core';

@Component({
    selector: 'goods-form',
    templateUrl: './goods-form.component.html',
    styleUrls: ['./goods-form.component.scss']
})
export class GoodsFormComponent {

    addNewCategory(category) {
        console.log('add new category: ' + category);
    }

}
