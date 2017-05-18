import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'status-ano',
  templateUrl: 'status_ano.template.html',
  styleUrls: ['./status_ano.component.scss']
})
export class StatusAnoComponent implements OnInit, OnDestroy {
  private ctx:any;
    private cvs:any;
    private parent:any;
  ngOnInit() {
    //  this.ctx = this.element.nativeElement.children[0].getContext('2d');
    //  this.cvs = this.element.nativeElement.children[0];
    //  this.parent = this.element.nativeElement;
    //  this.refresh();
    //  this.initFlag = true;
   }

   ngOnDestroy() {
    //  if (this.chart) {
    //    this.chart.destroy();
    //    this.chart = null;
    //  }
    //  if (this.legendTemplate) {
    //    this.legendTemplate.destroy();
    //    this.legendTemplate = null;
    //  }
   }

  //  private get data() {
  //   //  return this._data;
  //  }

  loaded = false;
  constructor( ) { }

  maxnumber: number = 300; //depende dos dados
  steps: number = 4; // não muda
  scale = Math.ceil(this.maxnumber / this.steps);


  // lineChart

  public lineChartData:Array<any> = [

    {lineTension:0, borderWidth:1.5, data: [14,7,13,7,18,10,15,8,11,10,17,10,7,3,19,14,15,9,15,3,13,18,14,14,14,15,4,18,19,18,12], label: 'Irritado', fill: false, tooltip: false, backgroundColor: "rgba(206, 0, 0, 0.4)", borderColor: "#f93535"},
    {lineTension:0, borderWidth:1.5, data: [50,46,8,14,20,60,44,59,29,17,43,43,20,40,50,44,38,44,60,24,59,8,45,41,21,28,47,47,34,15,7], label: 'Triste', fill: false , tooltip: false, backgroundColor: "rgba(19, 175, 203, 0.4)", borderColor: "rgb(19, 175, 203)"},
    {lineTension:0, borderWidth:1.5, data: [186,190,83,197,196,118,171,127,132,112,107,50,77,87,87,130,154,56,50,122,173,188,165,159,171,116,123,182,54,85,121], label: 'Contente', fill: false , tooltip: false, backgroundColor: "rgba(0, 167, 126, 0.4)", borderColor: "rgb(0, 167, 126)"},
    {lineTension:0, borderWidth:1.5, data: [90,41,97,48,38,72,70,29,70,39,54,71,38,37,95,63,100,92,71,33,99,29,46,34,37,35,94,53,93,74,33], label: 'Empolgado', fill: false , tooltip: false, backgroundColor: "rgba(243, 192, 50, 0.4)", borderColor: "rgb(243, 192, 50)"},
    {lineTension:0, borderWidth:1.5, data: [33,43,31,43,17,49,42,39,18,11,37,38,19,36,13,35,22,32,38,18,36,16,34,23,15,10,42,39,24,12,50], label: 'Não Respondido', fill: false , tooltip: false, backgroundColor: "rgba(153, 153, 153, 0.4)", borderColor: "rgb(153, 153, 153)"}
  ];
  colors = [ {  } ];
  public lineChartLabels:Array<any> = [1,,,,,,,,,,,,,,,16,,,,,,,,,,,,,,,31];
//  public lineChartLabels:Array<any> = [1,'Dia 2','Dia 3','Dia 4','Dia 5','Dia 6','Dia 7','Dia 8','Dia 9','Dia 10','Dia 11','Dia 12','Dia 13','Dia 14', '15','Dia 16','Dia 17','Dia 18','Dia 19','Dia 20','Dia 21','Dia 22','Dia 23','Dia 24','Dia 25','Dia 26','Dia 27','Dia 28','Dia 29','Dia 30',31];
  public lineChartOptions:any = {
     legend: {lineWidth: 0.1,  display: false},
     tooltips: {       enabled: false  },
    fill: false,
    responsive: true,
       maintainAspectRatio: false,
    //elements: { point: {radius: 0, hoverRadius:7, hitRadius:5}},
    elements: { point: {radius: 0, hoverRadius:0, hitRadius:0}},
    scales: {
      xAxes: [{
                //ticks:{autoSkipPadding:270},
                gridLines: { color: "rgba(0, 0, 0, 0)"},
                scaleLabel: { display: false, labelString: 'Dias'}  }
             ],
      yAxes: [{
                ticks: { beginAtZero: true, fixedStepSize	: this.scale},
                scaleLabel: {display: false, labelString: 'Trabalhadores', positionLabelString: 'bottom'}
            }]
      }


    };

    public lineChartLegend:boolean = false;
    public lineChartType:string = 'line';

    // public randomize():void {
    //   let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    //   for (let i = 0; i < this.lineChartData.length; i++) {
    //     _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
    //     for (let j = 0; j < this.lineChartData[i].data.length; j++) {
    //       _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
    //     }
    //   }
    //   this.lineChartData = _lineChartData;
    // }

    // events
    public chartClicked(e:any):void {
      console.log(e);
    }



    public chartHovered(e:any):void {
      console.log(e);
    }


  }
