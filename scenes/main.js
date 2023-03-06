class main_scene extends Phaser.Scene
{
    constructor()
    {
        super('main_scene');
    }
    
    create()
    {
        //add the background 
        this.background = this.add.tileSprite(256, 0, 512, 832, 'scrollingBg');
        this.background2 = this.add.tileSprite(768, 0, 512, 832, 'scrollingBg');

        //set up camera
        const cam = this.cameras.main;
        this.physics.world.setBounds(0, 0, 800, 240);
        cam.setBounds(0, 0, 800, 240);

        //create keyboard controls 
        this.keys = this.input.keyboard.addKeys({ moveLeft: 'A', moveRight: 'D', jump: 'space'});

        //load tilemaps
        let map = this.add.tilemap('map');
        let terrain = map.addTilesetImage('terrain', 'terrainTiles');

        //add tile layer and set collision
        this.platform = map.createStaticLayer('platforms', [terrain], 0, 0);
        this.platform.setCollisionBetween(0, 240);
     
        //add enemy
        this.enemy = new Enemy(this, 272, 208,this.platform, this.player);
        
        //add new player 
        this.player = new Player(this, 144, 160, this.platform, cam);
    }

    update()
    {
        //call objects' update methods
        this.player.update(this.keys);
        this.enemy.update();

        //make the background endlessly scroll 
        this.background.tilePositionY -= 0.25;
        this.background2.tilePositionY -= 0.25;

    }

}