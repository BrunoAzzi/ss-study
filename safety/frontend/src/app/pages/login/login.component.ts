import {Component} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {LoginService} from './login.service'

import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


import 'style-loader!./login.scss';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  providers:[LoginService]

})
export class Login {

  public form:FormGroup;
  public email:AbstractControl;
  public password:AbstractControl;
  public submitted:boolean = false;
  public log;
  public token: string;
  isError : boolean;
  isSucess : boolean;
  currentUserLog;


  constructor( private login:LoginService,private router: Router) {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.currentUserLog = localStorage.getItem('currentUser');
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
          if (localStorage.getItem('currentUser')) {
            this.router.navigate(['/coach'], { queryParams: { returnUrl: state.url }});
              // logged in so return true
              return true;
          }

          // not logged in so redirect to login page with the return url and return false

          return false;
      }



ngOnInit() {


//  localStorage.clear();
  if(this.currentUserLog !=null){
    console.log("currentUserLog:"+ this.currentUserLog)
    this.router.navigate(['/pages/coach']);
  }else{

  }

}

seguir(login, ttoken)
{

  localStorage.setItem('currentUser', JSON.stringify({ login: login, token: ttoken }))
  this.isSucess= true;
  console.log("Sucess!");
  this.router.navigate(['/pages/coach']);
}


  loginAcess(login, password ){
    var LogCurrentUser = localStorage.getItem('currentUser');
    console.log("currentUser:"+ LogCurrentUser);
    this.login.loginSmartHealth(login, password).subscribe(data=> this.token = JSON.stringify(data),error=> this.isError = true,() => this.seguir(login, this.token));





      /*if(LogCurrentUser != null){
          this.isSucess= true;
          console.log("Sucess!");
          this.router.navigate(['/pages/coach']);
      }else{
        console.log("fail")
      }*/



}

}
