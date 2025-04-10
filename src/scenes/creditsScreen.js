export default class CreditsScreen extends Phaser.Scene {
    constructor() {
        super("CreditsScreen");
    }

    create() {
        // Facilita a escrita da variável para o tamanho da tela
        this.width = this.scale.width;
        this.height = this.scale.height;

        // Espaçamento entre os elementos da tela de créditos.
        const spacing = this.height/40;
        let verticalPosition = this.height / 4;

        // Título com o texto "CRÉDITOS".
        this.title = this.add.text(this.width / 2, verticalPosition / 3, "Créditos")
            .setOrigin(0.5).setDepth(20)
            .setStyle({color: '#FFFFFF', fontSize: this.width/50, fontFamily: 'font1', fontStyle: 'bold'});
        
        verticalPosition += spacing * 1.5;

        // Título com o nome da equipe.
        this.teamName = this.add.text(this.width / 2, verticalPosition/2, "Equipe CatUp")
        .setOrigin(0.5).setDepth(20)
        .setStyle({ color: '#FFFFFF', fontSize: this.width/60, fontFamily:'font1', fontWeight: 'bold'});
        
        verticalPosition += spacing;

        // Nomes dos membros da equipe CatUp.
        let names = ["Carlos Eduardo Quaglia", "Eduardo Jesus", "Felipe Neves Teixeira", 
                    "Luana de Jesus", "Luiz Felipe Hinuy", "Nicolli Venino"];

        // Iterando sobre a lista de nomes para mostrar cada um na tela de créditos.
        names.forEach(name => {
            this.add.text(this.width / 2, verticalPosition/1.5, name)
            .setOrigin(0.5).setDepth(20)
            .setStyle({ color: '#FFFFFF', fontSize: this.width/110, fontFamily: 'font1'});
            verticalPosition += spacing * 1.2;
        });

        verticalPosition += spacing * 0.3;

        // Texto escrito "Parcerias".
        this.textRealization = this.add.text(this.width/2, verticalPosition/1.2, "PARCERIAS")
        .setOrigin(0.5).setDepth(20)
        .setStyle({ color: '#FFFFFF', fontSize: this.width/60, fontFamily: 'font1', fontStyle: 'bold'});

        verticalPosition += spacing;

        // Ajustando posicionamento das imagens das logos do Inteli e da Dr.Pet, adicionando-as na tela.
        const imageSpacing = this.width/7; 
        let logoInteliHorizontalPosition = this.width / 2 - imageSpacing;
        let drPetHorizontalPosition = this.width / 2 + imageSpacing;
        this.add.image(logoInteliHorizontalPosition, verticalPosition, 'logoInteli').setDepth(20).setScale(this.width/6000);
        this.add.image(drPetHorizontalPosition, verticalPosition, 'drPet').setDepth(20).setScale(this.width/4000);

        this.soundPause = this.sound.add('soundPauseButton');
        
        this.pauseBtn = this.add.image(this.width/40, this.height/18, 'pauseBtn')
        .setInteractive({cursor: "pointer"})
        .setScale(this.scale.width/550)

        this.pauseBtn.on("pointerdown", () => {
            this.soundPlay = this.sound.add('soundPlayButton').play();
            this.scene.start('LevelSelect') // Direciona para a tela de seleção de níveis
            this.scene.stop('CreditsScreen') // Para o menu
        });
    }
}