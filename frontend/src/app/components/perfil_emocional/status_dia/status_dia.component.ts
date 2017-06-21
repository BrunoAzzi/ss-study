import { Component, OnInit } from '@angular/core';
import { Colaborador } from "../../../mocks/colaborador/colaborador";
import { CollaboratorService } from "../../../services/colaborador/collaborator.service";
import { Resultado } from "../../../mocks/resultado/resultado";


// TODO REVER CLASSES COM NOME EM PORTUGUÊS
@Component({
    selector: 'status-dia',
    templateUrl: 'status_dia.template.html',
    styleUrls: ['./status_dia.component.scss'],
    providers: [CollaboratorService]
})
export class StatusDiaComponent implements OnInit {
    totaldecolaboradores: number = 0;
    resultados = new Resultado(0, 0, 0, 0, 0);

    pesquisasDeHoje;

    constructor(private colaboradorService: CollaboratorService) { }

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
