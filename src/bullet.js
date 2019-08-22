export default class Bullet {
    constructor(ctx, xPos, yPos, dx, dy, xSize, ySize) {
        this.ctx = ctx;

        this.busterShot = new Image();
        this.busterShot.src = '../assets/images/player/bullet.png';

        this.xPos = xPos;
        this.yPos = yPos;
        this.dx = dx;
        this.dy = dy;

        this.xSize = xSize;

    }

    drawBullet() {
        this.ctx.drawImage(this.busterShot, this.xPos, this.yPos, this.xSize, this.ySize);
    }


}