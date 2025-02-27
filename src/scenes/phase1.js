export default class Phase1 extends Phaser.Scene {
    constructor() {
        super('Phase1')
    }

    create(){
        this.width = this.scale.width;
        this.height = this.scale.height;
        
        this.pombo;
        this.parado = false;
        this.score = 0;
        this.scoreboard;
        this.maxScore = 3; // Defina a pontuação máxima aqui
        this.gameEnded = false; // Variável para verificar se o jogo foi encerrado
        this.splash;
        this.mask;
        this.revealMask;
        this.tinta1;

        
        this.bg = this.add.image(this.width / 2, this.height / 2, 'bgWhite');
        this.quadro = this.add.image(this.width / 2, this.height / 2, 'quadro').setDisplaySize(this.scale.width, this.scale.height);
        this.borda = this.add.image(this.width / 2, this.height / 2, 'borda').setDisplaySize(this.scale.width, this.scale.height);
        
        this.quadro.setAlpha(1); // Torna o quadro visível

        // Cria uma máscara inicial vazia 
        this.revealMask = this.make.renderTexture({x: this.width/2, y: this.height/2, width: this.width, height: this.height}, false);
        this.mask = new Phaser.Display.Masks.BitmapMask(this, this.revealMask);

        //A máscara é aplicada à imagem quadro, o que significa que a imagem só será visível onde a revealMask for preenchida com pixels.
        this.quadro.setMask(this.mask);

        this.somPombo = this.sound.add('pru'); // Adiciona som

        // Animação do pombo voando
        this.anims.create({
            key: 'voo',
            frames: this.anims.generateFrameNumbers('pombo', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });
        
        this.scoreboard = this.add.text(this.width - 300, 0 + 50, 'Pontos:' + this.score, {fontSize:'45px', fill:'#000000'})
        
        // Adiciona um botão de pause na tela
        this.PauseBtn = this.add.image(40, 50, 'PauseBtn')
        this.PauseBtn.setInteractive()
        this.PauseBtn.on('pointerdown', () => {
            window.location.href = "../index.html";
        })

        this.spawnPombo(); // Gera o pombo
    }

    update(){
        this.clickPombo(); // Confere se o pombo é clicado
        if (!this.parado){ // Só move o pombo se ele não foi clicado
            this.movimento(this.pombo);  
        }
    }

    spawnPombo() {
        this.parado = false;
    
        // Gerar uma posição aleatória dentro da área do quadro (borda)
        let posX = Phaser.Math.Between(100,500);
        let posY = Phaser.Math.Between(100,500);
        
        this.pombo = this.add.sprite(posX, posY, 'pombo').setScale(1.5);
        this.pombo.setInteractive();
        
        this.pombo.velocidadeX = Phaser.Math.Between(5, 7);
        this.pombo.velocidadeY = Phaser.Math.Between(3, 6);
        this.pombo.direcaoX = -1;
        this.pombo.direcaoY = 1;
        
        this.pombo.hitboxWidth = 43;
        this.pombo.hitboxHeight = 33;
    
        this.pombo.play('voo'); // Inicia animação de voo pombo
    }

    clickPombo() {
        this.input.removeAllListeners('pointerdown'); // Ignora todos os cliques anteriores
        this.input.on('pointerdown', (pointer) => {
            if (this.pombo.getBounds().contains(pointer.x, pointer.y)) {
                this.parado = true;
                this.score++;
                this.scoreboard.setText('Pontos: ' + this.score);
                
                this.pombo.destroy(); // Remove o pombo da tela
                this.somPombo.play({ volume: 0.5 }); // Toca o som de pombo quando o pombo é clicado
                this.time.delayedCall(1000, () => {
                    this.somPombo.stop(); // Para o som do pombo após 1000ms (1s)
                });




                // Cria efeito de som e adiciona um novo pombo
                // Verifica se a pontuação atingiu a pontuação máxima
                if (this.score >= this.maxScore) {;
                    console.log('GANHOU');
    
                    this.quadro.setMask();
                    this.quadro.setAlpha(1);
    
                    setTimeout(() => {
                        let frase = this.add.image(this.quadro.x/0.95, this.quadro.y/1.1, 'frase').setScale(0.8);
                        frase.alpha = 0;
                        this.tweens.add({
                            targets: frase,
                            alpha: 1, // Torna visível
                            duration: 500, // Tempo da animação (0.3s)
                            ease: 'Linear',
                            scale: 0.81,
                            onComplete: () => {
                                // Após o fade-in, reduzimos a opacidade para 50%
                                this.tweens.add({
                                    targets: frase,
                                    alpha: 0.8, // Mantém opacidade em 50%
                                    duration: 1000, // Tempo da transição (0.5s)
                                    scale: 0.6,
                                    ease: 'Linear'
                                });
                            }
                        },5000);
    
                        setTimeout(() => {
                            let recompensa = this.add.image(this.quadro.x/1, this.quadro.y/0.8, 'recompensa').setScale(0.8);
                            this.tweens.add({
                                targets: recompensa,
                                alpha: 1, // Torna visível
                                duration: 300, // Tempo da animação (0.3s)
                                scale: 0.9,
                                ease: 'Linear',
                                onComplete: () => {
                                    // Após o fade-in, reduzimos a opacidade para 50%
                                    this.tweens.add({
                                        targets: recompensa,
                                        alpha: 0.9, // Mantém opacidade em 50%
                                        duration: 500, // Tempo da transição (0.5s)
                                        scale: 0.8,
                                        ease: 'Linear'
                                    });
                                }
                            });
                        },2000);
                    },300);
    
                    setTimeout(() => {
                        let vitoria = this.add.video(this.width / 2, this.height / 2, 'vitoria').setScale(0.6);
                        this.add.image(vitoria.x-150, vitoria.y-110, 'quadro').setScale(0.15);
                        this.add.image(vitoria.x+300, vitoria.y-110, 'artista').setScale(0.23);
                        this.add.image(vitoria.x / 1.35, vitoria.y / 2, 'paleta').setScale(0.2);
                    },5700);
                        
                } else {
                    this.spawnPombo();
                };
    
                //Cria um splash no local do clique
                this.splash = this.add.image(pointer.x, pointer.y, 'splash').setScale(2.0);
                this.splash.setAlpha(1);
                this.revealMask.draw(this.splash, this.splash.x, this.splash.y);
                this.splash.destroy(); //Remove o splash após liberar a área
        
                this.tinta1 = this.add.image(pointer.x, pointer.y, 'tinta1').setScale(2.5); // Aparece instantaneamente
                this.tinta1.setAlpha(1);
                this.revealMask.draw(this.tinta1, this.tinta1.x, this.tinta1.y);
                this.tinta1.destroy(); //Remove o splash após liberar a área

                this.quadro.setAlpha(1);
            }
        });
    }

    movimento(alvo) {
        // Limite para a borda em X (direita e esquerda)
        if (alvo.x >= (this.width - alvo.hitboxWidth)) {
            alvo.setFlip(false, false);  // Direção para a esquerda
            alvo.direcaoX = -1;
        }
        if (alvo.x <= (0 + alvo.hitboxWidth)) {
            alvo.setFlip(true, false);  // Direção para a direita
            alvo.direcaoX = 1;
        }
    
        // Limite para a borda em Y (superior e inferior)
        if (alvo.y >= (this.height - alvo.hitboxHeight)) {
            alvo.direcaoY = -1; // Direção para cima
        }
        if (alvo.y <= (0 + alvo.hitboxHeight)) {
            alvo.direcaoY = 1; // Direção para baixo
        }
    
        // Move no eixo X e Y de acordo com a velocidade e direção
        alvo.x += alvo.velocidadeX * alvo.direcaoX;
        alvo.y += alvo.velocidadeY * alvo.direcaoY;
    }

    gerarRandomPos(eixo, fora) {
        var num = Math.floor(Math.random() * ((eixo + fora) - (0 - fora) + 1)) + (0 - fora); // Gera um valor do tamanho da tela + margem para os dois lados
        return (num > 0 && num < eixo) ? gerarRandomPos(eixo, fora) : num; // Se o valor gerado estiver dentro da tela a função é chamada novamente
    }
}

