import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'add-new-category',
    templateUrl: './add-new-category.component.html',
    styleUrls: ['./add-new-category.component.scss']
})
export class AddNewCategoryComponent {
    @Output() onAdd = new EventEmitter();
    editing = false;
}
