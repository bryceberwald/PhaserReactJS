import Phaser from 'phaser';
import UiButton from '../classes/UiButton';
import { config } from '../config/configuration';

export default class TitleScene extends Phaser.Scene {

    constructor() {
        super("Title");
    };

    create() {
        // Add the pre game background image
        this.background = this.add.image(0, 0, 'background');
        
        // Scale the pre game background image to the size of users window
        this.background.setScale(
            (config.width / this.background.width) * 2, 
            (config.height / this.background.height) * 2
        );
        
        // Add title text to the screen with respect to users window size
        this.titleText = this.add.text(
            config.width / 2, 
            (config.height / 2) * 0.4, 
            'My Game', 
            { fontSize: '48px', fill: '#fff' }
        );

        // Set game title text origin to 50% with respect to users window size
        this.titleText.setOrigin(0.5);
        
        // Create a 'Play Now' button below the title text with respect to users window size
        this.playGameButton = new UiButton(
            this, 
            config.width / 2,
            config.height / 2, 
            'button_unpressed', 
            'button_pressed', 
            'Play', 
            this.startScene.bind(this, 'Game')
        );
        
        // Scale 'Play Now' button's width & height to 75%
        this.playGameButton.setScale(0.75);
    };
    
    startScene(targetScene) {
        this.scene.start(targetScene);
    };

};