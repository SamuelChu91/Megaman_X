import Player from "./player";
import Background from "./background";
import Controls from "./controls";
import Platform from "./platform";

const PLATFORM = require("../assets/images/stage/stage2.json");

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

        this.colLoop = this.colLoop.bind(this);
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
        const { floor, yPos, xSize, ySize } = this.player;
        // debugger
        let boolVal = false;
        // this.arrOfPlatforms.forEach((platform) => {
        //     if (platform.collision(this.player.floor, this.player.yPos, 35, 35)) {
        //         // this.player.collision = true;
        //         return boolVal = true;
        //     } else {
        //         // this.player.collision = false;
        //         boolVal = false;
        //     }
        //     // debugger
        // })
        for (let i = 0; i < this.arrOfPlatforms.length; i++) {
            if (this.arrOfPlatforms[i].collision(floor, yPos, xSize, ySize)) {
                // debugger
                boolVal = true;
                debugger
                break;
            } else {
                boolVal = false;
            }
        }
        this.player.collision = boolVal;
        // debugger
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