import { Component, EventEmitter, Output, ViewChild, Input } from '@angular/core';

@Component({
    selector: 'add-new-category',
    templateUrl: './add-new-category.component.html',
    styleUrls: ['./add-new-category.component.scss']
})
export class AddNewCategoryComponent {

    @Output() added = new EventEmitter();
    @Input() category = '';

    editing = false;

    newCategory : boolean = false;

    constructor() {
        if (this.category.length > 0) {
            this.newCategory = false
        } else {
            this.newCategory = true
        }
    }

    startEditing(input) {

        setTimeout(() => {
            input.focus();
        }, 100);

        this.editing = true;
    }
    
    addCategory(category) {
        this.added.emit(category)
        this.category = '';
        this.editing = false
    }

    submit(category) {
        if (this.newCategory) {
            this.addCategory(category)
            this.newCategory = false
        }
    }
}
