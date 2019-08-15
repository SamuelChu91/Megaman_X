import Player from "./player";
import Background from "./background";
import Controls from "./controls";

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
    }



    clearCanvas() {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
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
        this.background.drawBg();
        this.player.animate();
    }
}