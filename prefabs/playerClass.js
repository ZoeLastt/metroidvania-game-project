class Player extends Phaser.Physics.Arcade.Sprite
{
    constructor(scene, x, y, c1, c2, c3)
    {
        super(scene, x, y);
        scene.add.existing(this);
        this.scene = scene; 

        this.sprite = scene.physics.add.sprite(x, y, 'player').setCollideWorldBounds(true);
        this.sprite.body.immovable = true;
        
        //parse collisions for player from main, tiles / enemy etc
        scene.physics.add.collider(this.sprite, c1);
        scene.physics.add.collider(this.sprite, c2);
        scene.physics.add.collider(this.sprite, c3);
    }

    update(input)
    {   
        //player movement through user input
        if(input.moveLeft.isDown)
        {   
            //move player and flip on x axis - change direction 
            this.sprite.setVelocityX(-150);
            this.sprite.setFlipX(true);

            if(this.sprite.body.blocked.down)
            {
               this.sprite.play('walk', true); 
            }
            
        }
        else if(input.moveRight.isDown)
        {
            this.sprite.setVelocityX(150);
            this.sprite.setFlipX(false);

            if(this.sprite.body.blocked.down)
            {
              this.sprite.play('walk', true);  
            }
        }
        else
        { 
            //player is in 'idle' state - not moving
            this.sprite.setVelocityX(0);

            if(this.sprite.body.blocked.down)
            {
               this.sprite.play('idle', true); 
            } 
        }

        if(input.jump.isDown && this.sprite.body.blocked.down)
        { 
            //make player 'jump'
            this.sprite.setVelocityY(-300);
        }

        if(!this.sprite.body.blocked.down)
        {
            //set player jump animations depending on if falling down or moving up (jump)
            if(this.sprite.body.velocity.y < 0)
            {
               this.sprite.play('jump'); 
            }
            else if(this.sprite.body.velocity.y > 0)
            {
                this.sprite.play('fall');
            }
        }
    }
}