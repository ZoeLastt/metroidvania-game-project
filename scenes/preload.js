class preload_scene extends Phaser.Scene
{   //scene used to load all assets, anims, sound etc into game 
    constructor()
    {
        super('preload_scene');
    }

    preload()
    {
        this.load.spritesheet('player', './assets/images/playeranims.png', {frameWidth: 32, frameHeight: 32});
        this.load.spritesheet('enemy', './assets/images/chicken.png', {frameWidth: 32, frameHeight: 34});
        this.load.spritesheet('fruitSprite', './assets/images/fruits.png', {frameWidth: 32, frameHeight: 32});

        this.load.image('terrainTiles', './assets/images/Terrain (16x16).png');
        this.load.image('scrollingBg', './assets/images/scrollbg.png');

        this.load.tilemapTiledJSON('map', './assets/maps/testmap.json'); 
    }

    create()
    {
        //create player animations
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

        //create enemy animations 
        const enemyIdleAnimation = this.anims.create({
            key:'enemyIdle',
            frames: this.anims.generateFrameNumbers('enemy', {frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}), 
            frameRate: 16
        });
        const enemyWalkAnimation = this.anims.create({
            key:'enemyWalk',
            frames: this.anims.generateFrameNumbers('enemy', {frames: [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]}), 
            frameRate: 12
        });
        const enemyHitAnimation = this.anims.create({
            key:'enemyHit',
            frames: this.anims.generateFrameNumbers('enemy', {frames: [27, 28, 29, 30, 31, 32]}), 
            frameRate: 16
        });

        //create fruit animations 
        const appleAnimation = this.anims.create({
            key:'fruit1',
            frames: this.anims.generateFrameNumbers('fruitSprite', {frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]}), 
            frameRate: 16
        });
        const melonAnimation = this.anims.create({
            key:'fruit2',
            frames: this.anims.generateFrameNumbers('fruitSprite', {frames: [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]}), 
            frameRate: 16
        });
        const orangeAnimation = this.anims.create({
            key:'fruit3',
            frames: this.anims.generateFrameNumbers('fruitSprite', {frames: [34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]}), 
            frameRate: 16
        });
        const kiwiAnimation = this.anims.create({
            key:'fruit4',
            frames: this.anims.generateFrameNumbers('fruitSprite', {frames: [51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67]}), 
            frameRate: 16
        });
        const bananaAnimation = this.anims.create({
            key:'fruit5',
            frames: this.anims.generateFrameNumbers('fruitSprite', {frames: [68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84]}), 
            frameRate: 16
        });
        const pickUpAnimation = this.anims.create({
            key:'pickup',
            frames: this.anims.generateFrameNumbers('fruitSprite', {frames: [85, 86, 87, 88, 89, 90]}), 
            frameRate: 16
        });

        //placeholder - in final check if all assets are loaded correctly
        this.scene.start('main_scene');
    }
}