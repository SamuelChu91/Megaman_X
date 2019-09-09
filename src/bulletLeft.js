export default class BulletLeft {
  constructor(ctx, xPos, yPos, dx, dy) {
    this.ctx = ctx;

    this.busterShot = new Image();
    this.busterShot.onload = this.drawBullet.bind(this);
    this.busterShot.src = '../assets/images/player/bullet2.png';


    this.xPos = xPos;
    this.yPos = yPos;
    this.dx = dx;
    this.dy = dy;
  }

  drawBullet() {
    this.ctx.drawImage(this.busterShot, this.xPos, this.yPos, 21, 14);
  }

  updateLeft() {
    this.xPos -= this.dx;
  }
}
