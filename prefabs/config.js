//init some global vars 
let keys; 
let playerSprite;
let player;
let floor;

//set up our game 
window.onload = function()
{
    const config = 
    {
        type: Phaser.WEBGL,
        width: 400,
        height: 240,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        physics: {
        default: 'arcade', 
        arcade: {
        gravity: { y: 900 },
        debug: false,
        pixelArt:true
        }
        },
        scene: [preload_scene, main_scene]
    }; 
    const game = new Phaser.Game(config);
}