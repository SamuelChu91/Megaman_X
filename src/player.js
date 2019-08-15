import Controls, { RIGHT, LEFT, JUMP, SHOOT } from './controls';
import Bullets from './bullet';

const MEGA_RIGHT = {
    src: '../assets/images/player/player.png',
};

const MEGA_LEFT = {
    src: '../assets/images/player/player2.png',
};

// so I should make render class, objects 
// youtube side scrolling tutorials
// tiled tutorial, take care of map/platforms


export default class Player {
    constructor(ctx) {
        // debugger
        this.ctx = ctx;
        this.xPos = 120;
        this.yPos = 195;
        this.xSize = 30;
        this.ySize = 35;
        
        this.sx = 210;
        this.sy = 15;
        this.nextSprite = { x:35, y:40 }

        this.spriteSize = 35;
        
        this.dX = 4;
        this.dY = 4;
        
        this.step = 35;
        this.traverse = this.traverse.bind(this);
        this.activity = 'stand';
        this.initAnim();
        this.renderTime = new Date().getTime();
    }

    initAnim() {
        this.rightSprites = new Image();
        this.rightSprites.src = MEGA_RIGHT.src;
        this.rightSprites.onload = this.drawPlayer.bind(this);

        this.leftSprites = new Image();
        this.leftSprites.src = MEGA_LEFT.src;
        this.leftSprites.onload = this.drawPlayer.bind(this);


        // const standingFrames = [
        //     this.ctx.drawImage(this.rightSprites, this.sx, this.sy, this.nextSprite.x, this.nextSprite.y, this.xPos, this.yPos, this.xSize * 2, this.ySize * 2),
        //     this.ctx.drawImage(this.rightSprites, this.sx + 35, this.sy, this.nextSprite.x, this.nextSprite.y, this.xPos + 100, this.yPos, this.xSize * 2, this.ySize * 2),
        //     this.ctx.drawImage(this.rightSprites, this.sx + 70, this.sy, this.nextSprite.x, this.nextSprite.y, this.xPos + 200, this.yPos, this.xSize * 2, this.ySize * 2),
        // ]
    }
    
    moveLeft() {
        // debugger
        if (LEFT) {
            this.xPos -= this.dX;
            this.activity = "run-left";
        } 
        // else {
        //     this.activity = 'stand-left';
        // }
    }

    moveRight() {
        if (RIGHT) {
            // debugger
            this.xPos += this.dX;
            this.activity = "run";
        } 
        else {
            this.activity = 'stand';
        }
    }

    moveUp() {
        if (JUMP) {
            this.yPos -= this.dY;
        }
    }

    shoot() {
        if (SHOOT) {

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
        // this.standingMega();
    }

    traverse() {
        let t = new Date().getTime();
        if (t > this.renderTime) {
            this.step += 35
            this.renderTime = t + 1000;
        }
        // this.step += 35;
        if (this.step >= 105) {
            this.step -= 105;
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
            this.ctx.drawImage(this.rightSprites, this.sx + this.step, this.sy, this.nextSprite.x, this.nextSprite.y, this.xPos, this.yPos, this.xSize * 2, this.ySize * 2);

            // this.ctx.drawImage(this.rightSprites, this.sx + 70, this.sy, this.nextSprite.x, this.nextSprite.y, this.xPos + 100, this.yPos, this.xSize * 2, this.ySize * 2);
            // this.ctx.drawImage(this.rightSprites, this.sx + 105, this.sy, this.nextSprite.x, this.nextSprite.y, this.xPos + 200, this.yPos, this.xSize * 2, this.ySize * 2);
            // this.ctx.drawImage(this.rightSprites, 315, 15, this.nextSprite.x, this.nextSprite.y, this.xPos + 100, this.yPos, this.xSize * 2, this.ySize * 2);
        } 

        if (this.activity === 'run') {
            this.ctx.drawImage(this.rightSprites, 315, 15, this.nextSprite.x, this.nextSprite.y, this.xPos, this.yPos, this.xSize * 2, this.ySize * 2);
            this.ctx.drawImage(this.rightSprites, 315 + this.step, 15, this.nextSprite.x, this.nextSprite.y, this.xPos + 100, this.yPos, this.xSize * 2, this.ySize * 2);

        }

        if (this.activity === 'stand-left') {
            // debugger
            this.ctx.drawImage(this.leftSprites, 390, 15, 35, 40, this.xPos - 100, this.yPos, this.xSize * 2, this.ySize * 2);
        }

        if (this.activity === 'run-left') {
            this.ctx.drawImage(this.leftSprites, 350, 15, 35, 40, this.xPos - 100, this.yPos, this.xSize * 2, this.ySize * 2);
        }
    }

    animate() {
        this.traverse();
        this.update();
        this.drawPlayer();
    }
}