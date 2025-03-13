export default class LevelSelect extends Phaser.Scene {
    constructor() {
        super("LevelSelect");
    }
    create() {

        this.selectBg = this.add.image(this.scale.width/2, this.scale.height/2, 'selectBg').setDisplaySize(this.scale.width, this.scale.height);
        this.selectTutorial = this.add.image(this.scale.width/3 - 90, this.scale.height/3, 'selectTutorial').setScale(0.25).setInteractive();
        this.selectCriative = this.add.image(this.scale.width/3 - 90, this.scale.height/3 + 130, 'selectCriative').setScale(0.25).setInteractive();
        this.selectPhase1 = this.add.image(this.scale.width/3 + 225, this.scale.height/3 - 34, 'selectPhase1').setScale(0.8).setInteractive();
        this.selectPhasesUnf = this.add.image(this.scale.width/3 + 225, this.scale.height/3 + 34, 'selectPhasesUnf').setScale(0.8).setInteractive();
        this.selectPhasesUnf = this.add.image(this.scale.width/3 + 225, this.scale.height/3 + 98, 'selectPhasesUnf').setScale(0.8).setInteractive();
        this.selectPhasesUnf = this.add.image(this.scale.width/3 + 225, this.scale.height/3 + 164, 'selectPhasesUnf').setScale(0.8).setInteractive();

        this.selectCriative.on('pointerdown', () => {        
            this.scene.start('Criative');    
        });

        this.selectTutorial.on('pointerdown', () => {
            this.scene.start('Tutorial');
        });

        this.selectPhase1.on('pointerdown', () => {
            this.scene.start('Phase1');
        });
    }; 

        
    update() {

    };

}