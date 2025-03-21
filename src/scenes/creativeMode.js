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
        this.bg = this.add.image(this.width/2, this.height/2, 'bgWhite').setScale(this.width/2500);
        this.palette = this.add.image(this.width/1.065, this.height*0.11, 'palette').setScale(this.width/9000).setInteractive();
        
        // Configura a animação para o pombo voar
        this.anims.create({
            key: 'flyPigeon',
            frames: this.anims.generateFrameNumbers('pigeon', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        // Array com os splashes de tinta
        this.splashes = ['splash', 'pinkSplash', 'greenSplash', 'purpleSplash', 'blueSplash'];

        // Splash selecionado (por padrão, começa no amarelo)
        this.selectedSplash = this.splashes[0];

        // Cria os botões de splash
        this.splashesButtons = this.add.group();
        // Configura as propriedades de botão para cada splash do arrey de splashes
        this.splashes.forEach((splash, index) =>{ 
            let splashButton = this.add.image(this.palette.x, this.palette.y + (this.height/6*(index+1)), splash)
            .setInteractive()
            .setScale(this.width/3500)
            .setVisible(false)
            .setDepth(20);

            splashButton.on('pointerdown', () =>{
                this.selectedSplash = splash;
                this.toggleSplashMenu(false);
                console.log(this.selectedSplash)
            });

            this.splashesButtons.add(splashButton);
        })

        //Quando a paleta é clicada, aparece um menu com os splashes que o tutor pode selecionar para o seu gato pintar
        this.palette.on('pointerdown', ()=>{
            let splashMenuIsVisible = this.splashesButtons.getChildren()[0].visible;
            this.toggleSplashMenu(!splashMenuIsVisible);
        })
        
        //A função create do modo criativo herda da função create da clase BasePhase
        super.create();
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
    toggleSplashMenu(show){
        this.splashesButtons.getChildren().forEach(button =>{
            button.setVisible(show);
        })
    }
}