import Player from './player';
import Background from './background';
import Controls from './controls';
import Platform from './platform';

const PLATFORM = require('../assets/images/stage/stage2.json');

export default class Game {
  constructor(ctx, canvas, player, background) {
    this.ctx = ctx;
    this.canvas = canvas;

    // this.background = new Background(ctx);
    this.background = background;
    // this.player = new Player(ctx);
    this.player = player;
    this.controls = new Controls(this.player);

    this.play = this.play.bind(this);
    this.clearCanvas = this.clearCanvas.bind(this);
    // this.speed = speed;
    // this.renderTime = new Date().getTime();
    this.arrOfPlatforms = [];
    this.initPlatforms();

    this.collisionLoop = this.collisionLoop.bind(this);
    this.pause = this.pause.bind(this);
    this.togglePause = this.togglePause.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);

    this.paused = false;
    document.addEventListener('keydown', this.handleKeyPress);
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

  collisionLoop() {
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
    this.paused = false;
  };

  pause() {
    cancelAnimationFrame(this.animationFrameId);
    this.paused = true;
  };

  togglePause() {
    if (!this.paused) {
      this.pause();
    } else {
      this.play();
    };
  };

  handleKeyPress(e) {
    if (e.which === 80) {
      this.togglePause();
    };
  };

  render() {
    this.collisionLoop();
    this.background.animate();
    this.player.animate();
  };
};

// check conditional statement coll loop for enemies
// add enemies to array, loop through for collisions
