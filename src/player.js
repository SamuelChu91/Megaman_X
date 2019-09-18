import {
  RIGHT,
  LEFT,
  JUMP,
  SHOOT,
  FACELEFT,
  FACERIGHT,
} from './controls';
import Bullet from './bullet';
import BulletLeft from './bulletLeft';
import Health from './health';
import Enemy from './enemy';

// make map class
// take in json array

const MEGA_RIGHT = {
  src: 'assets/images/player/mega_man.png',
};

const MEGA_LEFT = {
  src: 'assets/images/player/mega_man2.png',
};

const MEGA_RUN_FRAMES = [1, 35, 69, 100, 142, 180, 213, 244, 275, 312, 353, 390];
// so I should make render class,objects 
// youtube side scrolling tutorials
// tiled tutorial, take care of map/platforms
const MEGA_LEFT_RUN_FRAMES = [1380, 1345, 1315, 1282, 1240, 1202, 1170, 1141, 1107, 1067, 1028];

const MEGA_RUN_SHOOT_FRAMES = [36, 75, 115, 162, 204, 243, 283, 326, 371, 413];
const MEGA_LEFT_RUN_SHOOT_FRAMES = [1347, 1310, 1270, 1224, 1182, 1142, 1102, 1059, 1014, 972];

const MEGA_JUMP_FRAMES = [3, 29, 53, 78, 108, 138, 170];
const MEGA_JUMP_LEFT_FRAMES = [1385, 1363, 1340, 1315, 1285, 1255, 1223];
const GRAVITY = 6;


// 225, ground level

export default class Player {
  constructor(ctx) {
    // debugger
    this.ctx = ctx;
    this.xPos = canvas.width / 2 - 35;
    this.yPos = 100;
    this.xSize = 35;
    this.ySize = 35;

    this.floor = canvas.width / 2 - 35;
    // 315
    // debugger
        
    this.sx = 225;
    this.sy = 29;
    this.srcSprite = { x: 35, y: 35 };

    this.spriteSize = 35;
        
    this.dX = 3;
    this.dY = 16.8;
    // this.jumpStr = 0;
    this.yVel = 0;
        
    this.step = 35;
    this.runStep = 0;
    this.runShootStep = 0;
    this.jumpStep = 0;

    this.traverse = this.traverse.bind(this);
    this.traverseRun = this.traverseRun.bind(this);
    this.encounter = this.encounter.bind(this);

    this.grounded = true;
    this.activity = 'stand';
    this.initAnim();
    this.grav();
    this.renderStandTime = new Date().getTime();
    this.renderRunTime = new Date().getTime();
    this.renderJumpTime = new Date().getTime();

    this.bullets = [];
    this.leftBullets = [];
    this.canShoot = true;
    this.onScreen = false;
    this.shoot = this.shoot.bind(this);

    this.shotX = this.xPos + 65;
    this.shotY = this.yPos + 22;

    this.faceRight = true;
    this.faceLeft = false;

    this.collision = true;

    this.canMeet = true;
    this.badGuys = [];
    this.hp = 3;
  }

  initAnim() {
    this.rightSprites = new Image();
    this.rightSprites.onload = this.drawPlayer.bind(this);
    this.rightSprites.src = MEGA_RIGHT.src;

    this.leftSprites = new Image();
    this.leftSprites.onload = this.drawPlayer.bind(this);
    this.leftSprites.src = MEGA_LEFT.src;


    // this.busterShot = new Image();
    // this.busterShot.onload = this.shoot.bind(this);
    // this.busterShot.src = '../assets/images/player/bullet.png';


    // const standingFrames = [
    //     this.ctx.drawImage(this.rightSprites, this.sx, this.sy, this.srcSprite.x, this.srcSprite.y, this.xPos, this.yPos, this.xSize * 2, this.ySize * 2),
    //     this.ctx.drawImage(this.rightSprites, this.sx + 35, this.sy, this.srcSprite.x, this.srcSprite.y, this.xPos + 100, this.yPos, this.xSize * 2, this.ySize * 2),
    //     this.ctx.drawImage(this.rightSprites, this.sx + 70, this.sy, this.srcSprite.x, this.srcSprite.y, this.xPos + 200, this.yPos, this.xSize * 2, this.ySize * 2),
    // ]
  }
    
  moveLeft() {
    if (LEFT) {
      // this.xPos -= this.dX;
      this.floor -= this.dX;
      this.activity = 'run-left';
      this.faceLeft = true;
      this.faceRight = false;
    } else if (FACELEFT) {
      this.activity = 'stand-left';
      // FACELEFT = false;
    }
  }

  moveRight() {
    if (RIGHT) {
      // this.xPos += this.dX;
      this.floor += this.dX;
      this.activity = 'run';
      this.faceRight = true;
      this.faceLeft = false;

    } 
    else if (FACERIGHT) {
      this.activity = 'stand';
      // FACERIGHT = false;
    }
  }

  moveUp() {
    if (JUMP && this.grounded) {
      this.yPos -= this.dY;
      this.yVel = this.dY;
    } else if (JUMP && !this.grounded) {
      this.yPos -= this.yVel;
      this.yVel /= 1.053;
    } else if (!JUMP && !this.grounded) {
      this.yVel = 0;
    }
  }

