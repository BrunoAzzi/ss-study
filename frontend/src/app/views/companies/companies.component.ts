import { Component, ViewChild} from '@angular/core';

@Component({
    selector: 'companies',
    templateUrl: 'companies.template.html',
    styleUrls: ['./companies.component.scss'],
})
export class CompaniesComponent {
  @ViewChild('tabGroup') tabGroup;

  canvas: any;
  ctx: any;
  // private width: number = 800;
  // private height: number = 600;


    onSelectChange = ($event: any): void => {

      this.canvas = document.getElementById('cnvs');
      // this.canvas.width = this.width;
      // this.canvas.height = this.height;
    //  this.canvas.refresh();
      document.body.appendChild(this.canvas);
      this.ctx = this.canvas.getContext("2d");



      console.log(this.canvas);
      console.log('event => ', $event);
      console.log('index => ', $event.index);
    }
 }
