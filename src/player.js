import Controls, { RIGHT, LEFT, JUMP, SHOOT, FACELEFT, FACERIGHT } from './controls';
import Bullets from './bullet';

const MEGA_RIGHT = {
    src: '../assets/images/player/mega_man.png',
};

const MEGA_LEFT = {
    src: '../assets/images/player/mega_man2.png',
};

const MEGA_RUN_FRAMES = [1, 35, 69, 100, 142, 180, 213, 244, 275, 312, 353, 390];
// so I should make render class,objects 
// youtube side scrolling tutorials
// tiled tutorial, take care of map/platforms
const MEGA_LEFT_RUN_FRAMES = [1380, 1345, 1315, 1282, 1240, 1202, 1170, 1141, 1107, 1067, 1028];

const MEGA_RUN_SHOOT_FRAMES = [36, 75, 115, 162, 204, 243, 283, 326, 371, 413];


export default class Player {
    constructor(ctx) {
        // debugger
        this.ctx = ctx;
        this.xPos = 120;
        this.yPos = 190;
        this.xSize = 35;
        this.ySize = 35;
        
        this.sx = 225;
        this.sy = 29;
        this.srcSprite = { x:35, y:35 }

        this.spriteSize = 35;
        
        this.dX = 4;
        this.dY = 4;
        
        this.step = 35;
        this.runStep = 0;
        this.runShootStep = 0;

        this.traverse = this.traverse.bind(this);
        this.traverseRun = this.traverseRun.bind(this);

        this.activity = 'stand';
        this.initAnim();
        this.renderStandTime = new Date().getTime();
        this.renderRunTime = new Date().getTime();
    }

    initAnim() {
        this.rightSprites = new Image();
        this.rightSprites.src = MEGA_RIGHT.src;
        this.rightSprites.onload = this.drawPlayer.bind(this);

        this.leftSprites = new Image();
        this.leftSprites.src = MEGA_LEFT.src;
        this.leftSprites.onload = this.drawPlayer.bind(this);


        // const standingFrames = [
        //     this.ctx.drawImage(this.rightSprites, this.sx, this.sy, this.srcSprite.x, this.srcSprite.y, this.xPos, this.yPos, this.xSize * 2, this.ySize * 2),
        //     this.ctx.drawImage(this.rightSprites, this.sx + 35, this.sy, this.srcSprite.x, this.srcSprite.y, this.xPos + 100, this.yPos, this.xSize * 2, this.ySize * 2),
        //     this.ctx.drawImage(this.rightSprites, this.sx + 70, this.sy, this.srcSprite.x, this.srcSprite.y, this.xPos + 200, this.yPos, this.xSize * 2, this.ySize * 2),
        // ]
    }
    
    moveLeft() {
        // debugger
        if (LEFT) {
            this.xPos -= this.dX;
            this.activity = "run-left";
        } 
        else if (FACELEFT){
            this.activity = 'stand-left';
            // FACELEFT = false;
        }
    }

    moveRight() {
        if (RIGHT) {
            // debugger
            this.xPos += this.dX;
            this.activity = "run";
        } 
        else if (FACERIGHT){
            this.activity = 'stand';
            // FACERIGHT = false;
        }
    }

    moveUp() {
        if (JUMP) {
            this.yPos -= this.dY;
        }
    }

    shoot() {
        if (SHOOT && FACERIGHT) {
            this.activity = 'shoot';
        } else if (SHOOT && FACELEFT) {
            this.activity = 'shoot-left';
        } else if (SHOOT && RIGHT) {
            this.activity = 'run-shoot';
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
        // debugger
        this.moveLeft();
        this.moveRight();
        this.moveUp();
        this.shoot();
        // this.standingMega();
    }

    traverse() {
        let t = new Date().getTime();
        if (t > this.renderStandTime) {
            this.step += 35
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
        let r = new Date().getTime();
        if (r > this.renderRunTime) {
            this.runStep++;
            this.runShootStep++;
            this.renderRunTime = r + 100;
        }
        if (this.runStep >= 11) {
            this.runStep = 0;
        }
        if (this.runShootStep >= 9) {
            this.runShootStep = 0;
        }
    }
    
    drawPlayer() {
        // let step = 35;
        // step += 35;
        // if (step === 105) {
        //     step = 35;
        // }
        // debugger
        if (this.activity === 'stand') {
            // debugger
            // let frameCount = 0;
            this.ctx.drawImage(this.rightSprites, this.sx + this.step, this.sy, this.srcSprite.x, this.srcSprite.y, this.xPos, this.yPos, this.xSize * 2, this.ySize * 2);

            // this.ctx.drawImage(this.rightSprites, this.sx + 70, this.sy, this.srcSprite.x, this.srcSprite.y, this.xPos + 100, this.yPos, this.xSize * 2, this.ySize * 2);
            // this.ctx.drawImage(this.rightSprites, this.sx + 105, this.sy, this.srcSprite.x, this.srcSprite.y, this.xPos + 200, this.yPos, this.xSize * 2, this.ySize * 2);
            // this.ctx.drawImage(this.rightSprites, 315, 15, this.srcSprite.x, this.srcSprite.y, this.xPos + 100, this.yPos, this.xSize * 2, this.ySize * 2);
        } 

        if (this.activity === 'run') {
            this.ctx.drawImage(this.rightSprites, 1 + MEGA_RUN_FRAMES[this.runStep], 67, this.srcSprite.x, this.srcSprite.y, this.xPos, this.yPos, this.xSize * 2, this.ySize * 2);
            // this.ctx.drawImage(this.rightSprites, 315 + this.step, 15, this.srcSprite.x, this.srcSprite.y, this.xPos + 100, this.yPos, this.xSize * 2, this.ySize * 2);

        }

        if (this.activity === 'stand-left') {
            // debugger
            this.ctx.drawImage(this.leftSprites, 1055 + this.step, this.sy, 35, 35, this.xPos, this.yPos, this.xSize * 2, this.ySize * 2);
        }

        if (this.activity === 'run-left') {
            this.ctx.drawImage(this.leftSprites, MEGA_LEFT_RUN_FRAMES[this.runStep], 67, 35, 35, this.xPos, this.yPos, this.xSize * 2, this.ySize * 2);
        }

        if (this.activity === 'shoot') {
            this.ctx.drawImage(this.rightSprites, 361, this.sy, this.srcSprite.x, this.srcSprite.y, this.xPos, this.yPos, this.xSize * 2, this.ySize * 2);
        }

        if (this.activity === 'shoot-left') {
            this.ctx.drawImage(this.leftSprites, 1020, this.sy, this.srcSprite.x, this.srcSprite.y, this.xPos, this.yPos, this.xSize * 2, this.ySize * 2);
        }

        if (this.activity === 'run-shoot') {
            this.ctx.drawImage(this.rightSprites, MEGA_RUN_SHOOT_FRAMES[this.runShootStep], 106, this.srcSprite.x, this.srcSprite.y, this.xPos, this.yPos, this.xSize * 2, this.ySize * 2);
        }
    }

    // run shoot frames = [36, 75, 115, 162, 204, 243, 283, 326, 371, 413 ]
    
    animate() {
        this.update();
        this.traverseRun();
        this.traverse();
        this.drawPlayer();
    }
}