  // grav() {
  //     if (this.yPos + 35 >= 220 && this.floor <= 950) {
  //         this.grounded = true;
  //     } else if (this.floor >= 1000 && this.yPos + 35 >= 180) {
  //         this.grounded = true;
  //     } else {
  //         // debugger
  //         this.grounded = false;
  //         this.yPos += GRAVITY;
  //     }
  // }

  grav() {
    if (this.collision !== undefined) {
      if (this.collision) {
        // debugger
        this.grounded = true;
      } else {
        // debugger
        this.grounded = false;
        this.yPos += GRAVITY;
      }
    }
    // debugger
    if (this.yPos > 405) {
      this.hp = 0;
    }
  }

  // if (this.shot) {
  //     this.ctx.drawImage(this.busterShot, this.shotX += 1, this.shotY, 21, 14);
  // }

  // document.addEventListener('keydown', function(event) {
  //     if (event.keyCode === 90) {
  //         debugger
  //         this.shot = true;
  //     }
  // });

  encounter() {
    if (this.canMeet) {
      const badGuy = new Enemy(this.ctx, 680, 183, 3, 0, this.floor);
      this.badGuys.push(badGuy);
      this.canMeet = false;
      setTimeout(() => { this.canMeet = true; }, 1500);
      // if (badGuy.collision(this.floor, this.yPos, this.xSize, this.ySize)) {
      //     this.hp -= 1;
      // }
      for (let i = 0; i < this.badGuys.length; i += 1) {
        if (this.badGuys[i].collision(this.floor, this.yPos, this.xSize, this.ySize)) {
          this.hp -= 1;
        }
      }
    }
  }

  shoot() {
    if (SHOOT && this.canShoot && this.faceRight) {
      const shot = new Bullet(this.ctx, this.xPos + 65, this.yPos + 22, 8, 0);
      this.bullets.push(shot);
      this.canShoot = false;
      setTimeout(() => { this.canShoot = true; }, 200);
    }

    if (SHOOT && this.canShoot && this.faceLeft) {
      const leftShot = new BulletLeft(this.ctx, this.xPos - 5, this.yPos + 22, 8, 0);
      this.leftBullets.push(leftShot);
      this.canShoot = false;
      setTimeout(() => { this.canShoot = true; }, 200);
    }

    if (SHOOT && FACERIGHT) {
      this.activity = 'shoot';
    } else if (SHOOT && FACELEFT) {
      this.activity = 'shoot-left';
    } else if (SHOOT && RIGHT) {
      this.activity = 'run-shoot';
    } else if (SHOOT && LEFT) {
      this.activity = 'run-shoot-left';
    }
  }
  // standingMega() {
  //     if (this.activity = "run-left") {
  //         this.activity = 'stand-left';
  //     } else if (this.activity = 'run') {
  //         this.activity = 'stand';
  //     }
  // }

  update() {
    this.encounter();
    this.grav();
    this.moveUp();
    this.moveLeft();
    this.moveRight();
    this.shoot();
    // this.standingMega();
  }

  traverse() {
    const t = new Date().getTime();
    if (t > this.renderStandTime) {
      this.step += 35;
      this.renderStandTime = t + 700;
    }
    // this.step += 35;
    if (this.step >= 105) {
      this.step = 0;
    }
  }

  // right run frames
  // 35, 35, 30, 40, 40, 37, 27, 31, 37, 41, 37
  // 35, 70, 100, 140, 180, 217, 244, 275, 312, 353, 390

  // left run frames (start 1380)
  // 35
  traverseRun() {
    const r = new Date().getTime();
    if (r > this.renderRunTime) {
      this.runStep += 1;
      this.runShootStep += 1;
      this.renderRunTime = r + 49;
    }
    if (this.runStep >= 11) {
      this.runStep = 0;
    }
    if (this.runShootStep >= 9) {
      this.runShootStep = 0;
    }
  }

  traverseJump() {
    const j = new Date().getTime();
    if (j > this.renderJumpTime) {
      this.jumpStep += 1;
      this.renderJumpTime = j + 150;
    }
    if (this.jumpStep >= 6 || this.grounded) {
      this.jumpStep = 0;
    }
  }

