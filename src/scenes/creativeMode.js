import BasePhase from "./basePhase.js";

export default class CreativeMode extends BasePhase{
    constructor(){
        let configDict = {
            "completePhase":false,
            "backgroundKey":"bgWhite",
            "artistKey":"artist3",
            "textArtist":['Cheri...'],
            "textPainting":['Pintura...'],
            "targetKey":"pigeon",
            "animKey":"animPigeon",
            "soundKey":"soundPigeon"
        }
        
        // Configura a chave de classe e os assets da fase
        super('CreativeMode', configDict)
    }

    create(){
        // Adiciona a borda e a paleta
        this.width = this.scale.width;
        this.height = this.scale.height;

        //A função create do modo criativo herda da função create da clase BasePhase
        super.create();       
        
        this.createPalette();
    }

    createPalette() {
        this.createPaletteButton();
        this.createPrintButton();
        
        this.bgMenu = this.add.image(this.width/2, this.height/2, 'bgVictory')
        .setScale(this.width/580)
        .setVisible(false)
        .setDepth(20);
        
        this.frameMenu = this.add.image(this.bgMenu.x, this.bgMenu.y, 'frame')
        .setScale(this.width/700)
        .setVisible(false)
        .setDepth(20);

        // Array com os splashes de tinta
        this.splashes = [
            ['splashPaw1', 'splashPaw2', 'splashPaw3', 'splashPaw4', 'splashPaw5', 'splashRandom'],
            ['splashSplash1', 'splashSplash2', 'splashSplash3', 'splashSplash4', 'splashSplash5'],
            ['splashHeart1', 'splashHeart2', 'splashHeart3', 'splashHeart4', 'splashHeart5']
        ];

        // Array com tags dos alvos
        this.targets = ['pigeon', 'rat', 'gecko'];
        this.anims = ['animPigeon', 'animRat','animGecko'];
        this.sounds = ['soundPigeon','soundRat', 'soundGecko']

        // Splash selecionado (por padrão, começa no amarelo)
        this.selectedSplash = this.splashes[0][0];

        // Cria os botões de splash
        this.splashesButtons = this.add.group();

        // Configura as propriedades de botão para cada splash do array de splashes
        this.splashes.forEach((splash, c) => {
            splash.forEach((splash, i) => {
                let splashButton = this.add.image(
                    this.bgMenu.x - this.bgMenu.displayWidth/2.4 + (this.bgMenu.displayWidth/6 * (i)), 
                    this.bgMenu.y - this.bgMenu.displayHeight/3 + (this.bgMenu.displayHeight/5 * (c)), splash)
                    .setInteractive()
                    .setScale(this.width / 700)
                    .setVisible(false)
                    .setDepth(20);

                splashButton.on('pointerdown', () => {
                    this.selectedSplash = splash;
                    this.toggleMenu(false);
                    console.log(this.selectedSplash);
                });

                this.splashesButtons.add(splashButton);
            });
        });

        this.targets.forEach((target, i) => {
            let targetButton = this.add.image(
                this.bgMenu.x - this.bgMenu.displayWidth/2.4 + (this.bgMenu.displayWidth/6 * (i)),
                this.bgMenu.y - this.bgMenu.displayHeight/3.5 + (this.bgMenu.displayHeight/5 * (3)), target)
                .setInteractive()
                .setScale(this.width / 700)
                .setVisible(false)
                .setDepth(20);

                targetButton.on('pointerdown', () => {
                    this.targetKey = target;
                    this.animKey = this.anims[i];
                    this.soundKey = this.sounds[i];
                    this.toggleMenu(false);
                });

            this.splashesButtons.add(targetButton);
        });
    }

    createPaletteButton(){
        this.paletteHold = false;
        
        this.paletteBtn = this.add.image(this.width / 1.065, this.height * 0.08, 'palette')
        .setScale(this.width / 9000)
        .setInteractive()
        .setDepth(20);
      
        this.paletteLoad = this.add.sprite(this.paletteBtn.x, this.paletteBtn.y + this.paletteBtn.displayHeight/2, 'spriteLoading')
        .setScale(this.width/8000)
        .setInteractive()
        .setVisible(false);

        this.paletteBtn.on('pointerdown', () => {
            this.paletteHold = true
        });

        this.paletteBtn.on('pointerup', () => {
            this.paletteHold = false
        });
    }

