export default class BasePhase extends Phaser.Scene {
    constructor() {
        super('BasePhase')
    }
    
    create(){
        this.width = this.scale.width;
        this.height = this.scale.height;
        let bg = this.add.image(this.width / 2, this.height / 2, 'bgTutorial').setScale(0.5);
        this.score = 0;
        this.maxScore = 3;

        // Animação do target voando
        this.anims.create({
            key: 'fly',
            frames: this.anims.generateFrameNumbers('pombo', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });
        
        this.scoreboard = this.add.text(950, 15, 'Pontos:' + this.score, {fontSize:'45px', fill:'#495613'})

        this.spawntarget(); // Gera o target
    }

    // Função do Phaser que roda em loop constante as funcionalidades do jogo
    update() { 
        this.clicktarget(); // Confere se o target é clicado
        if (!this.parado){ // Só move o target se ele não foi clicado
            this.movimento(this.target);  
        }
    }

    // Função para gerar o target em um lugar aleatório da tela
    spawntarget() {
        this.parado = false;
        
        // Gerar uma posição aleatória dentro da área do quadro (borda)
        let posX = Phaser.Math.Between(0, this.width);
        let posY = Phaser.Math.Between(0, this.height);
        
        this.target = this.add.sprite(posX, posY, 'target').setScale(1.5);
        this.target.setInteractive();
        
        this.target.velocidadeX = Phaser.Math.Between(5, 7);
        this.target.velocidadeY = Phaser.Math.Between(3, 6);
        this.target.direcaoX = -1;
        this.target.direcaoY = 1;
        
        this.target.hitboxWidth = 43;
        this.target.hitboxHeight = 33;

        this.target.play('fly'); // Inicia animação de voo target
    }

    // Função para quando o target é clicado
    clicktarget() {
        this.input.removeAllListeners('pointerdown'); // Ignora todos os cliques anteriores
        this.input.on('pointerdown', (pointer) => {
            if (this.target.getBounds().contains(pointer.x, pointer.y)) {
                this.parado = true;
                this.score+= 1;
                this.scoreboard.setText('Pontos: ' + this.score);

                // Verifica se a pontuação atingiu a pontuação máxima
                if (this.score >= this.maxScore) {
                    this.add.text((this.width/2) - 300, this.height/2, 'MUDA DE CENA',  {fontSize:'100px', fill:'#FFFFFF'})
                    this.target.destroy();
                    
                    // Troca de cena 'BasePhase' -> ''
                    // this.scene.start('');
                    // this.scene.stop('BasePhase');
                } else {
                    this.tweens.add({
                        targets: this.target,
                        onComplete: () => {
                            this.target.destroy(); // Remove o target da tela
                            this.spawntarget(); // Cria um novo target após sumir
                        }
                    })
                };

                //Cria um splash no local do clique
                this.splash = this.add.image(pointer.x, pointer.y, 'splash').setScale(0.5);
            }
        });
    }

    endGame() {
        gameEnded = true; // Atualize a variável para indicar que o jogo foi encerrado
        // Acesse a física da cena diretamente
        if (this.scene && this.scene.physics && this.scene.physics.pause) {
            this.scene.physics.pause();
        } else {
            console.error("A física da cena não está definida ou 'pause' não está disponível.");
        }
        window.location.href = "./Win.html"; // Redireciona para a tela de fim de jogo
    }

    // Função para movimentar o target
    movimento(target) {
        // Limite para a borda em X (direita e esquerda)
        if (target.x >= (this.width - target.hitboxWidth)) {
            target.setFlip(false, false);  // Direção para a esquerda
            target.direcaoX = -1;
        }
        if (target.x <= (0 + target.hitboxWidth)) {
            target.setFlip(true, false);  // Direção para a direita
            target.direcaoX = 1;
        }

        // Limite para a borda em Y (superior e inferior)
        if (target.y >= (this.height - target.hitboxHeight)) {
            target.direcaoY = -1; // Direção para cima
        }
        if (target.y <= (0 + target.hitboxWidth)) {
            target.direcaoY = 1; // Direção para baixo
        }

        // Move no eixo X e Y de acordo com a velocidade e direção
        target.x += target.velocidadeX * target.direcaoX;
        target.y += target.velocidadeY * target.direcaoY;
    }
    // Gera um número aleatorio correspondendo a pixels fora da tela do game (usado para gerar o target fora da tela)
    gerarRandomPos(eixo, fora) {
        var num = Math.floor(Math.random() * ((eixo + fora) - (0 - fora) + 1)) + (0 - fora); // Gera um valor do tamanho da tela + margem para os dois lados
        return (num > 0 && num < eixo) ? gerarRandomPos(eixo, fora) : num; // Se o valor gerado estiver dentro da tela a função é chamada novamente
    }

}
