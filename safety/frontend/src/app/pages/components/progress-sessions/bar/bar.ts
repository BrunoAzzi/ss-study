import{Component} from '@angular/core'

import 'style-loader!./progress-sessions.scss';
import {ProgressSessionsService} from './progress-sessions.service';

@Component({
    selector:'progress-sessions',
    template: `
    <div class="progress">
      <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width:20%">
    </div>
    `,
    providers:[ProgressSessionsService]
})

export class ProgressSessions{

  public minSession;
  public maxSession;

  constructor(private pgService: ProgressSessionsService) {
  }

  ngOnInit(){
    this.pgService.getAllCoachee().subscribe( (data)=>this.minSession = data[0].min_sessao);
    this.pgService.getAllCoachee().subscribe( (data)=>this.maxSession = data[0].max_sessao);
  }


}
