// Classe de cena a ser exportada
export default class Tutorial extends Phaser.Scene {
    constructor(){
        // Configura a chave de classe
        super('Tutorial')
    }
    create(){
        this.textAdded = false; // Boolean para adicionar apenas uma vez o texto usando o update
        this.clicks = 0; // Contagem de clicks na tela
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
        let bg = this.add.image(this.scale.width/2, this.scale.height/2, 'bgTutorial').setInteractive();
        
        // Configura a animação de voo do personagem
        this.anims.create({
            key: 'flyPigeon',
            frames: this.anims.generateFrameNumbers('pigeon', { start: 0, end: 3 }), // Define os frames do spritesheet que serão usados
            frameRate: 10, // Quantidade de frames por segundo
            repeat: -1 // Define que a animação será linear
        });

        // Adiciona o pombo como personagem e inicia a animação
        this.character = this.add.sprite(0, 0, 'pigeon').setScale(this.scale.width/400).setFlip(true, false);
        this.character.play('flyPigeon');
    }
    update(){
        // Confere se o personagem chegou no meio da tela
        if (this.character.x <= this.scale.width/2){
            // Move o personagem em direção ao meio da tela
            this.character.x += this.scale.width/400;
            this.character.y += this.scale.height/500;
        }else{
            // O personagem está no meio da tela
            
            // Se o a caixa de texto e o texto ainda não foram adicionados
            if(!this.textAdded){
                // Adiciona os elementos
                this.textBox = this.add.image(this.scale.width/2, this.scale.height/1.2, 'textBox').setScale(this.scale.width/1000);
                this.tutorialText = this.add.text(this.scale.width/5, this.scale.height/1.45, this.tutorialTexts[this.clicks], {fontSize:'15px', fill:'#000000'})
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
                    this.add.image(this.character.x, this.character.y, 'yellowSplash').setScale(this.scale.width/2500);
                    
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