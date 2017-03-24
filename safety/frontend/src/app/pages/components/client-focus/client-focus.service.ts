import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper} from '../../../theme';
import {Http} from '@angular/http';

@Injectable()
export class ClientFocusService {

  constructor(private _baConfig:BaThemeConfigProvider, private http: Http) {
  }


   public minValue = 50;

  getValue(){
    return this.minValue;
  }

  getData(){
    return this.http.get('http://localhost:8080/template/getAllCoachee').map(
      (res)=>res.json()
    );
  }



  //getData() {
  //  let pieColor = this._baConfig.get().colors.custom.dashboardPieChart;
  //    let pieColor2 = this._baConfig.get().colors.custom.dashboardPieChart;
  //  return [
  //    {
  //      color: pieColor,
  //      description: 'Alimentação',
  //      idGraph: 'alimentacao',
  //      icon: 'ion-android-restaurant',
  //    }, {
  //      color: pieColor2,
  //      description: 'Exercicio',
  //      idGraph: 'execicio',
  //      icon: 'ion-android-bicycle',
  //    }, {
  //      color: pieColor,
  //      description: 'Estresse',
  //      idGraph: 'estresse',
  //      icon: 'ion-fireball',
  //    }, {
//        color: pieColor,
//        description: 'Prevenção',
//        idGraph: 'prevencao',
//        icon: '  ion-umbrella',
//      },{
  //      color: pieColor,
  //      description: 'Relacionamento',
  //      idGraph: 'relacionamento',
  //      icon: 'ion-android-favorite-outline',
  //    },
//    ];
//  }
}
