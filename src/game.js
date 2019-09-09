import Player from './player';
import Background from './background';
import Controls from './controls';
import Platform from './platform';

const PLATFORM = require('../assets/images/stage/stage2.json');

export default class Game {
  constructor(ctx, canvas) {
    this.ctx = ctx;
    this.canvas = canvas;

    this.background = new Background(ctx);
    this.player = new Player(ctx);
    this.controls = new Controls(this.player);

    this.play = this.play.bind(this);
    this.clearCanvas = this.clearCanvas.bind(this);
    // this.speed = speed;
    // this.renderTime = new Date().getTime();
    this.arrOfPlatforms = [];
    this.initPlatforms();

    this.colLoop = this.colLoop.bind(this);
    this.pause = this.pause.bind(this);

    this.paused = false;
  };

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };

  initPlatforms() {
    const platformObjects = (PLATFORM.layers[1].objects);
    platformObjects.forEach((platform) => {
      const platformInstance = new Platform(platform.x, platform.y, platform.width, platform.height);
      this.arrOfPlatforms.push(platformInstance);
    });
  };

  colLoop() {
    const {
      floor,
      yPos,
      xSize,
      ySize,
    } = this.player;
    let boolVal = false;
    // this.arrOfPlatforms.forEach((platform) => {
    //     if (platform.collision(this.player.floor, this.player.yPos, 35, 35)) {
    //         // this.player.collision = true;
    //         return boolVal = true;
    //     } else {
    //         // this.player.collision = false;
    //         boolVal = false;
    //     }

    // })
    for (let i = 0; i < this.arrOfPlatforms.length; i += 1) {
      if (this.arrOfPlatforms[i].collision(floor, yPos, xSize, ySize)) {
        boolVal = true;
        break;
      } else {
        boolVal = false;
      }
    };
    this.player.collision = boolVal;
  };
  //           let t = new Date().getTime();
  // if (t > this.animeTime) {
  //     this.frame++;
  //     this.animeTime = t + 1000 / this.speed;
  // }


  play() {
    this.animationFrameId = requestAnimationFrame(this.play);
    this.clearCanvas();
    this.render();
    this.pause = false;
  };

  pause() {
    cancelAnimationFrame(this.animationFrameId);
    this.pause = true;
  };

  render() {
    this.colLoop();
    this.background.animate();
    this.player.animate();
  };
};
