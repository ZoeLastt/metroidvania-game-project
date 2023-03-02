class Enemy extends Phaser.Physics.Arcade.Sprite
{
    constructor(scene, x, y, c1, c2)
    {
        super(scene, x, y);
        scene.add.existing(this);
        this.scene = scene;

        //add sprite
        this.sprite = scene.physics.add.sprite(x, y, 'enemy').setCollideWorldBounds(true);

        //set world collisions
        scene.physics.add.collider(this.sprite, c1);
        scene.physics.add.collider(this.sprite, c2);

        //play walk animation - to be expanded on when new events are added 
        this.sprite.play({key: 'enemyWalk', repeat: -1});
    }

    update()
    {
        //start moving if not moving
        if(this.sprite.body.velocity.x == 0)
        {
            this.sprite.setVelocityX(-25);
        }

        //patrol
        if(this.sprite.body.blocked.left)
        {
            this.sprite.setVelocityX(25);
            this.sprite.setFlipX(true);
        }
        else if(this.sprite.body.blocked.right)
        {
            this.sprite.setVelocityX(0);
            this.sprite.setFlipX(false);
        }
    }

    //to add - player collision + smarter movement - jump up platforms etc


}