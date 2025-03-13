import BasePhase from "./basePhase.js";

export default class CreativeMode extends BasePhase{
    constructor(){
        super('CreativeMode', false, 'bgWhite', 'pigeon', 'flyPigeon', 'pigeonSound')
    }

    create(){
        //Adicionando a borda e a paleta.
        this.width = this.scale.width;
        this.height = this.scale.height;
        this.edge = this.add.image(this.width / 2, this.height / 2, 'frame').setDisplaySize(this.width, this.width/2.3).setDepth(10);
        this.palette = this.add.image(this.width - 100, 100, 'palette').setScale(0.1).setInteractive().setDepth(100);

        //Animação para o pombo voar.
        this.anims.create({
            key: 'flyPigeon',
            frames: this.anims.generateFrameNumbers('pigeon', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        //Array com os splashes de tinta.
        this.splashes = ['splash', 'pinkSplash', 'greenSplash', 'purpleSplash', 'blueSplash'];

         //Splash selecionado (por padrão, começa no amarelo).
        this.selectedSplash = this.splashes[0];

        //Criando os botões de splash.
        this.splashesButtons = this.add.group();
        this.splashes.forEach((splash, index) =>{
            let splashButton = this.add.image(this.width - 100, 160 + (index * 80), splash).setInteractive().setScale(0.2).setVisible(false).setDepth(20);

            splashButton.on('pointerdown', () =>{
                this.selectedSplash = splash;
                this.toggleSplashMenu(false);
                console.log(this.selectedSplash)
            });

            this.splashesButtons.add(splashButton);
        })

        //Quando a paleta é clicada, aparece um menu com os splashes que o tutor pode selecionar para o seu gato pintar.
        this.palette.on('pointerdown', ()=>{
            let splashMenuIsVisible = this.splashesButtons.getChildren()[0].visible;
            this.toggleSplashMenu(!splashMenuIsVisible);
        })
        
        //A função create do modo criativo herda da função create da clase BasePhase.
        super.create();
    }

    //A função update do modo criativo herda da função update da clase BasePhase.
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
                this.spawnTarget();
                
                //Cria um splash no local do clique
                this.splash = this.add.image(pointer.x, pointer.y, this.selectedSplash).setScale(0.5);
            }
        });
        
    }
    //Função que mostra e esconde os botões da paleta.
    toggleSplashMenu(show){
        this.splashesButtons.getChildren().forEach(button =>{
            button.setVisible(show);
        })
    }
}