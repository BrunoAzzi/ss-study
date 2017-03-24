import{Component} from '@angular/core'

import 'style-loader!./progress-sessions.scss';
import {ProgressSessionsService} from './progress-sessions.service';

@Component({
    selector:'progress-sessions',
    template: `
    <div class="container">
    <p>Você esta na sessão {{minSession}} de {{maxSession}}</p>
    <div class="progress">
      <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" [style.width]="minSession + '0%'">
    </div>
    </div>
  </div>
    `,
    providers:[ProgressSessionsService],

})

export class ProgressSessions{

  public minSession;
  public maxSession;


  constructor(private pgService: ProgressSessionsService) {

  }

  ngOnInit(){
    this.pgService.getData().subscribe( (data)=>this.minSession = data[0].minSessao);
    this.pgService.getData().subscribe( (data)=>this.maxSession = data[0].maxSessao);

  }


}
