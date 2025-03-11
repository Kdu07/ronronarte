export default class CreativeMode extends Phaser.Scene{
    constructor(){
        super('CreativeMode');
    }

    create(){
        this.width = this.scale.width;
        this.height = this.scale.height;
        this.background = this.add.image(this.width / 2, this.height / 2, 'bgWhite').setDisplaySize(this.width, this.width/1.8);
        this.edge = this.add.image(this.width / 2, this.height / 2, 'borda').setDisplaySize(this.width, this.width/2.3);
        this.palette = this.add.image(this.width - 100, 100, 'paleta').setScale(0.1).setInteractive();

        //Animação para o pombo voar.
        this.anims.create({
            key: 'fly',
            frames: this.anims.generateFrameNumbers('pombo', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.spawnTarget(); //Criando os alvos.

        //Array com os splashes de tinta.
        this.splashes = ['splash', 'pinkSplash', 'greenSplash', 'purpleSplash', 'blueSplash'];

        //Splash selecionado (por padrão, começa no amarelo).
        this.selectedSplash = this.splashes[0];

        //Criando os botões de splash.
        this.splashesButtons = this.add.group();
        this.splashes.forEach((splash, index) =>{
            let splashButton = this.add.image(this.width - 100, 160 + (index * 80), splash).setInteractive().setScale(0.2).setVisible(false);

            splashButton.on('pointerdown', () =>{
                this.selectedSplash = splash;
                this.toggleSplashMenu(false);
            });

            this.splashesButtons.add(splashButton);
        })

        //Quando a paleta é clicada, aparece um menu com os splashes que o tutor pode selecionar para o seu gato pintar.
        this.palette.on('pointerdown', ()=>{
            let splashMenuIsVisible = this.splashesButtons.getChildren()[0].visible;
            this.toggleSplashMenu(!splashMenuIsVisible);
        })
    }


    update(){
         // Confere se o alvo é clicado
         this.clickTarget(); 
        
         // Só move o alvo se ele não foi clicado
         if (!this.stopped){ 
             this.movement(this.target);  
         }
    }


    spawnTarget() {
        // Inicia a movimentação do alvo
        this.stopped = false;
        
        // Gera uma posição aleatória dentro da área do jogo
        let posX = Phaser.Math.Between(0, this.width);
        let posY = Phaser.Math.Between(0, this.height);
        
        // Adiciona o alvo e torna interativo
        this.target = this.add.sprite(posX, posY, 'target').setScale(2.5);
        this.target.setInteractive();
        
        // Configura a velocidade aleatória do alvo e a direção inicial de movimento
        this.target.velocityX = Phaser.Math.Between(3, 4);
        this.target.velocityY = Phaser.Math.Between(1, 2);
        this.target.directionX = -1;
        this.target.directionY = 1;
        
        // Hitbox do alvo (usado para que não saia da tela)
        this.target.hitboxWidth = 100;
        this.target.hitboxHeight = 100;

        // Inicia a animação de voo do alvo
        this.target.play('fly');
    }

     // Função para quando o alvo é clicado
     clickTarget() {
        this.input.removeAllListeners('pointerdown'); // Ignora todos os cliques anteriores

        // Quando o mouse é clicado
        this.input.on('pointerdown', (pointer) => {
            // Se o ponteiro está no do alvo
            if (this.target.getBounds().contains(pointer.x, pointer.y)) {
                this.parado = true; // Alvo para de se movimentar
                this.target.destroy(); // Destrói o alvo
                this.spawnTarget();
                
                //Cria um splash no local do clique
                this.splash = this.add.image(pointer.x, pointer.y, this.selectedSplash).setScale(0.5).setDepth(5);
            }
        });
    }

    // Função para movimentar o alvo
    movement(target) {
        // Limite para a borda em X considerando a hitbox do alvo
        if (target.x >= (this.width - target.hitboxWidth)) {
            // Direção para a esquerda
            target.setFlip(false, false);  
            target.directionX = -1;
        }
        if (target.x <= (0 + target.hitboxWidth)) {
            // Direção para a direita
            target.setFlip(true, false);
            target.directionX = 1;
        }

        // Limite para a borda em Y considerando a hitbox do alvo
        if (target.y >= (this.height - target.hitboxHeight)) {
            // Direção para cima
            target.directionY = -1; 
        }
        if (target.y <= (0 + target.hitboxWidth)) {
            // Direção para baixo
            target.directionY = 1;
        }

        // Move no eixo X e Y de acordo com a velocidade e direção
        // Nova posição do alvo = posição atual do alvo + velocidade do alvo * direção do alvo (-1,1)
        target.x += target.velocityX * target.directionX;
        target.y += target.velocityY * target.directionY;
    }


    //Função que mostra e esconde os botões da paleta.
    toggleSplashMenu(show){
        this.splashesButtons.children.iterate(button =>{
            button.setVisible(show);
        })
    }

}