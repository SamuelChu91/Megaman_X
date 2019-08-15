

export default class Background {
    constructor(ctx) {
        this.ctx = ctx;
        this.setBg();
    }

    setBg () {
        this.Bg = new Image();
        this.Bg.src = '../assets/images/stage.png';
        this.Bg.onload = this.drawBg.bind(this);
    }

    drawBg() {
        this.ctx.drawImage(this.Bg, 0, 0, 7686, 260, 0, 0, 7686 * 2, 260 * 2);
    }
}