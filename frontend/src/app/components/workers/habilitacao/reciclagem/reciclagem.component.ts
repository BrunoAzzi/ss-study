import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Reciclagem } from '../../../../mocks/reciclagem/reciclagem';

@Component({
    selector: 'reciclagem',
    templateUrl: 'reciclagem.template.html',
})
export class ReciclagemComponent {
    @Input() reciclagem: Reciclagem;
    @Output() removed = new EventEmitter();

    removeMyself() {
        this.removed.emit(this);
    }

}
