import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { Component, Input, Output, OnInit } from '@angular/core';
import * as Phaser from 'phaser';


@Component({
  selector: 'app-my-phaser',
  templateUrl: './my-phaser.component.html',
  styleUrls: ['./my-phaser.component.scss']
})
export class MyPhaserComponent implements OnInit {

  @Input() phaserConfig: object;
  @Input() phaserState: object;
  @Input() view: boolean;

  game;
  angular;
  isMoving;
  temp;
  zoom;

  ngOnInit() {
    // global variable to comunicate angular with phaser
    this.zoom = 1;
    this.temp = undefined;
    window["static"] = [];
    window["angular"] = this;
    this.createPhaser(this.phaserConfig);
  }

  createPhaser(phaserConfig) {
    this.game = new Phaser.Game(phaserConfig.width, phaserConfig.height, Phaser.CANVAS, 'phaserTest', {
      preload: this.preload,
      create: this.create,
      update: this.update,
      actionOnClick: this.actionOnClick,
      onDragStart: this.onDragStart,
      onDragStop: this.onDragStop,
      mapearArea: this.mapearArea,
      monitoramento: this.monitoramento,
      onInputDown: this.onInputDown,
      onMove: this.onMove,
      scrollEvent: this.scrollEvent,
      zoomSetting: this.zoomSetting,
    });
  }


  preload() {
    this.isMoving = true;
    this.game.stage.backgroundColor = "#e9eced";
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.input.mouse.mouseWheelCallback = this.scrollEvent;

    //variaveis globais

    //mapa
    this.game.load.image('map', window["angular"].phaserState.mapImage.url);

    //Buttons Itens
    for (var index = 0; index < window["angular"].phaserConfig['menu'].buttons.length; index++) {
      this.game.load.spritesheet(window["angular"].phaserConfig['menu'].buttons[index].name, window["angular"].phaserConfig['menu'].buttons[index].button, 64.4, 54);
      this.game.load.image('iten', window["angular"].phaserConfig['menu'].buttons[index].item);
    }
  }



  create() {

    //always create  the map
    var map = this.game.add.sprite(0, 0, 'map');
    map.inputEnabled = true;

    this.game.world.setBounds(-map._frame.sourceSizeW*2, - map._frame.sourceSizeH*2, map._frame.sourceSizeW * 5, map._frame.sourceSizeH * 5);

    window["angular"].zoom = (window["angular"].phaserConfig['width'] / map._frame.sourceSizeW);
    window["angular"].maxZoom = (window["angular"].phaserConfig['width'] / map._frame.sourceSizeW)*Math.pow(1.25 , 5) ;
    window["angular"].minZoom = (window["angular"].phaserConfig['width'] / map._frame.sourceSizeW)*Math.pow(0.8 , 5);
    //floor for each map
    var floor = this.game.world.game.add.text(10, 100, window["angular"].phaserState["mapImage"].titulo, { fontSize: '20px', fill: '#3c3c3c' });
    floor.fixedToCamera = true;
    window["static"].push(floor);
    this.game.physics.arcade.enable(map);
    //Option just if is mapearArea view
    if (!window["angular"].view) {
      this.mapearArea();
    } else {
      this.monitoramento();
    }

    window["camera"] = this.game.camera;
    window["key"] = this.game.input;
    window["world"] = this.game.world.game.world;
    this.zoomSetting();
    //  window["static"].fixedToCamera = true;


  }

  update() {
    //console.log("update");
    //move camera
    

  }


