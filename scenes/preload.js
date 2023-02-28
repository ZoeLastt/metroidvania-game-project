class preload_scene extends Phaser.Scene
{   //scene used to load all assets, anims, sound etc into game 
    constructor()
    {
        super('preload_scene');
    }

    preload()
    {
        this.load.spritesheet('player', './assets/images/playeranims.png', {frameWidth: 32, frameHeight: 32});
        this.load.image('terrainTiles', './assets/images/Terrain (16x16).png');
        this.load.image('scrollingBg', './assets/images/scrollbg.png');
        this.load.tilemapTiledJSON('map', './assets/maps/testmap.json'); 
    }

    create()
    {
        const idleAnimation = this.anims.create({
            key:'idle',
            frames: this.anims.generateFrameNumbers('player', {frames:[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}),
            frameRate: 16
        });
        const walkAnimation = this.anims.create({
            key:'walk',
            frames: this.anims.generateFrameNumbers('player', {frames: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]}),
            frameRate: 20

        });
        const damagedAnimation = this.anims.create({
            key:'hit',
            frames: this.anims.generateFrameNumbers('player', {frames: [23, 24, 25, 26, 27, 28, 29]}),
            frameRate: 16
        });
        const jumpAnimation = this.anims.create({
            key:'jump',
            frames: this.anims.generateFrameNumbers('player', {frames: [30]}),
            frameRate: 16
        });
        const fallAnimation = this.anims.create({
            key:'fall',
            frames: this.anims.generateFrameNumbers('player', {frames: [31]}),
            frameRate: 16
        });

        //placeholder - in final check if all assets are loaded correctly
        this.scene.start('main_scene');
    }
}