    createPrintButton(){
        this.printHold = false;
        
        this.printBtn = this.add.image(this.width / 2, this.height * 0.08, 'buttonPrint')
        .setDepth(20)
        .setScale(this.width/400)
        .setInteractive();
      
        this.printLoad = this.add.sprite(this.printBtn.x, this.printBtn.y + this.printBtn.displayHeight/1.5, 'spriteLoading')
        .setScale(this.width/8000)
        .setInteractive()
        .setVisible(false);

        this.printBtn.on('pointerdown', () => {
            this.printHold = true
        });

        this.printBtn.on('pointerup', () => {
            this.printHold = false
        });
        
    }
        
    //A função update do modo criativo herda da função update da clase BasePhase
    update(){
        super.update();
        this.updatePaletteButton();
        this.updatePrintButton();
    }

    updatePaletteButton(){
        if (this.paletteHold){
            this.paletteLoad.setVisible(true);
            this.paletteLoad.anims.play('SpriteLoading',true);

            if (this.paletteLoad.anims.currentFrame.index == 5){
                this.paletteLoad.anims.stop().setFrame(0).setVisible(false);
                this.paletteHold = false;

                let splashMenuIsVisible = this.splashesButtons.getChildren()[0].visible;
                this.toggleMenu(!splashMenuIsVisible);
            }
        }else{
            this.paletteLoad.anims.stop().setFrame(0).setVisible(false);
        }
    }

    updatePrintButton(){
        if (this.printHold){
            this.printLoad.setVisible(true);
            this.printLoad.anims.play('SpriteLoading',true);

            if (this.printLoad.anims.currentFrame.index == 5){
                this.printLoad.anims.stop().setFrame(0).setVisible(false);
                this.printHold = false;

                this.printMode();
            }
        }else{
            this.printLoad.anims.stop().setFrame(0).setVisible(false);
        }
    }

    clickTarget(){
        // Quando o mouse é clicado
        this.input.on('pointerdown', (pointer) => {
            // Se o ponteiro está no do alvo
            if (this.target.getBounds().contains(pointer.x, pointer.y)) {
                this.stopped = true; // Alvo para de se movimentar

                if(this.soundTarget){
                    this.soundTarget.stop();
                }

                this.target.destroy(); // Destrói o alvo
                
                //Cria um splash no local do clique
                if (this.selectedSplash == 'splashRandom'){
                    let rand1 = Phaser.Math.Between(0, 2);
                    let rand2 = Phaser.Math.Between(0, 4);
                    let randSplash = this.splashes[rand1][rand2]

                    this.splash = this.add.image(pointer.x, pointer.y, randSplash)
                    .setScale(this.width/400)
                    .setDepth(0.1);
                }else{
                    this.splash = this.add.image(pointer.x, pointer.y, this.selectedSplash)
                    .setScale(this.width/400)
                    .setDepth(0.1);
                }
                
                
                this.spawnTarget();
                this.target.setDepth(20);
            }
        });
        
    }
    //Função que mostra e esconde os botões da paleta.
    toggleMenu(show){
        this.splashesButtons.getChildren().forEach(button =>{
            button.setVisible(show);
        });

        this.bgMenu.setVisible(show)
        this.frameMenu.setVisible(show)

        console.log('1')
        if(show){
            this.target.destroy();
            this.soundTarget.pause()
        } else{
            this.spawnTarget();
            this.target.setDepth(20);
            this.soundTarget.play();
        }
    }

    printMode(){
        this.target.destroy();
        this.paletteBtn.setVisible(false);
        this.pauseBtn.setVisible(false);
        this.printBtn.setVisible(false);
        this.soundTarget.pause()

        this.printText = this.add.text(this.width/4, this.height/2, 'Tire um printscreen da tela!', {fontFamily:'Futura',fontSize:this.width/22, fill:'#000'}).setDepth(20);

        setTimeout(() => {
            this.printText.setVisible(false);
        }, 2000);

        setTimeout(() => {
            this.spawnTarget();
            this.target.setDepth(20);
            this.paletteBtn.setVisible(true);
            this.pauseBtn.setVisible(true);
            this.printBtn.setVisible(true);
            this.soundTarget.play()
        }, 5000);
    }
}