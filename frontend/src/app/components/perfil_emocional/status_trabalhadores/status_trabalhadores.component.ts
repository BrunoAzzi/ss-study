import { Component } from '@angular/core';

@Component({
  selector: 'status-trabalhadores',
  templateUrl: 'status_trabalhadores.template.html',
  styleUrls: ['./status_trabalhadores.component.scss']
})
export class StatusTrabalhadoresComponent {
  search: string = '';
  highestNumElements: any;
  indexes: any;
  searchText: string = '';
  data: any = null;
  data2: any;

  constructor() {
//g = glad/contente; s=sad/triste; a=angry/irritado; e=excited/empolgado; '' = n respondido
    this.data = [
      { name: "João", statuses: ['g', 's', 'a', 'a', '', 'g', 's', 'e', 'a', '', 'g', 's', 'e', 'a', '', 'g', 's', 'e', 'a', '', 'g', 's', 'e', 'a', '', 'g', '', 'g', 's', 'e', 'a'] },
      { name: "Maria", statuses: ['g', '', 'e', 'a', '', 'g', 'e', 's', 'e', 'a', '', 'g', 's', 'e', 'a', '', 'g', 's', 'e', 'a', '', 'g', 's', 'e', 'a', '', '', 'g', '', 'g', 's'] },
      { name: "Pedro", statuses: ['s', 's', 'a', 'g', '', 'g', 'e', 'a', 's', 'e', 'a', '', 'g', 's', 'e', 'a', '', 'g', 's', 'e', 'a', '', 'g', 's', 'e', 'a', '', 'g'] },
      { name: "Jose", statuses: ['g', 's', 'a', 'g', 'e', 's', 'e', 'a', '', 'g', 's', 'e', 'a', '', 'g', 's', 'e', 'a', '', 'g', 's', 'e', 'a', '', 'g', 's', 'e', 'a', 'e', 'a', 'a'] }
    ]
    this.data.statuses
    this.highestNumElements = this.data.map((data)=> data.statuses.length).sort().pop();
    this.indexes = Array.from(new Array(this.highestNumElements),(val,index)=>index+1);
  }

  getFilteredData() {
    return this.searchText.length > 0 ? this.data.filter((data) => {
      return data.name.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1
    }) : this.data
  }


        //   substitute(str) {
        //       var mapObj = {
        //              cat:"dog",
        //              dog:"goat",
        //              goat:"cat"
        //     };
        //       str = str.replace(/cat|dog|goat/gi, function(matched){
        //         return mapObj[matched];
        //       });
        //   }


}
