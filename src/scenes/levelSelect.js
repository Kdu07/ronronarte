import { completedPhases } from './splashScreen.js';

export default class LevelSelect extends Phaser.Scene {
    constructor() {
        super("LevelSelect");

    }
    create() {
        this.scale.startFullscreen();
        this.buttonScale = this.scale.width/10050;
        this.lockScale = this.scale.width/900;

        //background
        this.selectBg = this.add.image(this.scale.width*0.5, this.scale.height*0.5, 'selectBg').setDisplaySize(this.scale.width, this.scale.height);
     

        this.splashCentral = this.add.image(this.scale.width*0.5, this.scale.height*0.33, 'splashTutorial')
        .setScale(this.scale.width/3500);
        // adiciona botão de tutorial
        this.tutorialButton = this.add.image(this.scale.width*0.237, this.scale.height*0.33, 'tutorialButton').setInteractive()
        .setScale(this.scale.width/1500);

        // adiciona o botão do modo Criativo
        this.criativeButton = this.add.image(this.scale.width*0.762, this.scale.height*0.33, 'criativeButton').setVisible(false)
        .setScale(this.scale.width/1500);
        this.criativeButtonBlocked = this.add.image(this.scale.width*0.762, this.scale.height*0.33, 'criativeButtonBW')
        .setScale(this.scale.width/1500);
        this.lockCriative = this.add.image(this.scale.width*.762, this.scale.height*0.33, 'lock')
        .setScale(this.lockScale);

        // adiciona os botões e textos da fase 1 (tanto bloqueados quanto desbloqueados)
        this.button1PhaseBlocked = this.add.image(this.scale.width*0.2, this.scale.height*0.67, 'phase1ButtonBW')
        .setScale(this.buttonScale);
        this.frameBW1 = this.add.image(this.scale.width*0.2, this.scale.height*0.67, 'frameBW')
        .setScale(this.scale.width/450);
        this.lock1 = this.add.image(this.scale.width*0.2, this.scale.height*0.67, 'lock')
        .setScale(this.lockScale)
        this.button1Phase = this.add.image(this.scale.width*0.2, this.scale.height*0.67, 'phase1Button').setVisible(false)
        .setScale(this.buttonScale)
        this.squareFrame1 = this.add.image(this.scale.width*0.2, this.scale.height*0.67, 'squareFrame').setVisible(false)
        .setScale(this.scale.width/450)

        this.add.text(this.button1PhaseBlocked.x - this.button1PhaseBlocked.displayWidth/3, this.scale.height*0.49, 'Fase 1:', {
            fontFamily: 'font1',
            fontSize:this.scale.width/60,
            color: '#000000'
        });
        this.add.text(this.button1PhaseBlocked.x - this.button1PhaseBlocked.displayWidth/2.3, this.scale.height*0.81, 'Alvos: 3', {
            fontFamily: 'font1', 
            fontSize: this.scale.width/60,
            color:'#000000'
        });

        // adiciona os botões e textos da fase 2 (tanto bloqueados quanto desbloqueados)
        this.button2PhaseBlocked = this.add.image(this.scale.width*0.4, this.scale.height*0.67, 'phase2ButtonBW')
        .setScale(this.scale.width/5150);
        this.frameBW2 = this.add.image(this.scale.width*0.4, this.scale.height*0.67, 'frameBW')
        .setScale(this.scale.width/450);
        this.lock2 = this.add.image(this.scale.width*0.4, this.scale.height*0.67, 'lock')
        .setScale(this.lockScale)
        this.button2Phase = this.add.image(this.scale.width*0.4, this.scale.height*0.67, 'phase2Button').setVisible(false)
        .setScale(this.scale.width/5150)
        this.squareFrame2 = this.add.image(this.scale.width*0.4, this.scale.height*0.67, 'squareFrame').setVisible(false)
        .setScale(this.scale.width/450)

        this.add.text(this.button2PhaseBlocked.x - this.button2PhaseBlocked.displayWidth/3, this.scale.height*0.49, 'Fase 2:', {
            fontFamily: 'font1', 
            fontSize: this.scale.width/60,
            color: '#000000'
        });
        this.add.text(this.button2PhaseBlocked.x - this.button2PhaseBlocked.displayWidth/2.5, this.scale.height*0.81, 'Alvos: 5', {
            fontFamily: 'font1', 
            fontSize: this.scale.width/60,
            color:'#000000'
        });

        // adiciona os botões e textos da fase 3 (tanto bloqueados quanto desbloqueados)
        this.button3PhaseBlocked = this.add.image(this.scale.width*0.6, this.scale.height*0.67, 'phase3ButtonBW')
        .setScale(this.scale.width/14500);
        this.frameBW3 = this.add.image(this.scale.width*0.6, this.scale.height*0.67, 'frameBW')
        .setScale(this.scale.width/450);
        this.lock3 = this.add.image(this.scale.width*0.6, this.scale.height*0.67, 'lock')
        .setScale(this.lockScale)
        this.button3Phase = this.add.image(this.scale.width*0.6, this.scale.height*0.67, 'phase3Button').setVisible(false)
        .setScale(this.scale.width/14500)
        this.squareFrame3 = this.add.image(this.scale.width*0.6, this.scale.height*0.67, 'squareFrame').setVisible(false)
        .setScale(this.scale.width/450)

        this.add.text(this.button3PhaseBlocked.x - this.button3PhaseBlocked.displayWidth/3, this.scale.height*0.49, 'Fase 3:', {
            fontFamily: 'font1', 
            fontSize: this.scale.width/60,
            color: '#000000'
        } );
        this.add.text(this.button3PhaseBlocked.x - this.button3PhaseBlocked.displayWidth/2.3, this.scale.height*0.81, 'Alvos: 7', {
            fontFamily: 'font1', 
            fontSize: this.scale.width/60,
            color:'#000000'
        });

        // adiciona os botões e textos da fase 4 (tanto bloqueados quanto desbloqueados)
        this.button4PhaseBlocked = this.add.image(this.scale.width*0.8, this.scale.height*0.67, 'phase4ButtonBW')
        .setScale(this.scale.width/3450);
        this.frameBW4 = this.add.image(this.scale.width*0.8, this.scale.height*0.67, 'frameBW')
        .setScale(this.scale.width/450);
        this.lock4 = this.add.image(this.scale.width*0.8, this.scale.height*0.67, 'lock')
        .setScale(this.lockScale)
        this.button4Phase = this.add.image(this.scale.width*0.8, this.scale.height*0.67, 'phase4Button').setVisible(false)
        .setScale(this.scale.width/3450)
        this.squareFrame4 = this.add.image(this.scale.width*0.8, this.scale.height*0.67, 'squareFrame').setVisible(false)
        .setScale(this.scale.width/450)

        this.add.text(this.button4PhaseBlocked.x - this.button4PhaseBlocked.displayWidth/3, this.scale.height*0.49, 'Fase 4:', {
            fontFamily: 'font1', 
            fontSize: this.scale.width/60,
            color: '#000000'
        } );
        this.add.text(this.button4PhaseBlocked.x - this.button4PhaseBlocked.displayWidth/2.3, this.scale.height*0.81, 'Alvos: 10', {
            fontFamily: 'font1', 
            fontSize: this.scale.width/60,
            color: '#000000'
        })

        // torna o botão de tutorial clicável e redireciona para a cena de tutorial quando clicado
        this.tutorialButton.on('pointerdown', () => {
            this.scene.start('Tutorial');
        })

        // implementação da lógica de liberação das fases (caso tal fase = completa, então libera o botão clicável e colorido da fase seguinte)
        if(completedPhases['Tutorial']){
            this.frameBW1.setVisible(false);
            this.button1PhaseBlocked.setVisible(false);
            this.lock1.setVisible(false);
            this.criativeButtonBlocked.setVisible(false);
            this.lockCriative.setVisible(false);
            this.criativeButton.setVisible(true).setInteractive();
            this.criativeButton.on('pointerdown', () => {
                this.scene.start('CreativeMode');
            })
            this.squareFrame1.setVisible(true); 
            this.button1Phase.setVisible(true).setInteractive();
            this.button1Phase.on('pointerdown', () => {
                this.scene.start('Phase1');
            })
        } 

        if (completedPhases['Phase1']) {
            this.frameBW2.setVisible(false);
            this.button2PhaseBlocked.setVisible(false);
            this.lock2.setVisible(false);
            this.squareFrame2.setVisible(true);
            this.button2Phase.setVisible(true).setInteractive();
            this.button2Phase.on('pointerdown', () => {
                this.scene.start('Phase2');
            })
        }
        

        if (completedPhases['Phase2']) {
            this.frameBW3.setVisible(false);
            this.button3PhaseBlocked.setVisible(false);
            this.lock3.setVisible(false);
            this.squareFrame3.setVisible(true);
            this.button3Phase.setVisible(true).setInteractive();
            this.button3Phase.on('pointerdown', () => {
                this.scene.start('Phase3');
            })
         }

         if (completedPhases['Phase3']) {
            this.frameBW4.setVisible(false);
            this.button4PhaseBlocked.setVisible(false);
            this.lock4.setVisible(false);
            this.squareFrame4.setVisible(true);
            this.button4Phase.setVisible(true).setInteractive();
            this.button4Phase.on('pointerdown', () => {
                this.scene.start('Phase4');
            })
         }
    }
}