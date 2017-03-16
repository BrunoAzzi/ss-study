import{Component, ViewEncapsulation, ViewChild, ElementRef, OnInit, Pipe, PipeTransform } from '@angular/core'
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import{EstrategiasService} from './estrategias.service'

import 'style-loader!./estrategias.scss';

@Component({
    selector:'estrategias',
    templateUrl: './estrategias.html',
    providers:[EstrategiasService]
})

export class Estrategias implements OnInit {
    @ViewChild('input')
    input: ElementRef;
    data: any[];

    constructor(){
      this.data = [ 'apple', 'banana', 'carrot', 'pear', 'peach', 'orange','mango', 'grapes', 'lime', 'lemon' ]
    }

    ngOnInit(){
      let eventObservable = Observable.fromEvent(this.input.nativeElement, 'keyup')
      eventObservable.subscribe();
    }
}

@Pipe({
  name: 'searchPipe',
  pure: false
})
export class SearchPipe implements PipeTransform {
  transform(data: any[], searchTerm: string): any[] {
      searchTerm = searchTerm.toUpperCase();
      return data.filter(item => {
        return item.toUpperCase().indexOf(searchTerm) !== -1
      });
  }
}
