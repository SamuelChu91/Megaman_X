export default class Health {
    constructor(ctx, xPos, yPos, hp) {
        this.ctx = ctx;
        this.xPos = xPos;
        this.yPos = yPos;
        this.hp = hp;

        this.full = new Image();
        this.full.onload = this.drawHealth.bind(this);
        this.full.src = '../assets/images/player/health.png';

        this.half = new Image();
        this.half.onload = this.drawHealth.bind(this);
        this.half.src = '../assets/images/player/half.png';

        this.almost = new Image();
        this.almost.onload = this.drawHealth.bind(this);
        this.almost.src = '../assets/images/player/almost.png';

        this.empty = new Image();
        this.empty.onload = this.drawHealth.bind(this);
        this.empty.src = '../assets/images/player/empty.png';
    }

    drawHealth() {
        if (this.hp === 3) {
            this.ctx.drawImage(this.full, this.xPos, this.yPos, 26, 100);
        }

        if (this.hp === 2) {
            this.ctx.drawImage(this.half, this.xPos, this.yPos, 26, 100);
        }

        if (this.hp === 1) {
            this.ctx.drawImage(this.almost, this.xPos, this.yPos, 26, 100);
        }

        if (this.hp === 0) {
            this.ctx.drawImage(this.empty, this.xPos, this.yPos, 26, 100);
        }
    }
}