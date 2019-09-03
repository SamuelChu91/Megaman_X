export default class Enemy {
    constructor(ctx, xPos, yPos, dx, dy, mega) {
        this.ctx = ctx;

        this.xPos = xPos;
        this.yPos = yPos;
        this.dx = dx;
        this.dy = dy;

        this.mega = mega;
        this.initAnim();
    }

    initAnim() {
        this.wheel = new Image();
        this.wheel.onload = this.drawEnemy.bind(this);
        this.wheel.src = '../assets/images/enemies/wheel.png';
    }

    drawEnemy() {
        if (this.mega > 1160 && this.mega < 2250) {
            this.ctx.drawImage(this.wheel, this.xPos, this.yPos, 340, 40);
        }
    }

    update() {
        this.xPos -= this.dx;
    }

    animate() {
        this.update();
        this.drawEnemy();
    }
}