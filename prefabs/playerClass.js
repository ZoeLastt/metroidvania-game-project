let switchState;
let can;
class Player extends Phaser.Physics.Arcade.Sprite
{
    constructor(scene, x, y, c1, c2, c3, enemy)
    {
        super(scene, x, y);
        scene.add.existing(this);
        this.scene = scene; 

        this.sprite = scene.physics.add.sprite(x, y, 'player').setCollideWorldBounds(true);
        
        //parse collisions for player from main, tiles / enemy etc
        scene.physics.add.collider(this.sprite, c1);
        scene.physics.add.collider(this.sprite, c2);
        scene.physics.add.collider(this.sprite, c3);

        //not working for enemy or fruit group 
        scene.physics.add.collider(this.sprite, enemy);
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

        //jump mechanics && unpolished wall jump mechanic
        if(input.jump.isDown && this.sprite.body.blocked.down )
        {
            this.sprite.setVelocityY(-300);    
        }
        else if(input.jump.isDown && !this.sprite.body.blocked.down)
        {
            if(!switchState)
            {
                if(this.sprite.body.blocked.left)
                {
                    this.sprite.setVelocityY(-300);
                    switchState = true;
                }
                else if(this.sprite.body.blocked.right)
                {
                    this.sprite.setVelocityY(-300);
                    switchState = true;
                }
                
            }
        }
        if(input.jump.isUp)
        {
            switchState = false;
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