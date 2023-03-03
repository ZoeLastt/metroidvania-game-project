//global vars
const gameWidth = 400;
const gameHeight = 240;

//set up our game 
window.onload = function()
{
    const config = 
    {
        type: Phaser.WEBGL,
        width: gameWidth,
        height: gameHeight,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        physics: {
        default: 'arcade', 
        arcade: {
        gravity: { y: 900 },
        debug: true,
        pixelArt:true
        }
        },
        scene: [preload_scene, main_scene]
    }; 
    const game = new Phaser.Game(config);
}