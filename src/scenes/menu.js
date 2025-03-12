// Classe de cena a ser exportada
export default class Menu extends Phaser.Scene{
    constructor(){
        // Configura a chave de classe
        super('Menu');
    }

    create() {
        // Adiciona imagens de background e botão jogar
        this.bgMenu = this.add.image(this.scale.width/2, this.scale.height/2, 'bgMenu').setScale(0.60);
        this.startButton = this.add.image((this.scale.width/2) + 10, this.scale.height/2, 'startButton').setInteractive({cursor: "pointer"}).setScale(2);
        this.creativeButton = this.add.image((this.scale.width/3), this.scale.height/2, 'optionsBtn').setInteractive({cursor: "pointer"}).setScale(2);

        // Quando botão start for clicado direciona para a cena Tutorial
        this.startButton.on("pointerdown", () => {
            this.scene.start('Tutorial')
            this.scene.stop('Menu')
        });

        // Quando botão de modo criativo for clicado direciona para a cena Tutorial
        this.creativeButton.on("pointerdown", () => {
            this.scene.start('CreativeMode')
            this.scene.stop('Menu')
        });


        // Ajusta a o jogo de acordo com a tela
        this.scale.on('resize', (gameSize) => this.resizeGame(gameSize), this);

        
        /*
        ANIMAÇÃO DO GATO PARA USO FUTURO

        this.anims.create({
            key: 'animCat',
            frames: this.anims.generateFrameNumbers('cat', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });


        
        this.cat = this.add.sprite(500, 800, 'cat').setScale(9);
        this.cat.play('animCat');
        */
    };

    resizeGame(gameSize) {
        // Define o tamanho da tela
        const {width, height} = gameSize;

        if (this.bgMenu) {
            // Ajusta a escala proporcionalmente
            this.bgMenu.setPosition(width / 2, height / 2);
            this.bgMenu.setScale(Math.min(width / 2000, height / 1400)); 
        }

        if (this.startButton) {
            // Ajusta posição do botão start
            this.startButton.setPosition(width / 2 + 10, height / 2);
        }
    };
}


