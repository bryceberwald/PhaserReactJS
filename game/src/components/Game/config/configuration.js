import Phaser from "phaser";
import BootScene from "../scenes/BootScene.js";
import TitleScene from "../scenes/TitleScene.js";
import GameScene from "../scenes/GameScene.js";

export const config = {
  width: 1280,
  height: 720,
  backgroundColor: "black",
  parent: "Game-Container",
  dom: {
    createContainer: true
  },
  scene: [
    BootScene,
    TitleScene,
    GameScene,
  ],
  scale: {
    type: Phaser.AUTO,
    mode: Phaser.Scale.FIT, // .Auto
    autoCenter: Phaser.Scale.CENTER_BOTH,
    zoom: 1,
  },
  physics: {
    default: 'arcade',
    arcade: {
        gravity: { y: 0 },
        debug: false,
    },
  },
};

export const Game = new Phaser.Game(config);