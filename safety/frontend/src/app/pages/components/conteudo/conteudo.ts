import{Component} from '@angular/core'
import{ConteudosService} from './conteudo.service'



import 'style-loader!./conteudo.scss';

@Component({
    selector:'conteudo',
    templateUrl: './conteudo.html',
    providers:[ConteudosService]
})

export class Conteudo{
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

   constructor(private conteudosService: ConteudosService) {

   }


   ngOnInit(){

   }



}
