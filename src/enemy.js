import Controls, { RIGHT, LEFT } from './controls';

export default class Enemy {
    constructor(ctx, x, y, dx, dy, mega) {
        this.ctx = ctx;

        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;

        this.mega = mega;
        this.initAnim();
        this.eX = 500;

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
        const { x, y, width, height } = this;
        let xCol = ((pX < x + width && pX > x) || (pX + pWidth < x + width && pX + pWidth > x));
        let yCol = ((pY < y + height && pY > y) || (pY + pHeight < y + height && pY + pHeight > y));
        // debugger
        return xCol && yCol;
        // return false;
    }

    drawEnemy() {
        if (this.mega > 800 && this.mega < 1000) {
            this.ctx.drawImage(this.wheel, 0, 0, 40, 40, this.x, this.y, 80, 80);
        }

        if (this.mega > 1050 && this.mega < 1350) {
            this.ctx.drawImage(this.elec, 0, 0, 50, 60, this.eX, 135, 100, 120);
        }
    }

    update() {
        this.x -= this.dx;
        if (RIGHT) {
            this.x -= this.dx;
            this.eX -= this.dx;
        }

        if (LEFT) {
            this.eX += this.dx;
        }
    }

    // animate() {
    //     this.update();
    //     this.drawEnemy();
    // }
}