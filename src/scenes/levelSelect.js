export default class LevelSelect extends Phaser.Scene {
    constructor() {
        super("LevelSelect");
    }
    create() {

        this.selectBg = this.add.image(this.scale.width/2, this.scale.height/2, 'selectBg').setDisplaySize(this.scale.width, this.scale.height);
        this.selectTutorial = this.add.image(this.scale.width/3 - 150, this.scale.height/3, 'selectTutorial').setScale(0.5).setInteractive();
        this.selectCriative = this.add.image(this.scale.width/3 - 150, this.scale.height/3 + 270, 'selectCriative').setScale(0.5).setInteractive();
        this.selectPhase1 = this.add.image(this.scale.width/3 + 455, this.scale.height/3 - 74, 'selectPhase1').setScale(1.5).setInteractive();
        this.selectPhasesUnf = this.add.image(this.scale.width/3 + 455, this.scale.height/3 + 64, 'selectPhasesUnf').setScale(1.5).setInteractive();
        this.selectPhasesUnf = this.add.image(this.scale.width/3 + 455, this.scale.height/3 + 198, 'selectPhasesUnf').setScale(1.5).setInteractive();
        this.selectPhasesUnf = this.add.image(this.scale.width/3 + 455, this.scale.height/3 + 342, 'selectPhasesUnf').setScale(1.5).setInteractive();

        this.selectCriative.on('pointerdown', () => {        
            this.scene.start('CreativeMode');    
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