import BasePhase from "./basePhase.js";
import { completedPhases } from './splashScreen.js';

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
            "soundKey":"soundPigeon",
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

        this.soundContinue = this.sound.add('soundContinueButton');

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
        this.continueBtn = this.add.image(this.width/1.12, this.height/20, 'advanceBtn').setScale(this.width/600)
        
        // Torna o botão de pause clicável
        this.continueBtn.setInteractive()

        this.anims.create({
            key: 'SpriteLoading', // Nome da animação
            frames: this.anims.generateFrameNumbers('spriteLoading', {start:0, end:5}), 
            frameRate: 3, 
            repeat: 0
        })

        this.spriteLoading1 = this.add.sprite(this.continueBtn.x - this.continueBtn.displayWidth, this.continueBtn.y, 'spriteLoading')
        .setScale(this.width/200)
        .setInteractive()
        .setVisible(false);
    }

    updateContinueButton(){
        // Cria o botão de segurar de pular o tutorial
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
                completedPhases['Tutorial'] = true
                this.soundContinue.play({ volume: 0.5 }); 
                this.time.delayedCall(1000, () => {
                    this.soundContinue.stop();
                });
                this.soundTarget.stop();
                this.scene.start("LevelSelect");
                this.scene.stop(this.phaseKey);
                this.scene.get('Select2');
            }
        }else{
            this.spriteLoading1.anims.stop().setFrame(0).setVisible(false);
        }
    }
}

