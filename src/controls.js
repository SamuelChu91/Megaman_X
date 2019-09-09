/* eslint-disable import/no-mutable-exports */
const KEYCODE_X = 88;
const KEYCODE_LEFT = 37;
const KEYCODE_RIGHT = 39;
const KEYCODE_Z = 90;

export let JUMP = false;
export let LEFT = false;
export let RIGHT = false;
export let SHOOT = false;
// make more variables to account for
export let FACERIGHT = false;
export let FACELEFT = false;

export default class Controls {
  constructor(player) {
    this.player = player;

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);

    document.onkeydown = this.handleKeyPress;
    document.onkeyup = this.handleKeyUp;

    // document.addEventListener("keydown", this.handleKeyPress);
    // document.addEventListener("keyup", this.handleKeyUp);
  }

  handleKeyPress(e) {
    e.preventDefault();
    switch (e.keyCode) {
      case KEYCODE_X:
        JUMP = true;
        break;
      case KEYCODE_LEFT:
        LEFT = true;
        FACELEFT = false;
        FACERIGHT = false;
        RIGHT = false;
        break;
      case KEYCODE_RIGHT:
        RIGHT = true;
        FACELEFT = false;
        FACERIGHT = false;
        LEFT = false;
        break;
      case KEYCODE_Z:
        SHOOT = true;
        break;
      default:
        break;
    }
  }

  handleKeyUp(e) {
    e.preventDefault();
    switch (e.keyCode) {
      case KEYCODE_X:
        JUMP = false;
        break;
      case KEYCODE_LEFT:
        LEFT = false;
        FACELEFT = true;
        break;
      case KEYCODE_RIGHT:
        RIGHT = false;
        FACERIGHT = true;
        break;
      case KEYCODE_Z:
        SHOOT = false;
        break;
      default:
        break;
    }
  }
}
