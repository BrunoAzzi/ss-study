import {Component, ViewChild} from '@angular/core';
import {TabsModule} from "ngx-tabs";
import { ModalDirective } from 'ng2-bootstrap';

import 'style-loader!./coach.scss';

@Component({
  selector: 'coach',
  styleUrls: [],
  templateUrl: './coach.html'
})
export class Coach {

  @ViewChild('staticModal') childModal: ModalDirective;
    @ViewChild('staticModal2') childModal2: ModalDirective;

  constructor() {
  }

  showChildModal(): void {
    this.childModal.show();
  }

  hideChildModal(): void {
    this.childModal.hide();
  }

  showChildModal2(): void {
    this.childModal2.show();
  }

  hideChildModal2(): void {
    this.childModal2.hide();
  }

  ngOnInit(){
    var LogCurrentUser = localStorage.getItem('currentUser');
    console.log("this.token:"+ LogCurrentUser);
  }


}
