

export default class Background {
    constructor(ctx) {
        this.ctx = ctx;
        this.setBg();
    }

    // setBg () {
    //     this.Bg = new Image();
    //     this.Bg.src = '../assets/images/stage/stage.png';
    //     this.Bg.onload = this.drawBg.bind(this);

    //     this.sky = new Image();
    //     this.sky.src = '../assets/images/stage/stage_background.png';
    //     this.sky.onload = this.drawBg.bind(this);
    // }

    // drawBg() {
    //     this.ctx.drawImage(this.sky, 0, 0, 3520, 440);
    //     // this.ctx.drawImage(this.Bg, 0, 0, 7686, 220, 0, 0, 7686 * 2, 220 * 2);
    //     this.ctx.drawImage(this.Bg, 400, 0, 7686, 220, 0, 0, 7686 * 2, 220 * 2);
    // }
}

// clear box collisions in tiled
// maybe draw in map (depends on spritesheet)
// generate monsters based on collisions*