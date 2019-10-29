import { RIGHT, LEFT } from './controls';

export default class Wheel {
  constructor(ctx, x, y, width, height, dx, dy, mega) {
    this.ctx = ctx;

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.dx = dx;
    this.dy = dy;

    this.mega = mega;
    this.initAnim();

    this.hp = 3;

    this.collision = this.collision.bind(this);
  }

  initAnim() {
    this.wheel = new Image();
    this.wheel.onload = this.drawEnemy.bind(this);
    this.wheel.src = '../assets/images/enemies/wheel.png';
  }

  collision(pX, pY, pWidth, pHeight) {
    const {
      x,
      y,
      width,
      height,
    } = this;

    const xCol = ((pX < x + width && pX > x) || (pX + pWidth < x + width && pX + pWidth > x));
    const yCol = ((pY < y + height && pY > y) || (pY + pHeight < y + height && pY + pHeight > y));
    return xCol && yCol;
    // return xCol;
  }

  drawEnemy() {
    if (this.mega > 4200 && this.mega < 4500) {
      // x : 500
      // y : 135
      this.ctx.drawImage(this.wheel, 0, 0, 40, 40, this.x, this.y, 80, 80);
    }
  }

  update() {
    if (this.mega > 4200 && this.mega < 4500) {
      this.x -= this.dx;
    }

    if (RIGHT) {
      this.x -= this.dx;
    }

    if (LEFT) {
      this.x += this.dx;
    }
  }
}