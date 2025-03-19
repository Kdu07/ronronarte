import BasePhase from "./basePhase.js";

// Classe de cena a ser exportada
export default class Phase0 extends BasePhase {
    constructor() {
        let configDict = {
            "completePhase":false,
            "backgroundKey":"bgTutorial",
            "artistKey":" ",
            "textArtist":[' '],
            "textPainting":[' '],
            "targetKey":"pigeon",
            "animKey":"flyPigeon",
            "soundKey":"pigeonSound",
        }

        // Configura a chave de classe e assets
        super('Phase0', configDict)
    }

    create(){
        this.continueButtonCreated = false;
        
        // Configura a animação do pombo voando
        this.anims.create({
            key: 'flyPigeon',
            frames: this.anims.generateFrameNumbers('pigeon', { start: 0, end: 3 }), // Define os frames do spritesheet que serão usados
            frameRate: 10, // Quantidade de frames por segundo
            repeat: -1 // Define que a animação será contínua
        });

        super.create();
    }

    update(){
        super.update()
        this.touchStartTime;
        this.spriteLoading1;
        // Se a pontuação atingiu 3 pontos, aparece o botão de pular tutorial.
        if (this.score > 3) {
            if (!this.continueButtonCreated){
                this.createContinueButton()
            }
            this.continueButtonCreated = true;
            this.updateContinueButton()
        }
    }

    createContinueButton() {
        this.hold1 = false;

        // Cria um botão de pause na tela
        this.continueBtn = this.add.image(this.width/1.05, this.height/27, 'continueBtn').setScale(this.width/1100)
        
        // Torna o botão de pause clicável
        this.continueBtn.setInteractive()

        this.anims.create({
            key: 'SpriteLoading', // Nome da animação
            frames: this.anims.generateFrameNumbers('spriteLoading', {start:0, end:5}), 
            frameRate: 3, 
            repeat: 0
        })

        this.spriteLoading1 = this.add.sprite(this.width/1.05, this.height/12, 'spriteLoading')
        .setScale(this.width/8000)
        .setInteractive()
        .setVisible(false);
    }

    updateContinueButton(){
        // Cria o botão de pular o tutorial
        this.continueBtn.on('pointerdown', (pointer) => {
            this.hold1 = true
        });

        this.continueBtn.on('pointerup', (pointer) => {
            this.hold1 = false
        });
        
        if (this.hold1){
            this.spriteLoading1.setVisible(true);
            this.spriteLoading1.anims.play('SpriteLoading',true);

            if (this.spriteLoading1.anims.currentFrame.index == 5){
                this.scene.start("Phase1");
                this.scene.stop(this.phaseKey);
            }
        }else{
            this.spriteLoading1.anims.stop().setFrame(0).setVisible(false);
        }
    }
}

