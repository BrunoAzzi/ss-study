import { Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';

import {ClientFocusService} from './client-focus.service';



import 'easy-pie-chart/dist/jquery.easypiechart.js';
import 'style-loader!./client-focus.scss';



@Component({
  selector: 'client-focus',
  templateUrl: './client-focus.html',
  providers:[ClientFocusService]
})
// TODO: move easypiechart to component

export class ClientFocus {

  public charts: Array<Object>;
  public teste= [];
  public minAlimentacao;
  public minExercicio;
  public minEstresse;
  public minPrevencao;
  public minRelacionamento;
  private _init = false;





  constructor(private _clientFocusService: ClientFocusService) {}

  ngOnInit(){
    this._clientFocusService.getData().subscribe( (data)=> this._updateAlimentacao(data[0].focoAlimentacao));
    this._clientFocusService.getData().subscribe( (data)=> this._updateExercicio(data[0].focoExercicio));
    this._clientFocusService.getData().subscribe( (data)=> this._updateEstresse(data[0].focoEstresse));
    this._clientFocusService.getData().subscribe((data) =>this._updatePrevencao(data[0].focoPrevencao));
    this._clientFocusService.getData().subscribe((data) =>this._updateRelacionamento(data[0].focoRelacionamento));
  }


  ngAfterViewInit() {

    if (!this._init) {
      this._loadClientFocus();
      //    this._updateAlimentacao();
      this._init = true;
      this._updateAlimentacao(0);
      this._updateExercicio(0);
      this._updateEstresse(0);
      this._updatePrevencao(0);
      this._updateRelacionamento(0);

    }
  }

  private _loadClientFocus() {

jQuery('.alimentacao ').each(function () {
    let chart2 = jQuery(this);
    chart2.easyPieChart({
      easing: 'easeOutBounce',
      onStep: function (from, to, percent) {
        jQuery(this.el).find('.percent').text(Math.round(percent));
      },
      barColor: jQuery(this).attr('data-rel'),
      trackColor: 'rgba(171, 171, 171, 0.46)',
      size: 84,
      scaleLength: 0,
      animation: 2000,
      lineWidth: 9,
      lineCap: 'round',
    });
  });

  jQuery('.exercicio ').each(function () {
      let chart2 = jQuery(this);
      chart2.easyPieChart({
        easing: 'easeOutBounce',
        onStep: function (from, to, percent) {
          jQuery(this.el).find('.percent').text(Math.round(percent));
        },
        barColor: jQuery(this).attr('data-rel'),
        trackColor: 'rgba(171, 171, 171, 0.46)',
        size: 84,
        scaleLength: 0,
        animation: 2000,
        lineWidth: 9,
        lineCap: 'round',
      });
    });


    jQuery('.estresse ').each(function () {
        let chart2 = jQuery(this);
        chart2.easyPieChart({
          easing: 'easeOutBounce',
          onStep: function (from, to, percent) {
            jQuery(this.el).find('.percent').text(Math.round(percent));
          },
          barColor: jQuery(this).attr('data-rel'),
          trackColor: 'rgba(171, 171, 171, 0.46)',
          size: 84,
          scaleLength: 0,
          animation: 2000,
          lineWidth: 9,
          lineCap: 'round',
        });
      });

      jQuery('.prevencao ').each(function () {
          let chart2 = jQuery(this);
          chart2.easyPieChart({
            easing: 'easeOutBounce',
            onStep: function (from, to, percent) {
              jQuery(this.el).find('.percent').text(Math.round(percent));
            },
            barColor: jQuery(this).attr('data-rel'),
            trackColor: 'rgba(171, 171, 171, 0.46)',
            size: 84,
            scaleLength: 0,
            animation: 2000,
            lineWidth: 9,
            lineCap: 'round',
          });
        });

        jQuery('.relacionamento ').each(function () {
            let chart2 = jQuery(this);
            chart2.easyPieChart({
              easing: 'easeOutBounce',
              onStep: function (from, to, percent) {
                jQuery(this.el).find('.percent').text(Math.round(percent));
              },
              barColor: jQuery(this).attr('data-rel'),
              trackColor: 'rgba(171, 171, 171, 0.46)',
              size: 84,
              scaleLength: 0,
              animation: 2000,
              lineWidth: 9,
              lineCap: 'round',
            });
          });
  }




  public _updateAlimentacao(minAlimentacao) {

    this.minAlimentacao = minAlimentacao;
    var valMinAlimentacao = this.minAlimentacao;
  //  console.log(this, this.minAlimentacao)
  //  console.log("Antes: ",valMinAlimentacao);
    jQuery(".alimentacao").each(function(index,alimentacao) {
  //  console.log("Dentro do each",valMinAlimentacao);
    jQuery(alimentacao).data('easyPieChart').update(  parseInt(valMinAlimentacao), 100);
  });
}

public _updateExercicio(minExercicio) {

  this.minExercicio = minExercicio;
  var valMinExercicio = this.minExercicio;
//  console.log(this, this.minExercicio)
//  console.log("Antes: ",valMinExercicio);
  jQuery(".exercicio").each(function(index,exercicio) {
//  console.log("Dentro do each",valMinExercicio);
  jQuery(exercicio).data('easyPieChart').update(  parseInt(valMinExercicio), 100);
});
}

public _updateEstresse(minEstresse) {

  this.minEstresse = minEstresse;
  var valMinEstresse = this.minEstresse;
  jQuery(".estresse").each(function(index,estresse) {
//  console.log("Dentro do each",valMinExercicio);
  jQuery(estresse).data('easyPieChart').update(  parseInt(valMinEstresse), 100);
});
}

public _updatePrevencao(minPrevencao) {

  this.minPrevencao = minPrevencao;
  var valMinPrevencao = this.minPrevencao;
//  console.log(this, this.minPrevencao)
//  console.log("Antes: ",valMinPrevencao);
  jQuery(".prevencao").each(function(index,prevencao) {
//  console.log("Dentro do each",valMinPrevencao);
  jQuery(prevencao).data('easyPieChart').update(  parseInt(valMinPrevencao), 100);
});
}



public _updateRelacionamento(minRelacionamento) {

  this.minRelacionamento = minRelacionamento;
  var valMinRelacionamento = this.minRelacionamento;
//  console.log(this, this.minRelacionamento)
//  console.log("Antes: ",valMinRelacionamento);
  jQuery(".relacionamento").each(function(index,relacionamento) {
//  console.log("Dentro do each",valMinRelacionamento);
  jQuery(relacionamento).data('easyPieChart').update(  parseInt(valMinRelacionamento), 100);
});
}


}
