import{Component} from '@angular/core'
import{HistoryService} from './history.service'



import 'style-loader!./history.scss';

@Component({
    selector:'history',
    templateUrl: './history.html',
    providers:[HistoryService]
})

export class History{
   updateData;
   metas = [];
   anotacoes= [];
   datesH = [];
   errorMessage: string;


   constructor(private _historyService: HistoryService) {

   }


   ngOnInit(){
     this.getValues();
   }


   getValues(){
     this._historyService.getData().subscribe((data)=> this.metas = data);
     this._historyService.getAnotationsData().subscribe((data)=> this.anotacoes = data);

   }





}
