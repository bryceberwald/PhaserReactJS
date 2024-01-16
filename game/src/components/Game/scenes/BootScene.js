import Phaser from 'phaser';

export default class BootScene extends Phaser.Scene {

    constructor() {
        super("Boot");
    };


    preload() {
        this.loadImages();
        this.loadAudio();
    };
    
    loadImages() {
        console.log("BootScene loadImages() function called.");
        this.load.image("background", "./assets/images/background.png");
        this.load.image("button_unpressed", "./assets/images/unpressed.png");
        this.load.image("button_pressed", "./assets/images/pressed.png");
    };

    loadAudio() {
        console.log("BootScene loadAudio() function called.");
    };
    
    create() {
        console.log("BootScene create() function called.");
    };

    update(){
        console.log("BootScene update() function called.");
        this.scene.start("Title");
    };
    
};