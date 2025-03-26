export default class LevelSelect extends Phaser.Scene {
    constructor() {
        // Configura a chave de classe
        super("LevelSelect");
    }
    create() {

        // Cria as imagens presentes no menu de seleção de níveis
        this.selectBg = this.add.image(this.scale.width*0.5, this.scale.height*0.5, 'selectBg').setDisplaySize(this.scale.width, this.scale.height);
        this.selectTutorial = this.add.image(this.scale.width*0.18, this.scale.height*0.33, 'selectTutorial').setScale(this.scale.width/3200).setInteractive();
        this.selectCriative = this.add.image(this.scale.width*0.18, this.scale.height*0.67, 'selectCriative').setScale(this.scale.width/3200).setInteractive();
        this.selectPhase1 = this.add.image(this.scale.width*0.6, this.scale.height*0.25, 'selectPhase1').setScale(this.scale.width/1000).setInteractive();
        this.selectPhase2 = this.add.image(this.scale.width*0.6, this.scale.height*0.42, 'selectPhase2').setScale(this.scale.width/1000).setInteractive();
        this.selectPhase3 = this.add.image(this.scale.width*0.6, this.scale.height*0.58, 'selectPhase3').setScale(this.scale.width/1000).setInteractive();
        this.selectPhase4 = this.add.image(this.scale.width*0.6, this.scale.height*0.75, 'selectPhase4').setScale(this.scale.width/1000).setInteractive();

        // Se o usuário selecionar a imagem que remete à primeira fase, ele será direcionado para a primeira fase
        this.selectTutorial.on('pointerdown', () => {
            this.scene.launch('OverlayScene'); // Lança a cena sobreposta
            this.scene.bringToTop('OverlayScene');
            this.selectTutorial.setScale(this.scale.width/3000);
            this.time.delayedCall(1500, () => {
                this.scene.start("Tutorial");
            });
        });
        
        this.selectPhase1.on('pointerdown', () => {
            this.scene.launch('OverlayScene'); // Lança a cena sobreposta
            this.scene.bringToTop('OverlayScene');
            this.selectPhase1.setScale(this.scale.width/900);
            this.time.delayedCall(1500, () => {
                this.scene.start("Phase1");
            });
        });


        this.selectPhase2.on('pointerdown', () => {
            this.scene.launch('OverlayScene'); // Lança a cena sobreposta
            this.scene.bringToTop('OverlayScene');
            this.selectPhase2.setScale(this.scale.width/900);
            this.time.delayedCall(1500, () => {
                this.scene.start("Phase2");
            });
        });


        this.selectPhase3.on('pointerdown', () => {
            this.scene.launch('OverlayScene'); // Lança a cena sobreposta
            this.scene.bringToTop('OverlayScene');
            this.selectPhase3.setScale(this.scale.width/900);
            this.time.delayedCall(1500, () => {
                this.scene.start("Phase3");
            });
        });


        this.selectPhase4.on('pointerdown', () => {
            this.scene.launch('OverlayScene'); // Lança a cena sobreposta
            this.scene.bringToTop('OverlayScene');
            this.selectPhase4.setScale(this.scale.width/900);
            this.time.delayedCall(1500, () => {
                this.scene.start("Phase4");
            });
        });


        this.selectCriative.on('pointerdown', () => {        
            this.scene.launch('OverlayScene'); // Lança a cena sobreposta
            this.scene.bringToTop('OverlayScene');
            this.selectCriative.setScale(this.scale.width/3000);
            this.time.delayedCall(1500, () => {
                this.scene.start("CreativeMode");
            }); 
        });
    }; 

    changeScene(selectPhase, phaseKey) {
        selectPhase.on('pointerdown', () => {
            this.scene.launch('OverlayScene'); // Lança a cena sobreposta
            this.scene.bringToTop('OverlayScene');
            this.time.delayedCall(1000, () => {
                this.scene.start(phaseKey);
            });
        });
    }

    update() {

    };

}