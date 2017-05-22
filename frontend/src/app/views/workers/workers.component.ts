import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Habilitacao } from '../../mocks/habilitacao/habilitacao';

@Component({
    selector: 'workers',
    templateUrl: 'workers.template.html',
    styleUrls: ['./workers.component.scss']
})
export class WorkersComponent {
    isReciclagem: boolean = false;
    maximunLength: number;

    habilitacoes = [];

    addHabilitacao() {
        if (this.habilitacoes.length < this.maximunLength) this.habilitacoes.push(new Habilitacao());
    }

    removeHabilitacao(habilitacao: Habilitacao) {
        let index = this.habilitacoes.indexOf(habilitacao);
        if (index > -1) this.habilitacoes.splice(index, 1);
    }

    habilitacaoNames = [
        "NR 32",
        "NR 35",
        "NR 18",
        "NR 33",
    ];

    status = [
        { value: 'ativo', viewValue: 'Ativo' },
        { value: 'inativo', viewValue: 'Inativo' },
        { value: 'afastado', viewValue: 'Afastado' },
        { value: 'demitido', viewValue: 'Demitido' },
    ];

    cargos = [
        { value: 'prog', viewValue: 'Programador' },
        { value: 'des', viewValue: 'Desenvolvedor' },
    ];

    escolaridades = [
        { value: 'fund_i', viewValue: 'Fundamental incompleto' },
        { value: 'fund_c', viewValue: 'Fundamental completo' },
        { value: 'medio_i', viewValue: 'Médio incompleto' },
        { value: 'medio_c', viewValue: 'Médio completo' },
        { value: 'sup_i', viewValue: 'Superior incompleto' },
        { value: 'sup_c', viewValue: 'Superior completo' },
        { value: 'pos', viewValue: 'Pós Graduação' },
    ];

    necessidades = [
        { value: '', viewValue: '' },
        { value: '', viewValue: '' },
    ];

    constructor() {
        this.maximunLength = this.habilitacaoNames.length;
    }

}
