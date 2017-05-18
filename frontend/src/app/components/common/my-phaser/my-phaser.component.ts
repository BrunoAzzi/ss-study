import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { Component, Input, Output, OnInit } from '@angular/core';
import * as Phaser from 'phaser';
//import * as PIXI from 'pixi';
//var pixi =  require ('../../../node_modules/phaser/build/pixi.js');

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
  cursor;
  isMoving;
  temp;

  ngOnInit() {
    // global variable to comunicate angular with phaser
    console.log("TESTE PHASER");
    this.temp = undefined;
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
      updateGame: this.game,
      mapearArea: this.mapearArea,
      monitoramento: this.monitoramento,
      onInputDown: this.onInputDown,
      onMove: this.onMove,
      scrollEvent: this.scrollEvent,
    });
  }


  preload() {
    this.isMoving = true;
    this.game.stage.backgroundColor = "#f8fafb";
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    this.game.input.mouse.mouseWheelCallback = this.scrollEvent;
    //mapa
    this.game.load.image('map', window["angular"].phaserState.mapImage.url);
    var cursor = 0;
    // this.game.load.image('bgMap', 'src/assets/bgMenu.png');
    //Buttons Itens
    for (var index = 0; index < window["angular"].phaserConfig['menu'].buttons.length; index++) {
      this.game.load.spritesheet(window["angular"].phaserConfig['menu'].buttons[index].name, window["angular"].phaserConfig['menu'].buttons[index].button, 64.4, 54);
      this.game.load.image('iten', window["angular"].phaserConfig['menu'].buttons[index].item);
    }


  }

  create() {

    //always create  the map
    this.game.world.setBounds(0, 0, 2000, 2000);
    var map = this.game.add.sprite(0, 0, 'map');
    map.inputEnabled = true;
    //
    //floor for each map
    var floor = this.game.add.text(10, 100, window["angular"].phaserState["mapImage"].titulo, { fontSize: '20px', fill: '#3c3c3c' });
    floor.fixedToCamera = true;
    this.game.physics.arcade.enable(map);

    //Option just if is mapearArea view
    if (!window["angular"].view) {
      this.mapearArea();
    }else{
       this.monitoramento();
    }

    window["camera"] = this.game.camera;
    window["key"] = this.game.input;


  }

  update() {
    //move camera

    window["camera"] = this.game.camera;
    window["key"] = this.game.input;
    if (window["key"].activePointer.isDown && this.isMoving) {
      window["camera"].y -= window["key"].mouse.event.movementY;
      window["camera"].x -= window["key"].mouse.event.movementX;
    }


  }


  mapearArea() {
    this.game.input.addMoveCallback(this.onMove, this);


    var menuButtons;
    var itens;
    var locationX = 0;
    var locationY = -145;
    var tempButtons;

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
      menuButtons.fixedToCamera = true;
      menuButtons.anchor.setTo(0.5, 0);
      menuButtons.inputEnabled = true;
      menuButtons.fixedToCamera = true;
      menuButtons.events.onInputDown.add(this.onInputDown, this);
    }
  }

  actionOnClick(button) {


  }

  onDragStart(button) {

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

    var graphics;
    this.isMoving = false;
    this.game.canvas.style.backgroundImage = "iten";

    for (var index = 0; index < window["angular"].phaserConfig['menu'].buttons.length; index++) {
      if (button.key == window["angular"].phaserConfig['menu'].buttons[index].name) {

        this.temp = this.game.add.button(button.centerX / 2, button.centerY / 2, 'iten', undefined, 0, 0, 0);

        this.temp.input.enableDrag();
        this.temp.events.onDragStart.add(this.onDragStart, this);
        this.temp.events.onDragStop.add(this.onDragStop, this);
        /*
                graphics = this.game.add.graphics(0, 0);
        
                graphics.lineStyle(1, 0x00a77e, 1);
                graphics.beginFill(0xffffff, 0.6);
                graphics.drawCircle(this.temp._frame.centerX, this.temp._frame.centerY, 30);
        
                this.temp.addChild(graphics);
                 */

      }
    }

  }

  onMove(pointer, x, y) {
    if (this.temp) {
      if (window["key"].mousePointer.isDown) {
        this.temp.position.x = x - (this.temp._frame.centerX) + this.game.camera.position.x;
        this.temp.position.y = y - (this.temp._frame.centerY) + this.game.camera.position.y;
      } else {
        this.temp = undefined;
        this.isMoving = true;
      }
    }
  }

  scrollEvent(game) {
    if (window["key"].mouse.wheelDelta > 0) {
      console.log("scroll up");
    } else {
      console.log("scroll down");
    }

  }


  monitoramento() {
    //recebe como parametro o que será "desenhado" no mapa
    console.log("monitoramento");
  }



}