  mapearArea() {
    this.game.input.addMoveCallback(this.onMove, this);

    var menuButtons;
    var itens;
    var locationX = 0;
    var locationY = -145;
    var tempButtons;
    var teste;

    for (var index = 0; index < window["angular"].phaserConfig['menu'].buttons.length; index++) {
      switch (window["angular"].phaserConfig['menu'].position) {
        case "top":
          locationY = 10;
          locationX += 65;
          break;
        case "down":
          locationX += 65;
          locationY = 730;
          break;
        case "right":
          locationX = 0;
          locationY += 55;
          break;
        case "left":
          locationX = 730;
          locationY += 55;
          break;

        default:
          break;
      }

      menuButtons = this.game.add.button(locationX, locationY, window["angular"].phaserConfig['menu'].buttons[index].name, undefined, this, 1, 1, 0);
      menuButtons.anchor.setTo(0.5, 0);
      menuButtons.inputEnabled = true;
      menuButtons.fixedToCamera = true;
      menuButtons.events.onInputDown.add(this.onInputDown, this);

      window["static"].push(menuButtons);

    }

  }

  actionOnClick(button) {
   

  }

  onDragStart(button) {

    console.log("TesteButtonDrag");
    this.isMoving = false;
    this.game.position = {
      x: button.position.x,
      y: button.position.y
    };
  }


  onDragStop(button) {
    button.fixedToCamera = false;
    if (button.position.x == this.game.position.x && button.position.y == this.game.position.y) {
      this.actionOnClick(button);
    } else {
      this.isMoving = true;
      //window["angular"].phaserConfig.callModal();

    }

  }

  onInputDown(button) {
    //var graphics;
    this.isMoving = false;
    this.game.canvas.style.backgroundImage = "iten";

    for (var index = 0; index < window["angular"].phaserConfig['menu'].buttons.length; index++) {
      if (button.key == window["angular"].phaserConfig['menu'].buttons[index].name) {

        this.temp = this.game.add.button(window["key"].position.x, window["key"].position.y, 'iten', undefined, 0, 0, 0);
        this.temp.position.x = ((window["key"].position.x + this.game.camera.position.x) / window["angular"].zoom) - (this.temp._frame.centerX);
        this.temp.position.y = ((window["key"].position.y + this.game.camera.position.y) / window["angular"].zoom) - (this.temp._frame.centerY);
        this.temp.inputEnabled = true;
        this.temp.input.enableDrag(true);
        this.temp.events.onDragStart.add(this.onDragStart, this);
        this.temp.events.onDragStop.add(this.onDragStop, this);

      }
    }

  }

  onMove(pointer, x, y) {
    if (this.temp) {
      if (window["key"].mousePointer.isDown) {
        this.temp.position.x = ((x + this.game.camera.position.x) / window["angular"].zoom) - (this.temp._frame.centerX);
        this.temp.position.y = ((y + this.game.camera.position.y) / window["angular"].zoom) - (this.temp._frame.centerY);

        // this.temp.position.x = x  - (this.temp._frame.centerX) + this.game.camera.position.x;
        //this.temp.position.y = y - (this.temp._frame.centerY) + this.game.camera.position.y;
      } else {
        this.temp = undefined;
        this.isMoving = true;
      }
    }else{
      if (window["key"].activePointer.isDown && this.isMoving) {
        window["camera"].y -= window["key"].mouse.event.movementY;// / window["angular"].zoom;
        window["camera"].x -= window["key"].mouse.event.movementX;// / window["angular"].zoom;
      }
    }
  }

  scrollEvent() {
    //window["static"].fixedToCamera = false;
    if (window["key"].mouse.wheelDelta > 0) {
      window["angular"].zoom *= 1.25;
      if(window["angular"].zoom > window["angular"].maxZoom){
        window["angular"].zoom = window["angular"].maxZoom;
      }
    } else {
      window["angular"].zoom *= 0.8;
      if(window["angular"].zoom < window["angular"].minZoom){
        window["angular"].zoom = window["angular"].minZoom;
      }
    }

    window["angular"].zoomSetting();
  }


  zoomSetting() {
    window["world"].scale.set(window["angular"].zoom, window["angular"].zoom);
    for (var index = 0; index < window["static"].length; index++) {
      window["static"][index].scale.set(1.0 / window["angular"].zoom, 1.0 / window["angular"].zoom);
    }
  }


  monitoramento() {
    //recebe como parametro o que será "desenhado" no mapa
    console.log("monitoramento");
  }



}
