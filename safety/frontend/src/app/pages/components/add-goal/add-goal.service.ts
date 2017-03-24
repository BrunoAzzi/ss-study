import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';

@Injectable()
export class AddGoalService {



  constructor(private http: Http) { }

  public getData() {
    return this.http.get('http://localhost:8080/template/getAllMeta').map(
      (res) => res.json()
    );
  }

  insertMeta(idUsuario, progreso,comprometimento,meta,tematica) {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    var json = JSON.stringify({"idUsuario":idUsuario, "progresso":progreso, "comprometimento" :comprometimento ,  "meta":meta, "tematica": tematica});
    return this.http.post('http://localhost:8080/template/insertMeta', json, options).map(res => res.json());
    ;
  }

  insertMetaDias(id, dia) {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    var json = JSON.stringify({ "id": id,  "dia": dia });

    return this.http.post('http://localhost:8080/template/insertMetaDias', json, options).map(res => res.json());
    ;
  }




}
