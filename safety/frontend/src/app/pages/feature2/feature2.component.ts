import {Component, ViewChild} from '@angular/core';
import {TabsModule} from "ngx-tabs";
import { ModalDirective } from 'ng2-bootstrap';
import {RADIO_GROUP_DIRECTIVES} from "ng2-radio-group";

@Component({
  selector: 'feature2',
  styleUrls: [],
  templateUrl: './feature2.html'
})
export class Feature2 {
  @ViewChild('staticModal') childModal: ModalDirective;

  rememberMe: boolean = false;
    sortBy: string = "date";
    orderBy: string[] = ["rating", "comments"];

  constructor() {
  }

  showChildModal(): void {
    this.childModal.show();
  }

  hideChildModal(): void {
    this.childModal.hide();
  }

}
