class main_scene extends Phaser.Scene
{
    constructor()
    {
        super('main_scene');
    }
    
    create()
    {
        //add the background 
        this.background = this.add.tileSprite(256, 416, 512, 832, 'scrollingBg');
        
        //load tilemaps
        let map = this.add.tilemap('map');
        let terrain = map.addTilesetImage('terrain', 'terrainTiles');

        //add tile layer to scene
        this.interacts = map.createLayer('interacts', [terrain], 0, 0);
        this.border = map.createStaticLayer('border', [terrain], 0, 0);
        this.platform = map.createStaticLayer('platform', [terrain], 0, 0);

        //set what tile number collides - need fine tuning - too much code?
        this.platform.setCollision([6, 7, 8, 28, 29, 30, 50, 51, 52, 105, 106, 107, 108, 109, 127, 128, 129, 130, 131, 149, 150, 151]);
        this.border.setCollision([0, 1, 2, 3, 4, 22, 23, 24, 25, 26, 44, 45, 46, 88, 89, 90, 91, 92, 110, 111, 112, 113, 114, 132, 133, 134]);
        this.interacts.setCollision([39, 40, 41]);

        //add enemy
        this.enemy = new Enemy(this, 128, 208, this.border, this.platform);

        //add new player 
        this.player = new Player(this, 48, 128, this.platform, this.border, this.interacts);

        //create keyboard controls 
        this.keys = this.input.keyboard.addKeys({ moveLeft: 'A', moveRight: 'D', jump: 'space'});
    }

    update()
    {
        //call objects' update methods
        this.player.update(this.keys);
        this.enemy.update();

        //make the background endlessly scroll 
        this.background.tilePositionY -= 0.25;
    }
}