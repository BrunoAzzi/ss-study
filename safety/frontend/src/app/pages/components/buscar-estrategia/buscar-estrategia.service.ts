import { Injectable } from '@angular/core';
import { Http } from '@angular/http';



@Injectable()
export class BuscarEstrategiaService {


  constructor(private http: Http) { }

  public getDataEstresse() {
    return this.http.get('http://localhost:8080/template/getSubcategoriaJsonWordpress?urlwp=http://sshosting001.fiesc.com.br/wp-json/wp/v2/categories/?parent=5').map(
      (res) => res.json()
    );
  }

  public getDataAlimentacao() {
    return this.http.get('http://localhost:8080/template/getSubcategoriaJsonWordpress?urlwp=http://sshosting001.fiesc.com.br/wp-json/wp/v2/categories/?parent=3').map(
      (res) => res.json()
    );
  }

    public getDataExercicio() {
    return this.http.get('http://localhost:8080/template/getSubcategoriaJsonWordpress?urlwp=http://sshosting001.fiesc.com.br/wp-json/wp/v2/categories/?parent=4').map(
      (res) => res.json()
    );
  }
  public getDataPrevencao() {
    return this.http.get('http://localhost:8080/template/getSubcategoriaJsonWordpress?urlwp=http://sshosting001.fiesc.com.br/wp-json/wp/v2/categories/?parent=7').map(
      (res) => res.json()
    );
  }
  public getDataRelacionamento() {
    return this.http.get('http://localhost:8080/template/getSubcategoriaJsonWordpress?urlwp=http://sshosting001.fiesc.com.br/wp-json/wp/v2/categories/?parent=6').map(
      (res) => res.json()
    );
  }


}
