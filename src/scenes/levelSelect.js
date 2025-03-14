export default class LevelSelect extends Phaser.Scene {
    constructor() {
        super("LevelSelect");
    }
    create() {

        this.selectBg = this.add.image(this.scale.width*0.5, this.scale.height*0.5, 'selectBg').setDisplaySize(this.scale.width, this.scale.height);
        this.selectTutorial = this.add.image(this.scale.width*0.18, this.scale.height*0.3, 'selectTutorial').setScale(this.scale.width/4000).setInteractive();
        this.selectCriative = this.add.image(this.scale.width*0.18, this.scale.height*0.7, 'selectCriative').setScale(this.scale.width/4000).setInteractive();
        this.selectPhase1 = this.add.image(this.scale.width*0.6, this.scale.height*0.25, 'selectPhase1').setScale(this.scale.width/1000).setInteractive();
        this.selectPhasesUnf = this.add.image(this.scale.width*0.6, this.scale.height*0.42, 'selectPhasesUnf').setScale(this.scale.width/1000).setInteractive();
        this.selectPhasesUnf = this.add.image(this.scale.width*0.6, this.scale.height*0.58, 'selectPhasesUnf').setScale(this.scale.width/1000).setInteractive();
        this.selectPhasesUnf = this.add.image(this.scale.width*0.6, this.scale.height*0.75, 'selectPhasesUnf').setScale(this.scale.width/1000).setInteractive();

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