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
            "soundKey":"soundPigeon",
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
        this.palette = this.add.image(this.width / 1.065, this.height * 0.08, 'palette')
        .setScale(this.width / 9000)
        .setInteractive()
        .setDepth(20);

        this.printBtn = this.add.image(this.width / 2, this.height * 0.08, 'buttonPrint')
        .setDepth(20)
        .setScale(this.width/400)
        .setInteractive();
        this.printBtn.on('pointerdown', () => {
            this.printMode()
        });
        
        //this.createHoldButton([this.palette, this.printBtn])

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
            ['splashPaw1', 'splashPaw2', 'splashPaw3', 'splashPaw4', 'splashPaw5', 'splashPawRandom'],
            ['splashSplash1', 'splashSplash2', 'splashSplash3', 'splashSplash4', 'splashSplash5'],
            ['splashHeart1', 'splashHeart2', 'splashHeart3', 'splashHeart4', 'splashHeart5']
        ];

        // Array com tags dos alvos
        this.targets = ['pigeon', 'rat'];
        this.anims = ['animPigeon', 'animRat'];
        this.sounds = ['soundPigeon','soundRat', '', 'soundGecko']

        // Splash selecionado (por padrão, começa no amarelo)
        this.selectedSplash = this.splashes[0][0];

        // Cria os botões de splash
        this.splashesButtons = this.add.group();

        // Configura as propriedades de botão para cada splash do arrey de splashes
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
                    this.soundKey = 'soundRat'//this.sounds[i];
                    this.toggleMenu(false);
                });

            this.splashesButtons.add(targetButton);
        });
        
        //Quando a paleta é clicada, aparece um menu com os splashes que o tutor pode selecionar para o seu gato pintar
        this.palette.on('pointerdown', () => {            
            let splashMenuIsVisible = this.splashesButtons.getChildren()[0].visible;
            this.toggleMenu(!splashMenuIsVisible);
        });
    }

    //A função update do modo criativo herda da função update da clase BasePhase
    update(){
        super.update();
    }

    clickTarget(){
        // Quando o mouse é clicado
        this.input.on('pointerdown', (pointer) => {
            // Se o ponteiro está no do alvo
            if (this.target.getBounds().contains(pointer.x, pointer.y)) {
                this.stopped = true; // Alvo para de se movimentar
                this.target.destroy(); // Destrói o alvo
                
                //Cria um splash no local do clique
                if (this.selectedSplash == 'splashPawRandom'){
                    let rand = Phaser.Math.Between(0, 4);
                    let randSplash = this.splashes[0][rand]

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
        this.target.setVisible(false);
        this.palette.setVisible(false);
        this.btnDict[0].button.setVisible(false);
        this.printBtn.setVisible(false);
        this.soundTarget.pause()

        this.printText = this.add.text(this.width/4, this.height/2, 'Tire um printscreen da tela!', {fontFamily:'Futura',fontSize:this.width/22, fill:'#000'}).setDepth(20);

        setTimeout(() => {
            this.printText.setVisible(false);
        }, 2000);

        setTimeout(() => {
            this.target.setVisible(true);
            this.palette.setVisible(true);
            this.btnDict[0].button.setVisible(true);
            this.printBtn.setVisible(true);
            this.soundTarget.play()
        }, 5000);
    }
}