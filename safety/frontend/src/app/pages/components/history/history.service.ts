import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper} from '../../../theme';
import {Http, Headers, RequestOptions} from '@angular/http';

@Injectable()
export class HistoryService {

  constructor(private http: Http) {}



  getData(){
    return this.http.get('http://localhost:8080/template/getAllMeta').map(
      (res)=>res.json()
    );
  }

  getAnotationsData(){
    return this.http.get('http://localhost:8080/template/getAllAnotacao').map(
      (res)=>res.json()
    );
  }


  insertAnotacao(idUsuario, anotacaoTitle, anotacao) {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    var json = JSON.stringify({ "idUsuario": idUsuario,  "anotacaoTitle": anotacaoTitle, "anotacao": anotacao });

    return this.http.post('http://localhost:8080/template/insertAnotacao', json, options).map(res => res.json());
    ;
  }

}
