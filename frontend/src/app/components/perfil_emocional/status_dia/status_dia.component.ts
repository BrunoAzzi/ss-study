import { Component, OnInit } from '@angular/core';
import { Colaborador } from "../../../mocks/colaborador/colaborador";
import { ColaboradorService } from "../../../services/colaborador/colaborador.service";
import { Resultado } from "../../../mocks/resultado/resultado";

@Component({
    selector: 'status-dia',
    templateUrl: 'status_dia.template.html',
    styleUrls: ['./status_dia.component.scss'],
    providers: [ColaboradorService]
})
export class StatusDiaComponent implements OnInit {
    totaldecolaboradores: number = 0;
    resultados = new Resultado(0, 0, 0, 0, 0);

    pesquisasDeHoje;

    constructor(private colaboradorService: ColaboradorService) { }

    ngOnInit(): void {
        this.getColaboradores();
    }

    getColaboradores(): void {
        var emocaoDoDia: string = "";

        var today = new Date();
        today.setHours(0, 0, 0, 0);

        this.colaboradorService.getColaborador().subscribe(response => {
            this.totaldecolaboradores = response.length;
            response.forEach(colaborador => {
                colaborador.pesquisaEmocional.forEach(pesquisa => {
                    var placeholder = new Date(pesquisa.date);
                    var label = pesquisa.estadoEmocional.label;
                    placeholder.setHours(0, 0, 0, 0)

                    if (placeholder.getTime() === today.getTime()) {
                        if (!this.resultados[label]) this.resultados[label] = 0;
                        this.resultados[label]++;
                    }
                });
            });
        });
    }
}
