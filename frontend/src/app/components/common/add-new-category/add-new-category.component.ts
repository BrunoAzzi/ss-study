import { Component, EventEmitter, Output, ViewChild, Input } from '@angular/core';

@Component({
    selector: 'add-new-category',
    templateUrl: './add-new-category.component.html',
    styleUrls: ['./add-new-category.component.scss']
})
export class AddNewCategoryComponent {

    @Output() added = new EventEmitter();
    @Output() edited = new EventEmitter();
    
    @Input() category = '';
    @Input() index = 0;

    editing = false;

    constructor() {}

    isNew() {
        return (this.index === 0);
    }

    startEditing(input) {

        setTimeout(() => {
            input.focus();
        }, 100);

        this.editing = true;
    }
    
    addCategory(category) {
        this.added.emit(category)
        this.category = ''
    }

    editCategory(category) {
        this.edited.emit({ category, index: this.index })
    }

    submit(category) {
        if (this.isNew()) {
            this.addCategory(category)
        }
        this.editing = false
    }
}
