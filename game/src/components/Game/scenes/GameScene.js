import Phaser from 'phaser';

export default class GameScene extends Phaser.Scene {

    constructor() {
        super("Game");
    };

    init() {
        console.log("GameScene init() function is called.");
    };

    preload() {
        console.log("GameScene preload() function is called.");
    };

    create() {
        console.log("GameScene create() function is called.");
    };

    update() {
        console.log("GameScene update() function is called.");
    };
};