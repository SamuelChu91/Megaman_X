import Player from "./player";
import Background from "./background";
import Controls from "./controls";
import Platform from "./platform";

const PLATFORM = require("../assets/images/stage/stages.json");

export default class Game {
    constructor(ctx, canvas) {
        // debugger
        this.ctx = ctx;
        this.canvas = canvas;
        // debugger
        this.background = new Background(ctx);
        this.player = new Player(ctx);
        this.controls = new Controls(this.player);

        this.play = this.play.bind(this);
        this.clearCanvas =  this.clearCanvas.bind(this);
        // this.speed = speed;
        // this.renderTime = new Date().getTime();
        this.arrOfPlatforms = [];
        this.initPlatforms();
    }



    clearCanvas() {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
        // ctx.clearRect(player_position_x - (camera_width/2), player_position_y - (camera_height/2), camera_width, camera_height)
    }

    initPlatforms() {
        let platformObjects = (PLATFORM.layers[1].objects);
        platformObjects.forEach((platform) => {
            let platformInstance = new Platform(platform.x, platform.y, platform.width, platform.height);
            this.arrOfPlatforms.push(platformInstance);
        })
        // debugger
    }

    colLoop() {

    }
    
//           let t = new Date().getTime();
// if (t > this.animeTime) {
//     this.frame++;
//     this.animeTime = t + 1000 / this.speed;
// }


    play() {
        // setTimeout(function() {
            requestAnimationFrame(this.play);
            this.clearCanvas();
            this.render();
        // }, 1000)
    }

    render() {
        // debugger
        this.colLoop();
        this.background.animate();
        this.player.animate();
    }
}