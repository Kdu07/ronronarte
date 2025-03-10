// Classe de cena a ser exportada
export default class Phase2 extends Phaser.Scene {
    constructor() {
        // Configura a chave de classe
        super('Phase2')
    }

    create(){
        this.add.image(this.scale.width/2, this.scale.height/2, 'working')

        // Adiciona um botão de pause na tela
        this.PauseBtn = this.add.image(40, 50, 'PauseBtn')
        this.PauseBtn.setInteractive()
        // Configura o botão para voltar ao menu
        this.PauseBtn.on('pointerdown', () => {
            this.scene.start('Menu');
            this.scene.stop('Phase1');
        })
    }        
}

