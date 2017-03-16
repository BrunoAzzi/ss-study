import{Component} from '@angular/core'
import {ClientProfileService} from './client-profile.service';

@Component({
    selector:'client-profile',
    template: `
    <div  class="col-md-6 clearfix content-heading" style="margin-bottom: 20px;">
      <div class="pull-left col-md-3"><img class="  " src="{{ ( 'Nasta' | baProfilePicture ) }}" width="100%" ></div>
        <div class="pull-left col-md-9">

          <table>
            <tr>
              <td><h1>{{nomeCoachee}} |</h1></td>
              <td><h1> {{funcaoCoachee}}</h1></td>
            </tr>
            <tr>
              <td><h3>{{empresaCoachee}} <i class="ion-ios-location-outline"></i>  {{localidadeCoachee}}</h3> </td>
            </tr>
            <tr>
              <td><p>Peso: <b>{{pesoCoachee}}</b></p></td>
              <td><p>IMC: <b>{{imcCoachee}} </b></p></td>
            </tr>
            <tr>
              <td><p>Altura: <b>{{alturaCoachee}}</b></p></td>
            </tr>
            <tr>
              <td><p>Circ. Cintura: <b>{{cinturaCoachee}} </b></p></td>
              <td><p>Perfíl:<b>{{perfilCoachee}}</b></p></td>
            </tr>
          </table>
      </div>
    </div>
    `,
    providers:[ClientProfileService],
})

export class ClientProfile{
  constructor(private clintProfileService:ClientProfileService){}

    nomeCoachee;
    empresaCoachee;
    funcaoCoachee;
    localidadeCoachee;
    pesoCoachee;
    alturaCoachee;
    cinturaCoachee;
    imcCoachee;
    perfilCoachee;


ngOnInit(){
  this.clintProfileService.getData().subscribe( (data)=>this.nomeCoachee = data[0].nomeCoachee);
  this.clintProfileService.getData().subscribe( (data)=>this.empresaCoachee = data[0].empresaCoachee);
  this.clintProfileService.getData().subscribe( (data)=>this.funcaoCoachee = data[0].funcaoCoachee);
  this.clintProfileService.getData().subscribe( (data)=>this.localidadeCoachee = data[0].localidadeCoachee);
  this.clintProfileService.getData().subscribe( (data)=>this.pesoCoachee = data[0].pesoCoachee);
  this.clintProfileService.getData().subscribe( (data)=>this.alturaCoachee = data[0].alturaCoachee);
  this.clintProfileService.getData().subscribe( (data)=>this.cinturaCoachee = data[0].cinturaCoachee);
  this.clintProfileService.getData().subscribe( (data)=>this.imcCoachee = data[0].imcCoachee);
  this.clintProfileService.getData().subscribe( (data)=>this.perfilCoachee = data[0].perfilCoachee);

}




}
