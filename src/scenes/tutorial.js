// Classe de cena a ser exportada
export default class Tutorial extends Phaser.Scene {
    constructor(){
        // Configura a chave de classe
        super('Tutorial')
    }
    create(){
        this.textAdded = false; // Boolean para adicionar apenas uma vez o texto usando o update
        this.clicks = 0; // Contagem de clicks na tela
        this.count = 0;
        
        // Texto de tutorial organizado por elementos em lista
        this.tutorialTexts = [
            'Olá humano,\nbem-vindo ao RonRonarte!',
            'Seu gato está prestes a embarcar em\numa jornada artística!\n\nPara incentivá-lo a jogar,\nsiga estas instruções:',
            'Pegue um petisco para incentivar seu\ngato.',
            'Mostre a ração e mova-a sobre a\ntela acompanhando os alvos que \naparecem',
            'No ínicio não exija muito,recomendamos\nrecompensar seu gato por todos os\ntoques na tela até ele se interessar',
            'Seu gatinho pode revelar partes de \numa pintura clássica no Modo História\nou criar uma obra autoral\nno Modo Criativo!',
            'Quando o gato começar a tocar nos\nalvos sem a necessidade do petisco na\ntela, ofereça uma recompensa quando\no jogo indicar',
            'Está pronto para a aventura?\n\nClique no pombo para começar o jogo!']
        
        // Adiciona background
        let bg = this.add.image(this.scale.width / 2, this.scale.height / 2, 'bgTutorial').setDisplaySize(this.scale.width, this.scale.height).setDepth(0);
        
        // Configura a animação de voo do personagem
        this.anims.create({
            key: 'flyPigeon',
            frames: this.anims.generateFrameNumbers('pigeon', { start: 0, end: 3 }), // Define os frames do spritesheet que serão usados
            frameRate: 10, // Quantidade de frames por segundo
            repeat: -1 // Define que a animação será linear
        });

        // Início da implementação dos elementos matemáticos
        // Define posição inicial
        const posInitialX = 0;  
        const posInitialY = 0;

        // Adiciona o pombo como personagem e inicia a animação
        this.character = this.add.sprite(posInitialX, posInitialY, 'pigeon').setScale(this.scale.width/400).setFlip(true, false);
        this.character.play('flyPigeon');

        // Define velocidade nos dois eixos e aceleração no eixo y
        this.velX = 5;
        this.velY = 0;
        this.accelerationY = 0.02;
    }

    update(){
        // Confere se o personagem chegou no meio da tela
        if (this.character.x <= this.scale.width/2){
            
            // Implementação da aceleração no movimento
            this.count++; // Conta execuções do update()
            this.velY += this.accelerationY; // Atualiza velocidade no eixo y
            
            // Atualiza posição com base na velocidade
            this.character.x += this.velX;
            this.character.y += this.velY;

            // Imprime informações no console
            console.log("------------------------------------")
            console.log("Posição X: " + this.character.x)
            console.log("Posição Y: " + this.character.y)
            console.log("Velocidade X: " + this.velX)
            console.log("Velocidade Y: " + this.velY)
        }else{
            // Se o a caixa de texto e o texto ainda não foram adicionados
            if(!this.textAdded){
                console.log("=====================================")
                console.log("Posição Inicial X: " + 0)
                console.log("Posição Inicial Y: " + 0)
                console.log("Posição Final X: " + this.character.x)
                console.log("Posição Final Y: " + this.character.y)
                console.log("Velocidade Final X: " + this.velX)
                console.log("Velocidade Final Y: " + this.velY)
                console.log("Tempo total: " + this.count/60)
                console.log("=====================================")
                // Fim das implementações matemáticas

                // Adiciona os elementos
                this.textBox = this.add.image(this.scale.width/2, this.scale.height/1.3, 'textBox').setScale(this.scale.width/800);
                this.tutorialText = this.add.text(this.scale.width/8, this.scale.height/1.7, this.tutorialTexts[this.clicks], {fontFamily:'font1', fontSize: this.scale.width/33, fill:'#000'})
                this.textAdded = true; // Altera a flag para true
            }
            

            this.input.removeAllListeners('pointerdown'); // Ignora todos os cliques anteriores
            // Quando o mouse é clicado
            this.input.on('pointerdown', (pointer) => {
                // Se o número de cliques não for maior que o tamanho da lista de textos
                if (this.clicks < this.tutorialTexts.length - 1){
                    // Adiciona um clique à contagem
                    this.clicks++;
                }

                // Atualiza o texto com a frase de mesmo index da contagem atual de clicks
                this.tutorialText.setText(this.tutorialTexts[this.clicks])

                // Se o clique foi no personagem E todos os textos do tutorial foram mostrados
                if (this.character.getBounds().contains(pointer.x, pointer.y) && this.clicks == this.tutorialTexts.length - 1){
                    // Destrói alguns elementos
                    this.character.destroy();
                    this.textBox.destroy();
                    this.tutorialText.destroy();
                    
                    // Adiciona o splash 
                    this.add.image(this.character.x, this.character.y, 'splashTutorial').setScale(this.scale.width/2500);
                    
                    // Espera 1,5 segundos
                    this.time.delayedCall(1500, () => {
                        // Começa a próxima cena e finaliza essa
                        this.scene.start('Phase0');
                        this.scene.stop('Tutorial');
                    });
                }
            });
        }
    }
}