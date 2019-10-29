import { RIGHT, LEFT } from './controls';

export default class Enemy {
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

    this.stomper = new Image();
    this.stomper.onload = this.drawEnemy.bind(this);
    this.stomper.src = '../assets/images/enemies/stomper.png';

    this.elec = new Image();
    this.elec.onload = this.drawEnemy.bind(this);
    this.elec.src = '../assets/images/enemies/elec.png';
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
    if (this.mega > 800 && this.mega < 1000) {
      this.ctx.drawImage(this.wheel, 0, 0, 40, 40, this.x, this.y, 80, 80);
    }

    if (this.mega > 1050 && this.mega < 1350) {
      // x : 500
      // y : 135
      this.ctx.drawImage(this.elec, 0, 0, 50, 60, this.x, this.y, 100, 120);
    }

    if (this.mega > 2000 && this.mega < 2500) {
      // x : 450
      // y : 10
      this.ctx.drawImage(this.stomper, 0, 0, 40, 40, this.x, this.y, 80, 80);
    }

    if (this.mega > 2900 && this.mega < 3500) {
      // x : 450
      // y : 10
      this.ctx.drawImage(this.stomper, 0, 0, 40, 40, this.x, this.y, 80, 80);
    }

    if (this.mega > 3600 && this.mega < 3800) {
      // x : 500
      // y : 135
      this.ctx.drawImage(this.elec, 0, 0, 50, 60, this.x, this.y, 100, 120);
    }

    // if (this.mega > 3600 && this.mega < 3800) {
    //   // x : 500
    //   // y : 135
    //   this.ctx.drawImage(this.stomper, 0, 0, 40, 40, this.x, this.y, 80, 80);
    // }

    if (this.mega > 4200 && this.mega < 4500) {
      // x : 500
      // y : 135
      this.ctx.drawImage(this.elec, 0, 0, 50, 60, this.x, this.y, 100, 120);
    }
    
  }

  update() {
    if (this.mega > 800 && this.mega < 1000) {
      this.x -= this.dx;
    }

    // if ((RIGHT && this.mega > 800 && this.mega < 1000) || (RIGHT && this.mega > 1050 && this.mega < 1600)) {
    //   this.x -= this.dx;
    // }

    if (this.mega > 2000 && this.mega < 2500 && this.y < 120) {
      this.y += 3;
    }

    if (this.mega > 2900 && this.mega < 3500 && this.y < 150) {
      this.y += 3;
    }

    if (RIGHT) {
      this.x -= this.dx;
    }

    if (LEFT) {
      this.x += this.dx;
    }

    // if (LEFT && this.mega > 800 && this.mega < 1000) {
    //   this.x -= this.dx;
    // }
    // if (RIGHT && this.mega > 1050 && this.mega < 1600) {
    //   this.x -= this.dx;
    // }

    // if (LEFT) {
    //   this.eX += this.dx;
    //   this.sX += this.dx;
    // }
  }

  // animate() {
  //     this.update();
  //     this.drawEnemy();
  // }
}
