// Classe de cena a ser exportada
export default class BasePhase extends Phaser.Scene {
    constructor() {
        // Configura a chave de classe
        super('BasePhase');
    }

    
    create(){
        // Facilita a escrita da váriavel para o tamanho da tela
        this.width = this.scale.width;
        this.height = this.scale.height;

        // Adicona background no centro da tela
        let bg = this.add.image(this.width / 2, this.height / 2, 'bgTutorial');
        
        // Configura a pontuação inicial e máxima
        this.score = 0;
        //this.maxScore = 3;

        // Animação do alvo voando
        this.anims.create({
            key: 'fly',
            frames: this.anims.generateFrameNumbers('pombo', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });
        
        // Adiciona o placar
        this.scoreboard = this.add.text(50, 15, 'Pontos:' + this.score, {fontSize:'45px', fill:'#000000'})

        // Configura e adiciona o alvo na tela
        this.spawnTarget(); 
    }

    // Função do Phaser que roda em loop constante as funcionalidades do jogo
    update() {
        // Confere se o alvo é clicado
        this.clickTarget(); 
        
        // Só move o alvo se ele não foi clicado
        if (!this.parado){ 
            this.movement(this.target);  
        }
    }

    // Função para gerar o alvo em um lugar aleatório da tela
    spawnTarget() {
        // Inicia a movimentação do alvo
        this.parado = false;
        
        // Gera uma posição aleatória dentro da área do jogo
        let posX = Phaser.Math.Between(0, this.width);
        let posY = Phaser.Math.Between(0, this.height);
        
        // Adiciona o alvo e torna interativo
        this.target = this.add.sprite(posX, posY, 'target').setScale(2.5);
        this.target.setInteractive();
        
        // Configura a velocidade aleatória do alvo e a direção inicial de movimento
        this.target.velocidadeX = Phaser.Math.Between(3, 4);
        this.target.velocidadeY = Phaser.Math.Between(1, 2);
        this.target.direcaoX = -1;
        this.target.direcaoY = 1;
        
        // Hitbox do alvo (usado para que não saia da tela)
        this.target.hitboxWidth = 43;
        this.target.hitboxHeight = 33;

        // Inicia a animação de voo do alvo
        this.target.play('fly');
    }

    // Função para quando o alvo é clicado
    clickTarget() {
        this.input.removeAllListeners('pointerdown'); // Ignora todos os cliques anteriores
        // Quando o mouse é clicado
        this.input.on('pointerdown', (pointer) => {
            // Se o ponteiro está no do alvo
            if (this.target.getBounds().contains(pointer.x, pointer.y) && this.score < this.maxScore) {
                this.parado = true; // Alvo para de se movimentar
                this.target.destroy(); // Destrói o alvo
                this.score+= 1; // Adiciona 1 ponto à pontuação
                this.scoreboard.setText('Pontos: ' + this.score); // Atualiza o placar

                this.spawnTarget();

                // Se a pontuação atingiu 3 pontos, aparece o botão de pular tutorial.
                if (this.score > 3) {
                    let skipTutorialButton = this.add.image(this.width - 100, 50, 'skipTutorialButton').setInteractive();
                    skipTutorialButton.on("pointerdown", ()=>{
                        this.scene.start("Phase1");
                    })
                }
                
                //Cria um splash no local do clique
                this.splash = this.add.image(pointer.x, pointer.y, 'splash').setScale(0.5);
            }
        });
    }

    // Função para movimentar o alvo
    movement(target) {
        // Limite para a borda em X considerando a hitbox do alvo
        if (target.x >= (this.width - target.hitboxWidth)) {
            // Direção para a esquerda
            target.setFlip(false, false);  
            target.direcaoX = -1;
        }
        if (target.x <= (0 + target.hitboxWidth)) {
            // Direção para a direita
            target.setFlip(true, false);
            target.direcaoX = 1;
        }

        // Limite para a borda em Y considerando a hitbox do alvo
        if (target.y >= (this.height - target.hitboxHeight)) {
            // Direção para cima
            target.direcaoY = -1; 
        }
        if (target.y <= (0 + target.hitboxWidth)) {
            // Direção para baixo
            target.direcaoY = 1;
        }

        // Move no eixo X e Y de acordo com a velocidade e direção
        // Nova posição do alvo = posição atual do alvo + velocidade do alvo * direção do alvo (-1,1)
        target.x += target.velocidadeX * target.direcaoX;
        target.y += target.velocidadeY * target.direcaoY;
    }
}
