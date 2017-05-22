import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Habilitacao } from '../../../mocks/habilitacao/habilitacao';
import { Reciclagem } from '../../../mocks/reciclagem/reciclagem';

@Component({
    selector: 'habilitacao',
    templateUrl: 'habilitacao.template.html',
})
export class HabilitacaoComponent {
    @Input() habilitacao: Habilitacao;
    nameList: any;
    formerName: string;
    reciclagens: Reciclagem[] = [];

    @Output() habilitacaoNamesChange = new EventEmitter();
    @Output() removed = new EventEmitter();

    addReciclagem() {
        this.reciclagens.push(new Reciclagem())
    }

    removeReciclagem(reciclagem: Reciclagem) {
        let index = this.reciclagens.indexOf(reciclagem);
        if (index > -1) this.reciclagens.splice(index, 1);
    }

    toggleName(name) {
        this.addNameInList(this.formerName);
        this.removeNameInList(name);
        this.formerName = name;
    }

    removeMyself() {
        this.addNameInList(this.formerName);
        this.removed.emit(this);
    }

    removeNameInList(name: string) {
        let index = this.nameList.indexOf(name);
        if (index > -1) this.nameList.splice(index, 1);
    }

    addNameInList(name: string) {
        if (name) this.nameList.push(name);
    }

    set habilitacaoNames(val) {
        this.nameList = val;
        this.habilitacaoNamesChange.emit(this.nameList);
    }

    @Input()
    get habilitacaoNames() {
        return this.nameList;
    }
}
