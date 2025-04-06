import { completedPhases } from './splashScreen.js';

export default class LevelSelect extends Phaser.Scene {
    constructor() {
        super("LevelSelect");

    }



    create() {

        //background
        this.selectBg = this.add.image(this.scale.width*0.5, this.scale.height*0.5, 'selectBg').setDisplaySize(this.scale.width, this.scale.height);
    

        // Se o usuário selecionar a imagem que remete à primeira fase, ele será direcionado para a primeira fase
        this.changeScene(this.selectTutorial, 'Tutorial');
        this.changeScene(this.selectPhase1, 'Phase1');
        this.changeScene(this.selectPhase2, 'Phase2');
        this.changeScene(this.selectPhase3, 'Phase3');
        this.changeScene(this.selectPhase4, 'Phase4');
        this.changeScene(this.selectCriative, 'CreativeMode');


    }; 

    unlockLevel() {
        if (this.unlockedPhases["Phase1"] === false) {
            this.selectPhase1.disableInteractive();
            console.log('Não era pra estar abrindo')
        }
    }

    changeScene(selectPhase, phaseKey) {
        selectPhase.on('pointerdown', () => {
            this.scene.launch('OverlayScene'); // Lança a cena sobreposta
            this.scene.bringToTop('OverlayScene');
            this.time.delayedCall(1000, () => {
                this.scene.start(phaseKey);
            });
        });

        this.buttonPhase1.on('pointerdown', () => {
            this.secene.start('Phase1');
        });

        if(completedPhases['Tutorial']){
            // Libera o botão da fase 1 e criativo
        }
        if(completedPhases['Phase1']){
            // Libera o botão da fase 2
        }
        if(completedPhases['Phase2']){

        }
        if(completedPhases['Phase3']){

        }
        if(completedPhases['Phase4']){

        }
    }

    
 
}