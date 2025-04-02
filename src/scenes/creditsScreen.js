export default class CreditsScreen extends Phaser.Scene {
    constructor() {
        super("CreditsScreen");
    }

    create() {
        this.width = this.scale.width;
        this.height = this.scale.height;

        //Espaçamento entre os elementos da tela de créditos.
        const spacing = 50;
        let verticalPosition = this.height / 4;

        //Título com o texto "CRÉDITOS".
        this.title = this.add.text(this.width / 2, verticalPosition/3, "CRÉDITOS")
            .setOrigin(0.5).setDepth(20)
            .setStyle({color: '#FFFFFF', fontSize: '2rem', fontFamily: 'Arial', fontStyle: 'bold'});
        
        verticalPosition += spacing * 1.5;

        //Título com o nome da equipe.
        this.teamName = this.add.text(this.width / 2, verticalPosition/2, "Equipe CatUp").setOrigin(0.5).setDepth(20).setStyle({ color: '#FFFFFF', fontSize: '1.75rem', fontFamily:'Futura', fontWeight: 'bold'});
        
        verticalPosition += spacing;

        //Nomes dos membros da equipe CatUp.
        let names = ["Carlos Eduardo Quaglia", "Eduardo Jesus", "Felipe Neves Teixeira", 
                    "Luana de Jesus", "Luiz Felipe Hinuy", "Nicolli Venino"];

        //Iterando sobre a lista de nomes para mostrar cada um na tela de créditos.
        names.forEach(name => {
            this.add.text(this.width / 2, verticalPosition/1.5, name).setOrigin(0.5).setDepth(20).setStyle({ color: '#FFFFFF', fontSize: '1.5rem', fontFamily: 'Arial'});
            verticalPosition += spacing * 0.8;
        });

        verticalPosition += spacing * 0.5;

        //Texto escrito "Parcerias".
        this.textRealization = this.add.text(this.width/2, verticalPosition/1.2, "PARCERIAS").setOrigin(0.5).setDepth(20).setStyle({ color: '#FFFFFF', fontSize: '2rem', fontFamily: 'Arial', fontStyle: 'bold'});

        verticalPosition += spacing;

        //Ajustando posicionamento das imagens das logos do Inteli e da Dr.Pet, adicionando-as na tela.
        const imageSpacing = 300; 
        let logoInteliHorizontalPosition = this.width / 2 - imageSpacing;
        let drPetHorizontalPosition = this.width / 2 + imageSpacing;
        this.add.image(logoInteliHorizontalPosition, verticalPosition, 'logoInteli').setDepth(20).setScale(0.3);
        this.add.image(drPetHorizontalPosition, verticalPosition, 'logoInteli').setDepth(20).setScale(0.3); 
    }
}