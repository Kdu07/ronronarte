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
            "animKey":"flyPigeon",
            "soundKey":"soundPigeon",
        }
        
        // Configura a chave de classe e os assets da fase
        super('CreativeMode', configDict)
    }

    create(){
        // Adiciona a borda e a paleta
        this.width = this.scale.width;
        this.height = this.scale.height;
        
        // Configura a animação do pombo voando
        this.anims.create({
            key: 'flyPigeon',
            frames: this.anims.generateFrameNumbers('pigeon', { start: 0, end: 3 }), // Define os frames do spritesheet que serão usados
            frameRate: 10, // Quantidade de frames por segundo
            repeat: -1 // Define que a animação será contínua
        });

        //A função create do modo criativo herda da função create da clase BasePhase
        super.create();
        this.createPalette();
        this.bgMenu = this.add.image(this.width/2, this.height/2, 'bgVictory').setScale(this.width/580).setVisible(false);
        this.frameMenu = this.add.image(this.bgMenu.x, this.bgMenu.y, 'frame').setScale(this.width/700).setVisible(false);
    }

    createPalette() {
        this.palette = this.add.image(this.width / 1.065, this.height * 0.11, 'palette').setScale(this.width / 9000).setInteractive();

        // Configura a animação para o pombo voar
        this.anims.create({
            key: 'flyPigeon',
            frames: this.anims.generateFrameNumbers('pigeon', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        // Array com os splashes de tinta
        this.splashes = [
            /*['splashPaw1', 'splashPaw2', 'splashPaw3', 'splashPaw4', 'splashPaw5'],*/
            ['splashHeart1', 'splashHeart2', 'splashHeart3', 'splashHeart4', 'splashHeart5'],
            /*['splashSplash1', 'splashSplash2', 'splashSplash3', 'splashSplash4', 'splashSplash5'],*/
        ];

        // Splash selecionado (por padrão, começa no amarelo)
        this.selectedSplash = this.splashes[0][0];

        // Cria os botões de splash
        this.splashesButtons = this.add.group();

        // Configura as propriedades de botão para cada splash do arrey de splashes
        this.splashes.forEach((splash, c) => {
            splash.forEach((splash, i) => {
                let splashButton = this.add.image(this.palette.x, this.palette.y + (this.height / 6 * (i + 1)), splash)
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
        
        //Quando a paleta é clicada, aparece um menu com os splashes que o tutor pode selecionar para o seu gato pintar
        this.palette.on('pointerdown', () => {
            this.bgMenu.setVisible(true)
            this.frameMenu.setVisible(true)
            
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
                this.splash = this.add.image(pointer.x, pointer.y, this.selectedSplash).setScale(0.5);
                this.spawnTarget();
            }
        });
        
    }
    //Função que mostra e esconde os botões da paleta.
    toggleMenu(show){
        this.splashesButtons.getChildren().forEach(button =>{
            button.setVisible(show);
        })
    }
}