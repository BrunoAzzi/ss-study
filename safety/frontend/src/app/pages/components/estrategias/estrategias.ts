import{Component} from '@angular/core'
import{EstrategiasService} from './estrategias.service'



import 'style-loader!./estrategias.scss';

@Component({
    selector:'estrategias',
    templateUrl: './estrategias.html',
    providers:[EstrategiasService]
})

export class Estrategias{
   updateData;
   metas = [];
   anotacoes= [];
   datesH = [];
   errorMessage: string;
   categoriaEstresse=[];
   categoriaAlimentacao=[];
   categoriaExercicio=[];
   categoriaPrevencao=[];
   categoriaRelacionamento=[];

   constructor(private estrategiasService: EstrategiasService) {

   }


   ngOnInit(){

   }

   

}
