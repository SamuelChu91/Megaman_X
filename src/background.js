
import Controls, {RIGHT, LEFT} from './controls';

export default class Background {
    constructor(ctx) {
        this.ctx = ctx;
        this.xPos = 0;
        this.setBg();
    }

    setBg () {
        this.Bg = new Image();
        // this.Bg.src = 'https://samuelchu91.github.io/Megaman_X/assets/images/stage/stage.png';
        this.Bg.src = '../assets/images/stage/stage.png';
        this.Bg.onload = this.drawBg.bind(this);

        this.sky = new Image();
        this.sky.src = '../assets/images/stage/stage_background.png';
        this.sky.onload = this.drawBg.bind(this);
    }

    drawBg() {
        // debugger
        this.ctx.drawImage(this.sky, 0, 0, 3520, 440);
        this.ctx.drawImage(this.Bg, this.xPos, 0, 7686 * 2, 220 * 2, 0, 0, 7686 * 2, 220 * 2);
    }

    update() {
        if (LEFT) {
            this.xPos -= 4;
        } else if (RIGHT) {
            this.xPos += 4;
        }
    }

    animate() {
        this.update();
        this.drawBg();
    }
}

// clear box collisions in tiled
// maybe draw in map (depends on spritesheet)
// generate monsters based on collisions*
// y off by 40