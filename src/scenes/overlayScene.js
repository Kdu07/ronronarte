export default class OverlayScene extends Phaser.Scene {
    constructor() {
        super('OverlayScene');
    }

    create() {
        // Array de configurações para os splashes
        const splashConfigs = [
            { key: 'yellowSplash', x: this.scale.width / 2, y: this.scale.height / 2, scale: 0.7, delay: 100 },
            { key: 'blueSplash', x: this.scale.width / 3.2, y: this.scale.height / 2, scale: 1, delay: 150 },
            { key: 'purpleSplash', x: this.scale.width / 9.8, y: this.scale.height / 2, scale: 1, delay: 200 },
            { key: 'greenSplash', x: this.scale.width / 1.1, y: this.scale.height / 2, scale: 1, delay: 250 },
            { key: 'pinkSplash', x: this.scale.width / 1.4, y: this.scale.height / 2, scale: 1, delay: 300 },
            { key: 'pinkSplash', x: this.scale.width / 5, y: this.scale.height / 4.5, scale: 1, delay: 350 },
            { key: 'greenSplash', x: this.scale.width / 5, y: this.scale.height / 1.3, scale: 1, delay: 400 },
            { key: 'purpleSplash', x: this.scale.width / 1.3, y: this.scale.height / 1.3, scale: 1, delay: 450 },
            { key: 'yellowSplash', x: this.scale.width / 1.1, y: this.scale.height / 4.5, scale: 0.7, delay: 500 },
            { key: 'pinkSplash', x: this.scale.width / 2.2, y: this.scale.height / 4.5, scale: 1, delay: 550 },
            { key: 'blueSplash', x: this.scale.width / 1.5, y: this.scale.height / 4.5, scale: 1, delay: 600 },
            { key: 'blueSplash', x: this.scale.width / 1, y: this.scale.height / 1.3, scale: 1, delay: 650 },
            { key: 'purpleSplash', x: this.scale.width / 2.4, y: this.scale.height / 1.3, scale: 1, delay: 700 },
            { key: 'blueSplash', x: this.scale.width / 1.65, y: this.scale.height / 1.2, scale: 1, delay: 750 },
            { key: 'yellowSplash', x: this.scale.width / 1.2, y: this.scale.height / 1.1, scale: 0.7, delay: 800 },
            { key: 'yellowSplash', x: this.scale.width / 10, y: this.scale.height / 1.1, scale: 0.7, delay: 850 },
            { key: 'yellowSplash', x: this.scale.width / 10, y: this.scale.height / 10, scale: 0.7, delay: 900 },
            { key: 'purpleSplash', x: this.scale.width / 1.3, y: this.scale.height / 10, scale: 1, delay: 950 },
            { key: 'purpleSplash', x: this.scale.width / 3.3, y: this.scale.height / 10, scale: 1, delay: 1000 },
            { key: 'pinkSplash', x: this.scale.width / 1.5, y: this.scale.height / 1, scale: 1, delay: 1050 },
            { key: 'pinkSplash', x: this.scale.width / 3.5, y: this.scale.height / 1, scale: 1, delay: 1100 },
            { key: 'greenSplash', x: this.scale.width / 2.1, y: this.scale.height / 1, scale: 1, delay: 1150 },
            { key: 'greenSplash', x: this.scale.width / 2.1, y: this.scale.height / 10, scale: 1, delay: 1200 }
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