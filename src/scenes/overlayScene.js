export default class OverlayScene extends Phaser.Scene {
    constructor() {
        super('OverlayScene');
    }

    create() {
        // Array de configurações para os splashes
        const splashConfigs = [
            { key: 'splashPaw1', x: this.scale.width / 2, y: this.scale.height / 2, scale: this.scale.width/300, delay: 100 },
            { key: 'splashPaw2', x: this.scale.width / 3.2, y: this.scale.height / 2, scale: this.scale.width/300, delay: 150 },
            { key: 'splashPaw3', x: this.scale.width / 9.8, y: this.scale.height / 2, scale: this.scale.width/300, delay: 200 },
            { key: 'splashPaw4', x: this.scale.width / 1.1, y: this.scale.height / 2, scale: this.scale.width/300, delay: 250 },
            { key: 'splashPaw5', x: this.scale.width / 1.4, y: this.scale.height / 2, scale: this.scale.width/300, delay: 300 },
            { key: 'splashPaw5', x: this.scale.width / 5, y: this.scale.height / 4.5, scale: this.scale.width/300, delay: 350 },
            { key: 'splashPaw4', x: this.scale.width / 5, y: this.scale.height / 1.3, scale: this.scale.width/300, delay: 400 },
            { key: 'splashPaw3', x: this.scale.width / 1.3, y: this.scale.height / 1.3, scale: this.scale.width/300, delay: 450 },
            { key: 'splashPaw1', x: this.scale.width / 1.1, y: this.scale.height / 4.5, scale: this.scale.width/300, delay: 500 },
            { key: 'splashPaw5', x: this.scale.width / 2.2, y: this.scale.height / 4.5, scale: this.scale.width/300, delay: 550 },
            { key: 'splashPaw2', x: this.scale.width / 1.5, y: this.scale.height / 4.5, scale: this.scale.width/300, delay: 600 },
            { key: 'splashPaw2', x: this.scale.width / 1, y: this.scale.height / 1.3, scale: this.scale.width/300, delay: 650 },
            { key: 'splashPaw3', x: this.scale.width / 2.4, y: this.scale.height / 1.3, scale: this.scale.width/300, delay: 700 },
            { key: 'splashPaw2', x: this.scale.width / 1.65, y: this.scale.height / 1.2, scale: this.scale.width/300, delay: 750 },
            { key: 'splashPaw1', x: this.scale.width / 1.2, y: this.scale.height / 1.1, scale: this.scale.width/300, delay: 800 },
            { key: 'splashPaw1', x: this.scale.width / 10, y: this.scale.height / 1.1, scale: this.scale.width/300, delay: 850 },
            { key: 'splashPaw1', x: this.scale.width / 10, y: this.scale.height / 10, scale: this.scale.width/300, delay: 900 },
            { key: 'splashPaw3', x: this.scale.width / 1.3, y: this.scale.height / 10, scale: this.scale.width/300, delay: 950 },
            { key: 'splashPaw3', x: this.scale.width / 3.3, y: this.scale.height / 10, scale: this.scale.width/300, delay: 1000 },
            { key: 'splashPaw5', x: this.scale.width / 1.5, y: this.scale.height / 1, scale: this.scale.width/300, delay: 1050 },
            { key: 'splashPaw5', x: this.scale.width / 3.5, y: this.scale.height / 1, scale: this.scale.width/300, delay: 1100 },
            { key: 'splashPaw4', x: this.scale.width / 2.1, y: this.scale.height / 1, scale: this.scale.width/300, delay: 1150 },
            { key: 'splashPaw4', x: this.scale.width / 2.1, y: this.scale.height / 10, scale: this.scale.width/300, delay: 1200 }
        ];

        // Array para armazenar os splashes
        this.listaSplashes = [];

        // Cria os splashes com base nas configurações
        splashConfigs.forEach(config => {
            this.time.delayedCall(config.delay, () => {
                const splash = this.add.image(config.x, config.y, config.key).setScale(config.scale);
                this.listaSplashes.push(splash);
            });
        });

        this.time.delayedCall(1300, () => {
            this.EndSplashes();
        });
    }

    EndSplashes() {
        this.num = 0;
        for (let i = 0; i < this.listaSplashes.length; i++) {
            this.num += 50;
            this.time.delayedCall(this.num, () => {
                if (this.listaSplashes[i]) {
                    this.listaSplashes[i].setVisible(false);
                }
            });
        }
    }
}