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
      mapArea: this.mapArea,
      monitoring: this.monitoring,
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

    this.game.load.image('map', window["angular"].phaserState.mapImage.url);
    for (var index = 0; index < window["angular"].phaserConfig['menu'].buttons.length; index++) {
      this.game.load.spritesheet(window["angular"].phaserConfig['menu'].buttons[index].name, window["angular"].phaserConfig['menu'].buttons[index].button, 64.4, 54);
      this.game.load.image('iten' + index, window["angular"].phaserConfig['menu'].buttons[index].item);

    }
  }



  create() {
    var map = this.game.add.sprite(0, 0, 'map');
    map.inputEnabled = true;
    this.game.world.setBounds(-map._frame.sourceSizeW * 2, - map._frame.sourceSizeH * 2, map._frame.sourceSizeW * 5, map._frame.sourceSizeH * 5);

    window["angular"].zoom = (window["angular"].phaserConfig['width'] / map._frame.sourceSizeW);
    window["angular"].maxZoom = (window["angular"].phaserConfig['width'] / map._frame.sourceSizeW) * Math.pow(1.25, 5);
    window["angular"].minZoom = (window["angular"].phaserConfig['width'] / map._frame.sourceSizeW) * Math.pow(0.8, 5);
    var floor = this.game.world.game.add.text(10, 100, window["angular"].phaserState["mapImage"].titulo, { fontSize: '20px', fill: '#3c3c3c' });
    floor.fixedToCamera = true;
    window["static"].push(floor);
    this.game.physics.arcade.enable(map);


    if (!window["angular"].view) {
      this.mapArea();
    } else {
      this.monitoring();
    }

    window["camera"] = this.game.camera;
    window["mouse"] = this.game.input;
    window["world"] = this.game.world.game.world;
    this.zoomSetting();

  }

  update() {


  }


  mapArea() {
    this.game.input.addMoveCallback(this.onMove, this);

    var menuButtons;
    var locationX = 0;
    var locationY = -145;

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
    }

  }

  onInputDown(button) {
    this.isMoving = false;

    for (var index = 0; index < window["angular"].phaserConfig['menu'].buttons.length; index++) {
      if (button.key == window["angular"].phaserConfig['menu'].buttons[index].name) {

        this.temp = this.game.add.button(window["mouse"].position.x, window["mouse"].position.y, 'iten' + index, undefined, 0, 0, 0);
        this.temp.position.x = ((window["mouse"].position.x + this.game.camera.position.x) / window["angular"].zoom) - (this.temp._frame.centerX);
        this.temp.position.y = ((window["mouse"].position.y + this.game.camera.position.y) / window["angular"].zoom) - (this.temp._frame.centerY);
        this.temp.inputEnabled = true;
        this.temp.input.enableDrag(true);
        this.temp.events.onDragStart.add(this.onDragStart, this);
        this.temp.events.onDragStop.add(this.onDragStop, this);
      }
    }

  }

  onMove(pointer, x, y) {
    if (this.temp) {
      if (window["mouse"].mousePointer.isDown) {
        this.temp.position.x = ((x + this.game.camera.position.x) / window["angular"].zoom) - (this.temp._frame.centerX);
        this.temp.position.y = ((y + this.game.camera.position.y) / window["angular"].zoom) - (this.temp._frame.centerY);

      } else {
        this.temp = undefined;
        this.isMoving = true;
      }
    } else {
      if (window["mouse"].activePointer.isDown && this.isMoving) {
        window["camera"].y -= window["mouse"].mouse.event.movementY;
        window["camera"].x -= window["mouse"].mouse.event.movementX;
      }
    }
  }

  scrollEvent() {
    if (window["mouse"].mouse.wheelDelta > 0) {
      window["angular"].zoom *= 1.25;
      if (window["angular"].zoom > window["angular"].maxZoom) {
        window["angular"].zoom = window["angular"].maxZoom;
      }
    } else {
      window["angular"].zoom *= 0.8;
      if (window["angular"].zoom < window["angular"].minZoom) {
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


  monitoring() {

  }



}
