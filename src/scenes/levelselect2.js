export default class Select2 extends Phaser.Scene {
    constructor() {
        super("Select2");

    }
    create() {

        //background
        this.selectBg = this.add.image(this.scale.width*0.5, this.scale.height*0.5, 'selectBg').setDisplaySize(this.scale.width, this.scale.height);
    

        // botões bloqueados       
        this.buttonTutorial = this.add.image(this.scale.width*0.53, this.scale.height*0.33, 'tutorialButton').setDisplaySize(this.scale.width, this.scale.height).setScale(2.3).setInteractive();
        this.buttonCreative = this.add.image(this.scale.width*0.77, this.scale.height*0.33, 'criativeBlocked').setDisplaySize(this.scale.width, this.scale.height).setScale(2.3);
        this.buttonPhase1 = this.add.image(this.scale.width*0.20, this.scale.height*0.66, 'phase1Blocked').setDisplaySize(this.scale.width, this.scale.height).setScale(3.0)
        this.buttonPhase2 = this.add.image(this.scale.width*0.40, this.scale.height*0.66, 'phase2Blocked').setDisplaySize(this.scale.width, this.scale.height).setScale(3.0);
        this.buttonPhase3 = this.add.image(this.scale.width*0.60, this.scale.height*0.66, 'phase3Blocked').setDisplaySize(this.scale.width, this.scale.height).setScale(3.0);
        this.buttonPhase4 = this.add.image(this.scale.width*0.80, this.scale.height*0.66, 'phase4Blocked').setDisplaySize(this.scale.width, this.scale.height).setScale(3.0);
        
        // botões desbloqueados 
       // this.buttonPhase1Unlocked = this.add.image(this.scale.width*0.20, this.scale.height*0.66, 'phase1Unlocked').setDisplaySize(this.scale.width, this.scale.height).setScale(3.0).setVisible(false);
       // this.buttonPhase2Unlocked = this.add.image(this.scale.width*0.40, this.scale.height*0.66, 'phase2Unlocked').setDisplaySize(this.scale.width, this.scale.height).setScale(3.0).setVisible(false);
       // this.buttonPhase3Unlocked = this.add.image(this.scale.width*0.60, this.scale.height*0.66, 'phase3Unlocked').setDisplaySize(this.scale.wdith, this.scale.height).setScale(3.0).setVisible(false);
       // this.buttonPhase4Unlocked = this.add.image(this.scale.width*0.80, this.scale.height*0.66, 'phase4Unlocked').setDisplaySize(this.scale.width, this.scale.height).setScale(3.0).setVisible(false);
    
        // se o botão do tutorial for clicado
        this.buttonTutorial.on('pointerdown', () => {
            this.scene.pause('Select2')
            this.scene.start('Phase0');
            this.buttonPhase1.setTexture('phase1Unlocked');
            this.buttonPhase1.setInteractive();
        });

        this.buttonPhase1.on('pointerdown', () => {
            this.secene.start('Phase1');
        });

    
    }

    
 
}