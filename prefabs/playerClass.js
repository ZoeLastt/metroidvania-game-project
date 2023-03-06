let switchState;
let can;
class Player extends Phaser.Physics.Arcade.Sprite
{
    constructor(scene, x, y, c1, cam)
    {
        super(scene, x, y);
        scene.add.existing(this);
        this.scene = scene; 

        //create sprite and set collisions
        this.sprite = scene.physics.add.sprite(x, y, 'player').setCollideWorldBounds(true);
        scene.physics.add.collider(this.sprite, c1);

        //make camera follow our player
        cam.startFollow(this.sprite, true, 0.05, -200, 120);
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

        //jump mechanics
        if(input.jump.isDown && this.sprite.body.blocked.down )
        {
            this.sprite.setVelocityY(-300);    
        }

        //set player jump animations depending on if falling down or moving up (jump)
        if(!this.sprite.body.blocked.down)
        {
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