  drawPlayer() {
    // let step = 35;
    // step += 35;
    // if (step === 105) {
    //     step = 35;
    // }
    if (this.activity === 'stand' && this.grounded) {
      // let frameCount = 0;
      this.ctx.drawImage(this.rightSprites, this.sx + this.step, this.sy, this.srcSprite.x, this.srcSprite.y, this.xPos, this.yPos, this.xSize * 2, this.ySize * 2);
      // this.ctx.drawImage(this.rightSprites, this.sx + 70, this.sy, this.srcSprite.x, this.srcSprite.y, this.xPos + 100, this.yPos, this.xSize * 2, this.ySize * 2);
      // this.ctx.drawImage(this.rightSprites, this.sx + 105, this.sy, this.srcSprite.x, this.srcSprite.y, this.xPos + 200, this.yPos, this.xSize * 2, this.ySize * 2);
      // this.ctx.drawImage(this.rightSprites, 315, 15, this.srcSprite.x, this.srcSprite.y, this.xPos + 100, this.yPos, this.xSize * 2, this.ySize * 2);
    }

    if (this.activity === 'run' && this.grounded) {
      this.ctx.drawImage(this.rightSprites, 1 + MEGA_RUN_FRAMES[this.runStep], 67, this.srcSprite.x, this.srcSprite.y, this.xPos, this.yPos, this.xSize * 2, this.ySize * 2);
      // this.ctx.drawImage(this.rightSprites, 315 + this.step, 15, this.srcSprite.x, this.srcSprite.y, this.xPos + 100, this.yPos, this.xSize * 2, this.ySize * 2);
    }

    if (this.activity === 'stand-left' && this.grounded) {
      // debugger
      this.ctx.drawImage(this.leftSprites, 1055 + this.step, this.sy, 35, 35, this.xPos, this.yPos, this.xSize * 2, this.ySize * 2);
    }

    if (this.activity === 'run-left' && this.grounded) {
      // debugger
      this.ctx.drawImage(this.leftSprites, MEGA_LEFT_RUN_FRAMES[this.runStep], 67, 35, 35, this.xPos, this.yPos, this.xSize * 2, this.ySize * 2);
    }

    if (this.activity === 'shoot' && this.grounded) {
      this.ctx.drawImage(this.rightSprites, 361, this.sy, this.srcSprite.x, this.srcSprite.y, this.xPos, this.yPos, this.xSize * 2, this.ySize * 2);
    }

    if (this.activity === 'shoot-left' && this.grounded) {
      this.ctx.drawImage(this.leftSprites, 1020, this.sy, this.srcSprite.x, this.srcSprite.y, this.xPos, this.yPos, this.xSize * 2, this.ySize * 2);
    }

    if (this.activity === 'run-shoot') {
      this.ctx.drawImage(this.rightSprites, MEGA_RUN_SHOOT_FRAMES[this.runShootStep], 106, this.srcSprite.x, this.srcSprite.y, this.xPos, this.yPos, this.xSize * 2, this.ySize * 2);
    }

    if (this.activity === 'run-shoot-left') {
      this.ctx.drawImage(this.leftSprites, MEGA_LEFT_RUN_SHOOT_FRAMES[this.runShootStep], 106, this.srcSprite.x, this.srcSprite.y, this.xPos, this.yPos, this.xSize * 2, this.ySize * 2);
    }

    if (!this.grounded && FACERIGHT) {
      this.ctx.drawImage(this.rightSprites, MEGA_JUMP_FRAMES[this.jumpStep], 148, this.srcSprite.x - 8, this.srcSprite.y + 8, this.xPos, this.yPos, 27 * 2, 43 * 2);
    }

    if (!this.grounded && FACELEFT) {
      this.ctx.drawImage(this.leftSprites, MEGA_JUMP_LEFT_FRAMES[this.jumpStep], 148, this.srcSprite.x - 8, this.srcSprite.y + 8, this.xPos, this.yPos, 27 * 2, 43 * 2);
    }
        
    if (this.activity === 'run' && !this.grounded) {
      this.ctx.drawImage(this.rightSprites, MEGA_JUMP_FRAMES[this.jumpStep], 148, this.srcSprite.x - 8, this.srcSprite.y + 8, this.xPos, this.yPos, 27 * 2, 43 * 2);
    }

    if (this.activity ==='run-left' && !this.grounded) {
      this.ctx.drawImage(this.leftSprites, MEGA_JUMP_LEFT_FRAMES[this.jumpStep], 148, this.srcSprite.x - 8, this.srcSprite.y + 8, this.xPos, this.yPos, 27 * 2, 43 * 2);
    }
    this.bullets.forEach((bullet, idx) => {
      // debugger
      bullet.drawBullet();
      if (bullet.xPos > 700) {
        this.bullets.splice(idx, 1);
      } else {
        bullet.updateRight();
      }
    });

    this.leftBullets.forEach((bullet, idx) => {
      bullet.drawBullet();
      if (bullet.xPos < 0) {
        this.leftBullets.splice(idx, 1);
      } else {
        bullet.updateLeft();
      }
    });

    this.badGuys.forEach((villian, idx) => {
      villian.drawEnemy();
      if (villian.x < 0) {
        this.badGuys.splice(idx, 1);
      } else {
        villian.update();
      }
    });

    const healthBar = new Health(this.ctx, 80, 100, this.hp);
    healthBar.drawHealth();
  }

  // left = [1347, 1310, 1270, 1224, 1182, 1142, 1102, 1059, 1014, 972]
  // run shoot frames = [36, 75, 115, 162, 204, 243, 283, 326, 371, 413 ]
  // jump r = [3, 29, 53, 78, 108, 138, 170]
  // left jump = [1385, 1363, 1340, 1315, 1285, 1255, 1223]
  animate() {
    this.update();
    this.traverseJump();
    this.traverseRun();
    this.traverse();
    this.drawPlayer();
  }
}

// first enemy 1160 x
