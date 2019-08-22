/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/background.js":
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Background = function () {
    function Background(ctx) {
        _classCallCheck(this, Background);

        this.ctx = ctx;
        this.setBg();
    }

    _createClass(Background, [{
        key: 'setBg',
        value: function setBg() {
            this.Bg = new Image();
            this.Bg.src = 'https://samuelchu91.github.io/Megaman_X/assets/images/stage/stage.png';
            this.Bg.onload = this.drawBg.bind(this);

            this.sky = new Image();
            this.sky.src = '../assets/images/stage/stage_background.png';
            this.sky.onload = this.drawBg.bind(this);
        }
    }, {
        key: 'drawBg',
        value: function drawBg() {
            debugger;
            this.ctx.drawImage(this.sky, 0, 0, 3520, 440);
            this.ctx.drawImage(this.Bg, 400, 0, 7686, 220, 0, 0, 7686 * 2, 220 * 2);
        }
    }]);

    return Background;
}();

// clear box collisions in tiled
// maybe draw in map (depends on spritesheet)
// generate monsters based on collisions*


exports.default = Background;

/***/ }),

/***/ "./src/bullet.js":
/*!***********************!*\
  !*** ./src/bullet.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bullet = function () {
    function Bullet(ctx, xPos, yPos, dx, dy, xSize, ySize) {
        _classCallCheck(this, Bullet);

        this.ctx = ctx;

        this.busterShot = new Image();
        this.busterShot.src = '../assets/images/player/bullet.png';

        this.xPos = xPos;
        this.yPos = yPos;
        this.dx = dx;
        this.dy = dy;

        this.xSize = xSize;
        this.ySize = ySize;
    }

    _createClass(Bullet, [{
        key: 'drawBullet',
        value: function drawBullet() {
            this.ctx.drawImage(this.busterShot, this.xPos, this.yPos, this.xSize, this.ySize);
        }
    }]);

    return Bullet;
}();

exports.default = Bullet;

/***/ }),

/***/ "./src/controls.js":
/*!*************************!*\
  !*** ./src/controls.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var KEYCODE_X = 88,
    KEYCODE_LEFT = 37,
    KEYCODE_RIGHT = 39,
    KEYCODE_Z = 90;

var JUMP = exports.JUMP = false;
var LEFT = exports.LEFT = false;
var RIGHT = exports.RIGHT = false;
var SHOOT = exports.SHOOT = false;
// make more variables to account for
var FACERIGHT = exports.FACERIGHT = false;
var FACELEFT = exports.FACELEFT = false;

var Controls = function () {
    function Controls(player) {
        _classCallCheck(this, Controls);

        this.player = player;

        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);

        document.onkeydown = this.handleKeyPress;
        document.onkeyup = this.handleKeyUp;

        // document.addEventListener("keydown", this.handleKeyPress);
        // document.addEventListener("keyup", this.handleKeyUp);
    }

    _createClass(Controls, [{
        key: "handleKeyPress",
        value: function handleKeyPress(e) {
            e.preventDefault();
            switch (e.keyCode) {
                case KEYCODE_X:
                    exports.JUMP = JUMP = true;
                    break;
                case KEYCODE_LEFT:
                    exports.LEFT = LEFT = true;
                    exports.FACELEFT = FACELEFT = false;
                    exports.FACERIGHT = FACERIGHT = false;
                    exports.RIGHT = RIGHT = false;
                    break;
                case KEYCODE_RIGHT:
                    exports.RIGHT = RIGHT = true;
                    exports.FACELEFT = FACELEFT = false;
                    exports.FACERIGHT = FACERIGHT = false;
                    exports.LEFT = LEFT = false;
                    break;
                case KEYCODE_Z:
                    exports.SHOOT = SHOOT = true;
                    break;
            }
        }
    }, {
        key: "handleKeyUp",
        value: function handleKeyUp(e) {
            e.preventDefault();
            switch (e.keyCode) {
                case KEYCODE_X:
                    exports.JUMP = JUMP = false;
                    break;
                case KEYCODE_LEFT:
                    exports.LEFT = LEFT = false;
                    exports.FACELEFT = FACELEFT = true;
                    break;
                case KEYCODE_RIGHT:
                    exports.RIGHT = RIGHT = false;
                    exports.FACERIGHT = FACERIGHT = true;
                    break;
                case KEYCODE_Z:
                    exports.SHOOT = SHOOT = false;
                    break;
            }
        }
    }]);

    return Controls;
}();

exports.default = Controls;

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _player = __webpack_require__(/*! ./player */ "./src/player.js");

var _player2 = _interopRequireDefault(_player);

var _background = __webpack_require__(/*! ./background */ "./src/background.js");

var _background2 = _interopRequireDefault(_background);

var _controls = __webpack_require__(/*! ./controls */ "./src/controls.js");

var _controls2 = _interopRequireDefault(_controls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
    function Game(ctx, canvas) {
        _classCallCheck(this, Game);

        // debugger
        this.ctx = ctx;
        this.canvas = canvas;
        // debugger
        this.background = new _background2.default(ctx);
        this.player = new _player2.default(ctx);
        this.controls = new _controls2.default(this.player);

        this.play = this.play.bind(this);
        this.clearCanvas = this.clearCanvas.bind(this);
        // this.speed = speed;
        // this.renderTime = new Date().getTime();
    }

    _createClass(Game, [{
        key: "clearCanvas",
        value: function clearCanvas() {
            this.ctx.clearRect(0, 0, canvas.width, canvas.height);
            // ctx.clearRect(player_position_x - (camera_width/2), player_position_y - (camera_height/2), camera_width, camera_height)
        }

        //           let t = new Date().getTime();
        // if (t > this.animeTime) {
        //     this.frame++;
        //     this.animeTime = t + 1000 / this.speed;
        // }

    }, {
        key: "play",
        value: function play() {
            // setTimeout(function() {
            requestAnimationFrame(this.play);
            this.clearCanvas();
            this.render();
            // }, 1000)
        }
    }, {
        key: "render",
        value: function render() {
            // debugger
            // this.background.drawBg();
            this.player.animate();
        }
    }]);

    return Game;
}();

exports.default = Game;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.H = exports.W = undefined;

var _game = __webpack_require__(/*! ./game */ "./src/game.js");

var _game2 = _interopRequireDefault(_game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var W = 700;
var H = 440;

exports.W = W;
exports.H = H;


document.addEventListener('DOMContentLoaded', function () {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    canvas.width = W;
    canvas.height = H;

    var game = new _game2.default(ctx, canvas);
    game.play();
    game.render();
});

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _controls = __webpack_require__(/*! ./controls */ "./src/controls.js");

var _controls2 = _interopRequireDefault(_controls);

var _bullet = __webpack_require__(/*! ./bullet */ "./src/bullet.js");

var _bullet2 = _interopRequireDefault(_bullet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// make map class
// take in json array

var MEGA_RIGHT = {
    src: '../assets/images/player/mega_man.png'
};

var MEGA_LEFT = {
    src: '../assets/images/player/mega_man2.png'
};

var MEGA_RUN_FRAMES = [1, 35, 69, 100, 142, 180, 213, 244, 275, 312, 353, 390];
// so I should make render class,objects 
// youtube side scrolling tutorials
// tiled tutorial, take care of map/platforms
var MEGA_LEFT_RUN_FRAMES = [1380, 1345, 1315, 1282, 1240, 1202, 1170, 1141, 1107, 1067, 1028];

var MEGA_RUN_SHOOT_FRAMES = [36, 75, 115, 162, 204, 243, 283, 326, 371, 413];
var MEGA_LEFT_RUN_SHOOT_FRAMES = [1347, 1310, 1270, 1224, 1182, 1142, 1102, 1059, 1014, 972];

var MEGA_JUMP_FRAMES = [3, 29, 53, 78, 108, 138, 170];
var MEGA_JUMP_LEFT_FRAMES = [1385, 1363, 1340, 1315, 1285, 1255, 1223];
var GRAVITY = 6;

// 225, ground level

var Player = function () {
    function Player(ctx) {
        _classCallCheck(this, Player);

        // debugger
        this.ctx = ctx;
        this.xPos = 120;
        this.yPos = 190;
        this.xSize = 35;
        this.ySize = 35;

        this.sx = 225;
        this.sy = 29;
        this.srcSprite = { x: 35, y: 35 };

        this.spriteSize = 35;

        this.dX = 4;
        this.dY = 16.8;
        this.jumpStr = 0;
        this.yVel = 0;

        this.step = 35;
        this.runStep = 0;
        this.runShootStep = 0;
        this.jumpStep = 0;

        this.traverse = this.traverse.bind(this);
        this.traverseRun = this.traverseRun.bind(this);

        this.grounded = true;
        this.activity = 'stand';
        this.initAnim();
        this.grav();
        this.renderStandTime = new Date().getTime();
        this.renderRunTime = new Date().getTime();
        this.renderJumpTime = new Date().getTime();
    }

    _createClass(Player, [{
        key: 'initAnim',
        value: function initAnim() {
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
    }, {
        key: 'moveLeft',
        value: function moveLeft() {
            // debugger
            if (_controls.LEFT) {
                this.xPos -= this.dX;
                this.activity = "run-left";
            } else if (_controls.FACELEFT) {
                this.activity = 'stand-left';
                // FACELEFT = false;
            }
        }
    }, {
        key: 'moveRight',
        value: function moveRight() {
            if (_controls.RIGHT) {
                // debugger
                this.xPos += this.dX;
                this.activity = "run";
            } else if (_controls.FACERIGHT) {
                this.activity = 'stand';
                // FACERIGHT = false;
            }
        }
    }, {
        key: 'moveUp',
        value: function moveUp() {
            if (_controls.JUMP && this.grounded) {
                this.yPos -= this.dY;
                this.yVel = this.dY;
            } else if (_controls.JUMP && !this.grounded) {
                this.yPos -= this.yVel;
                this.yVel /= 1.053;
            } else if (!_controls.JUMP && !this.grounded) {
                this.yVel = 0;
            }
        }
    }, {
        key: 'grav',
        value: function grav() {
            if (this.yPos + 35 >= 220) {
                this.grounded = true;
            } else {
                this.grounded = false;
                this.yPos += GRAVITY;
            }
        }
    }, {
        key: 'shoot',
        value: function shoot() {
            if (_controls.SHOOT && _controls.FACERIGHT) {
                this.activity = 'shoot';
            } else if (_controls.SHOOT && _controls.FACELEFT) {
                this.activity = 'shoot-left';
            } else if (_controls.SHOOT && _controls.RIGHT) {
                this.activity = 'run-shoot';
            } else if (_controls.SHOOT && _controls.LEFT) {
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

    }, {
        key: 'update',
        value: function update() {
            // debugger
            this.grav();
            this.moveUp();
            this.moveRight();
            this.moveLeft();
            this.shoot();
            // this.standingMega();
        }
    }, {
        key: 'traverse',
        value: function traverse() {
            var t = new Date().getTime();
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


    }, {
        key: 'traverseRun',
        value: function traverseRun() {
            var r = new Date().getTime();
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
    }, {
        key: 'traverseJump',
        value: function traverseJump() {
            var j = new Date().getTime();
            if (j > this.renderJumpTime) {
                this.jumpStep++;
                this.renderJumpTime = j + 150;
            }
            if (this.jumpStep >= 6 || this.grounded) {
                this.jumpStep = 0;
            }
        }
    }, {
        key: 'drawPlayer',
        value: function drawPlayer() {
            // let step = 35;
            // step += 35;
            // if (step === 105) {
            //     step = 35;
            // }
            // debugger
            if (this.activity === 'stand' && this.grounded) {
                // debugger
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
                this.ctx.drawImage(this.leftSprites, MEGA_LEFT_RUN_FRAMES[this.runStep], 67, 35, 35, this.xPos, this.yPos, this.xSize * 2, this.ySize * 2);
            }

            if (this.activity === 'shoot' && this.grounded) {
                this.ctx.drawImage(this.rightSprites, 361, this.sy, this.srcSprite.x, this.srcSprite.y, this.xPos, this.yPos, this.xSize * 2, this.ySize * 2);
            }

            if (this.activity === 'shoot-left') {
                this.ctx.drawImage(this.leftSprites, 1020, this.sy, this.srcSprite.x, this.srcSprite.y, this.xPos, this.yPos, this.xSize * 2, this.ySize * 2);
            }

            if (this.activity === 'run-shoot') {
                this.ctx.drawImage(this.rightSprites, MEGA_RUN_SHOOT_FRAMES[this.runShootStep], 106, this.srcSprite.x, this.srcSprite.y, this.xPos, this.yPos, this.xSize * 2, this.ySize * 2);
            }

            if (this.activity === 'run-shoot-left') {
                this.ctx.drawImage(this.leftSprites, MEGA_LEFT_RUN_SHOOT_FRAMES[this.runShootStep], 106, this.srcSprite.x, this.srcSprite.y, this.xPos, this.yPos, this.xSize * 2, this.ySize * 2);
            }

            if (!this.grounded && _controls.FACERIGHT) {
                this.ctx.drawImage(this.rightSprites, MEGA_JUMP_FRAMES[this.jumpStep], 148, this.srcSprite.x - 8, this.srcSprite.y + 8, this.xPos, this.yPos, 27 * 2, 43 * 2);
            }

            if (!this.grounded && _controls.FACELEFT) {
                this.ctx.drawImage(this.leftSprites, MEGA_JUMP_LEFT_FRAMES[this.jumpStep], 148, this.srcSprite.x - 8, this.srcSprite.y + 8, this.xPos, this.yPos, 27 * 2, 43 * 2);
            }

            if (this.activity === 'run' && !this.grounded) {
                this.ctx.drawImage(this.rightSprites, MEGA_JUMP_FRAMES[this.jumpStep], 148, this.srcSprite.x - 8, this.srcSprite.y + 8, this.xPos, this.yPos, 27 * 2, 43 * 2);
            }

            if (this.activity === 'run-left' && !this.grounded) {
                this.ctx.drawImage(this.leftSprites, MEGA_JUMP_LEFT_FRAMES[this.jumpStep], 148, this.srcSprite.x - 8, this.srcSprite.y + 8, this.xPos, this.yPos, 27 * 2, 43 * 2);
            }
        }

        // left = [1347, 1310, 1270, 1224, 1182, 1142, 1102, 1059, 1014, 972]
        // run shoot frames = [36, 75, 115, 162, 204, 243, 283, 326, 371, 413 ]
        // jump r = [3, 29, 53, 78, 108, 138, 170]
        // left jump = [1385, 1363, 1340, 1315, 1285, 1255, 1223]

    }, {
        key: 'animate',
        value: function animate() {
            this.update();
            this.traverseJump();
            this.traverseRun();
            this.traverse();
            this.drawPlayer();
        }
    }]);

    return Player;
}();

exports.default = Player;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1bGxldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9wbGF5ZXIuanMiXSwibmFtZXMiOlsiQmFja2dyb3VuZCIsImN0eCIsInNldEJnIiwiQmciLCJJbWFnZSIsInNyYyIsIm9ubG9hZCIsImRyYXdCZyIsImJpbmQiLCJza3kiLCJkcmF3SW1hZ2UiLCJCdWxsZXQiLCJ4UG9zIiwieVBvcyIsImR4IiwiZHkiLCJ4U2l6ZSIsInlTaXplIiwiYnVzdGVyU2hvdCIsIktFWUNPREVfWCIsIktFWUNPREVfTEVGVCIsIktFWUNPREVfUklHSFQiLCJLRVlDT0RFX1oiLCJKVU1QIiwiTEVGVCIsIlJJR0hUIiwiU0hPT1QiLCJGQUNFUklHSFQiLCJGQUNFTEVGVCIsIkNvbnRyb2xzIiwicGxheWVyIiwiaGFuZGxlS2V5UHJlc3MiLCJoYW5kbGVLZXlVcCIsImRvY3VtZW50Iiwib25rZXlkb3duIiwib25rZXl1cCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImtleUNvZGUiLCJHYW1lIiwiY2FudmFzIiwiYmFja2dyb3VuZCIsIlBsYXllciIsImNvbnRyb2xzIiwicGxheSIsImNsZWFyQ2FudmFzIiwiY2xlYXJSZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyZW5kZXIiLCJhbmltYXRlIiwiVyIsIkgiLCJhZGRFdmVudExpc3RlbmVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwiZ2FtZSIsIk1FR0FfUklHSFQiLCJNRUdBX0xFRlQiLCJNRUdBX1JVTl9GUkFNRVMiLCJNRUdBX0xFRlRfUlVOX0ZSQU1FUyIsIk1FR0FfUlVOX1NIT09UX0ZSQU1FUyIsIk1FR0FfTEVGVF9SVU5fU0hPT1RfRlJBTUVTIiwiTUVHQV9KVU1QX0ZSQU1FUyIsIk1FR0FfSlVNUF9MRUZUX0ZSQU1FUyIsIkdSQVZJVFkiLCJzeCIsInN5Iiwic3JjU3ByaXRlIiwieCIsInkiLCJzcHJpdGVTaXplIiwiZFgiLCJkWSIsImp1bXBTdHIiLCJ5VmVsIiwic3RlcCIsInJ1blN0ZXAiLCJydW5TaG9vdFN0ZXAiLCJqdW1wU3RlcCIsInRyYXZlcnNlIiwidHJhdmVyc2VSdW4iLCJncm91bmRlZCIsImFjdGl2aXR5IiwiaW5pdEFuaW0iLCJncmF2IiwicmVuZGVyU3RhbmRUaW1lIiwiRGF0ZSIsImdldFRpbWUiLCJyZW5kZXJSdW5UaW1lIiwicmVuZGVySnVtcFRpbWUiLCJyaWdodFNwcml0ZXMiLCJkcmF3UGxheWVyIiwibGVmdFNwcml0ZXMiLCJtb3ZlVXAiLCJtb3ZlUmlnaHQiLCJtb3ZlTGVmdCIsInNob290IiwidCIsInIiLCJqIiwidXBkYXRlIiwidHJhdmVyc2VKdW1wIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7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QixLQUFLZSxRQUEzQixDQUFyQyxFQUEyRSxHQUEzRSxFQUFnRixLQUFLWCxTQUFMLENBQWVDLENBQWYsR0FBbUIsQ0FBbkcsRUFBc0csS0FBS0QsU0FBTCxDQUFlRSxDQUFmLEdBQW1CLENBQXpILEVBQTRILEtBQUszRCxJQUFqSSxFQUF1SSxLQUFLQyxJQUE1SSxFQUFrSixLQUFLLENBQXZKLEVBQTBKLEtBQUssQ0FBL0o7QUFDSDtBQUNKOztBQUVEO0FBQ0E7QUFDQTtBQUNBOzs7O2tDQUVVO0FBQ04saUJBQUt5RixNQUFMO0FBQ0EsaUJBQUtDLFlBQUw7QUFDQSxpQkFBS3JCLFdBQUw7QUFDQSxpQkFBS0QsUUFBTDtBQUNBLGlCQUFLWSxVQUFMO0FBQ0g7Ozs7OztrQkE3UGdCbkQsTSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYWNrZ3JvdW5kIHtcbiAgICBjb25zdHJ1Y3RvcihjdHgpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuc2V0QmcoKTtcbiAgICB9XG5cbiAgICBzZXRCZyAoKSB7XG4gICAgICAgIHRoaXMuQmcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5CZy5zcmMgPSAnaHR0cHM6Ly9zYW11ZWxjaHU5MS5naXRodWIuaW8vTWVnYW1hbl9YL2Fzc2V0cy9pbWFnZXMvc3RhZ2Uvc3RhZ2UucG5nJztcbiAgICAgICAgdGhpcy5CZy5vbmxvYWQgPSB0aGlzLmRyYXdCZy5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuc2t5ID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuc2t5LnNyYyA9ICcuLi9hc3NldHMvaW1hZ2VzL3N0YWdlL3N0YWdlX2JhY2tncm91bmQucG5nJztcbiAgICAgICAgdGhpcy5za3kub25sb2FkID0gdGhpcy5kcmF3QmcuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBkcmF3QmcoKSB7XG4gICAgICAgIGRlYnVnZ2VyXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnNreSwgMCwgMCwgMzUyMCwgNDQwKTtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuQmcsIDQwMCwgMCwgNzY4NiwgMjIwLCAwLCAwLCA3Njg2ICogMiwgMjIwICogMik7XG4gICAgfVxufVxuXG4vLyBjbGVhciBib3ggY29sbGlzaW9ucyBpbiB0aWxlZFxuLy8gbWF5YmUgZHJhdyBpbiBtYXAgKGRlcGVuZHMgb24gc3ByaXRlc2hlZXQpXG4vLyBnZW5lcmF0ZSBtb25zdGVycyBiYXNlZCBvbiBjb2xsaXNpb25zKiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1bGxldCB7XG4gICAgY29uc3RydWN0b3IoY3R4LCB4UG9zLCB5UG9zLCBkeCwgZHksIHhTaXplLCB5U2l6ZSkge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcblxuICAgICAgICB0aGlzLmJ1c3RlclNob3QgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5idXN0ZXJTaG90LnNyYyA9ICcuLi9hc3NldHMvaW1hZ2VzL3BsYXllci9idWxsZXQucG5nJztcblxuICAgICAgICB0aGlzLnhQb3MgPSB4UG9zO1xuICAgICAgICB0aGlzLnlQb3MgPSB5UG9zO1xuICAgICAgICB0aGlzLmR4ID0gZHg7XG4gICAgICAgIHRoaXMuZHkgPSBkeTtcblxuICAgICAgICB0aGlzLnhTaXplID0geFNpemU7XG4gICAgICAgIHRoaXMueVNpemUgPSB5U2l6ZTtcblxuICAgIH1cblxuICAgIGRyYXdCdWxsZXQoKSB7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmJ1c3RlclNob3QsIHRoaXMueFBvcywgdGhpcy55UG9zLCB0aGlzLnhTaXplLCB0aGlzLnlTaXplKTtcbiAgICB9XG5cbiAgICBcblxufSIsImNvbnN0IEtFWUNPREVfWCA9IDg4LFxuICAgIEtFWUNPREVfTEVGVCA9IDM3LFxuICAgIEtFWUNPREVfUklHSFQgPSAzOSxcbiAgICBLRVlDT0RFX1ogPSA5MDtcblxuZXhwb3J0IGxldCBKVU1QID0gZmFsc2U7XG5leHBvcnQgbGV0IExFRlQgPSBmYWxzZTtcbmV4cG9ydCBsZXQgUklHSFQgPSBmYWxzZTtcbmV4cG9ydCBsZXQgU0hPT1QgPSBmYWxzZTtcbi8vIG1ha2UgbW9yZSB2YXJpYWJsZXMgdG8gYWNjb3VudCBmb3JcbmV4cG9ydCBsZXQgRkFDRVJJR0hUID0gZmFsc2U7XG5leHBvcnQgbGV0IEZBQ0VMRUZUID0gZmFsc2U7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRyb2xzIHtcbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXIpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XG5cbiAgICAgICAgdGhpcy5oYW5kbGVLZXlQcmVzcyA9IHRoaXMuaGFuZGxlS2V5UHJlc3MuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVLZXlVcCA9IHRoaXMuaGFuZGxlS2V5VXAuYmluZCh0aGlzKTtcblxuICAgICAgICBkb2N1bWVudC5vbmtleWRvd24gPSB0aGlzLmhhbmRsZUtleVByZXNzO1xuICAgICAgICBkb2N1bWVudC5vbmtleXVwID0gdGhpcy5oYW5kbGVLZXlVcDtcblxuICAgICAgICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmhhbmRsZUtleVByZXNzKTtcbiAgICAgICAgLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMuaGFuZGxlS2V5VXApO1xuICAgIH1cblxuICAgIGhhbmRsZUtleVByZXNzKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAgICAgY2FzZSBLRVlDT0RFX1g6XG4gICAgICAgICAgICAgICAgSlVNUCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEtFWUNPREVfTEVGVDpcbiAgICAgICAgICAgICAgICBMRUZUID0gdHJ1ZTsgICAgXG4gICAgICAgICAgICAgICAgRkFDRUxFRlQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBGQUNFUklHSFQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBSSUdIVCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBLRVlDT0RFX1JJR0hUOlxuICAgICAgICAgICAgICAgIFJJR0hUID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBGQUNFTEVGVCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIEZBQ0VSSUdIVCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIExFRlQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgS0VZQ09ERV9aOlxuICAgICAgICAgICAgICAgIFNIT09UID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUtleVVwKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAgICAgY2FzZSBLRVlDT0RFX1g6XG4gICAgICAgICAgICAgICAgSlVNUCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBLRVlDT0RFX0xFRlQ6XG4gICAgICAgICAgICAgICAgTEVGVCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIEZBQ0VMRUZUID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgS0VZQ09ERV9SSUdIVDpcbiAgICAgICAgICAgICAgICBSSUdIVCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIEZBQ0VSSUdIVCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEtFWUNPREVfWjpcbiAgICAgICAgICAgICAgICBTSE9PVCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgQmFja2dyb3VuZCBmcm9tIFwiLi9iYWNrZ3JvdW5kXCI7XG5pbXBvcnQgQ29udHJvbHMgZnJvbSBcIi4vY29udHJvbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoY3R4LCBjYW52YXMpIHtcbiAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICB0aGlzLmJhY2tncm91bmQgPSBuZXcgQmFja2dyb3VuZChjdHgpO1xuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoY3R4KTtcbiAgICAgICAgdGhpcy5jb250cm9scyA9IG5ldyBDb250cm9scyh0aGlzLnBsYXllcik7XG5cbiAgICAgICAgdGhpcy5wbGF5ID0gdGhpcy5wbGF5LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY2xlYXJDYW52YXMgPSAgdGhpcy5jbGVhckNhbnZhcy5iaW5kKHRoaXMpO1xuICAgICAgICAvLyB0aGlzLnNwZWVkID0gc3BlZWQ7XG4gICAgICAgIC8vIHRoaXMucmVuZGVyVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIH1cblxuXG5cbiAgICBjbGVhckNhbnZhcygpIHtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgIC8vIGN0eC5jbGVhclJlY3QocGxheWVyX3Bvc2l0aW9uX3ggLSAoY2FtZXJhX3dpZHRoLzIpLCBwbGF5ZXJfcG9zaXRpb25feSAtIChjYW1lcmFfaGVpZ2h0LzIpLCBjYW1lcmFfd2lkdGgsIGNhbWVyYV9oZWlnaHQpXG5cbiAgICB9XG5cbi8vICAgICAgICAgICBsZXQgdCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuLy8gaWYgKHQgPiB0aGlzLmFuaW1lVGltZSkge1xuLy8gICAgIHRoaXMuZnJhbWUrKztcbi8vICAgICB0aGlzLmFuaW1lVGltZSA9IHQgKyAxMDAwIC8gdGhpcy5zcGVlZDtcbi8vIH1cblxuICAgIHBsYXkoKSB7XG4gICAgICAgIC8vIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5wbGF5KTtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJDYW52YXMoKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIC8vIH0sIDEwMDApXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICAvLyB0aGlzLmJhY2tncm91bmQuZHJhd0JnKCk7XG4gICAgICAgIHRoaXMucGxheWVyLmFuaW1hdGUoKTtcbiAgICB9XG59IiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcblxuY29uc3QgVyA9IDcwMDtcbmNvbnN0IEggPSA0NDA7XG5cbmV4cG9ydCB7IFcsIEggfTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICBjYW52YXMud2lkdGggPSBXO1xuICAgIGNhbnZhcy5oZWlnaHQgPSBIO1xuXG4gICAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGN0eCwgY2FudmFzKTtcbiAgICBnYW1lLnBsYXkoKTtcbiAgICBnYW1lLnJlbmRlcigpO1xufSk7IiwiaW1wb3J0IENvbnRyb2xzLCB7IFJJR0hULCBMRUZULCBKVU1QLCBTSE9PVCwgRkFDRUxFRlQsIEZBQ0VSSUdIVCB9IGZyb20gJy4vY29udHJvbHMnO1xuaW1wb3J0IEJ1bGxldCBmcm9tICcuL2J1bGxldCc7XG5cbi8vIG1ha2UgbWFwIGNsYXNzXG4vLyB0YWtlIGluIGpzb24gYXJyYXlcblxuY29uc3QgTUVHQV9SSUdIVCA9IHtcbiAgICBzcmM6ICcuLi9hc3NldHMvaW1hZ2VzL3BsYXllci9tZWdhX21hbi5wbmcnLFxufTtcblxuY29uc3QgTUVHQV9MRUZUID0ge1xuICAgIHNyYzogJy4uL2Fzc2V0cy9pbWFnZXMvcGxheWVyL21lZ2FfbWFuMi5wbmcnLFxufTtcblxuY29uc3QgTUVHQV9SVU5fRlJBTUVTID0gWzEsIDM1LCA2OSwgMTAwLCAxNDIsIDE4MCwgMjEzLCAyNDQsIDI3NSwgMzEyLCAzNTMsIDM5MF07XG4vLyBzbyBJIHNob3VsZCBtYWtlIHJlbmRlciBjbGFzcyxvYmplY3RzIFxuLy8geW91dHViZSBzaWRlIHNjcm9sbGluZyB0dXRvcmlhbHNcbi8vIHRpbGVkIHR1dG9yaWFsLCB0YWtlIGNhcmUgb2YgbWFwL3BsYXRmb3Jtc1xuY29uc3QgTUVHQV9MRUZUX1JVTl9GUkFNRVMgPSBbMTM4MCwgMTM0NSwgMTMxNSwgMTI4MiwgMTI0MCwgMTIwMiwgMTE3MCwgMTE0MSwgMTEwNywgMTA2NywgMTAyOF07XG5cbmNvbnN0IE1FR0FfUlVOX1NIT09UX0ZSQU1FUyA9IFszNiwgNzUsIDExNSwgMTYyLCAyMDQsIDI0MywgMjgzLCAzMjYsIDM3MSwgNDEzXTtcbmNvbnN0IE1FR0FfTEVGVF9SVU5fU0hPT1RfRlJBTUVTID0gWzEzNDcsIDEzMTAsIDEyNzAsIDEyMjQsIDExODIsIDExNDIsIDExMDIsIDEwNTksIDEwMTQsIDk3Ml07XG5cbmNvbnN0IE1FR0FfSlVNUF9GUkFNRVMgPSBbMywgMjksIDUzLCA3OCwgMTA4LCAxMzgsIDE3MF07XG5jb25zdCBNRUdBX0pVTVBfTEVGVF9GUkFNRVMgPSBbMTM4NSwgMTM2MywgMTM0MCwgMTMxNSwgMTI4NSwgMTI1NSwgMTIyM107XG5jb25zdCBHUkFWSVRZID0gNjtcblxuXG4vLyAyMjUsIGdyb3VuZCBsZXZlbFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKGN0eCkge1xuICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy54UG9zID0gMTIwO1xuICAgICAgICB0aGlzLnlQb3MgPSAxOTA7XG4gICAgICAgIHRoaXMueFNpemUgPSAzNTtcbiAgICAgICAgdGhpcy55U2l6ZSA9IDM1O1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zeCA9IDIyNTtcbiAgICAgICAgdGhpcy5zeSA9IDI5O1xuICAgICAgICB0aGlzLnNyY1Nwcml0ZSA9IHsgeDozNSwgeTozNSB9XG5cbiAgICAgICAgdGhpcy5zcHJpdGVTaXplID0gMzU7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmRYID0gNDtcbiAgICAgICAgdGhpcy5kWSA9IDE2Ljg7XG4gICAgICAgIHRoaXMuanVtcFN0ciA9IDA7XG4gICAgICAgIHRoaXMueVZlbCA9IDA7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnN0ZXAgPSAzNTtcbiAgICAgICAgdGhpcy5ydW5TdGVwID0gMDtcbiAgICAgICAgdGhpcy5ydW5TaG9vdFN0ZXAgPSAwO1xuICAgICAgICB0aGlzLmp1bXBTdGVwID0gMDtcblxuICAgICAgICB0aGlzLnRyYXZlcnNlID0gdGhpcy50cmF2ZXJzZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnRyYXZlcnNlUnVuID0gdGhpcy50cmF2ZXJzZVJ1bi5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuZ3JvdW5kZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmFjdGl2aXR5ID0gJ3N0YW5kJztcbiAgICAgICAgdGhpcy5pbml0QW5pbSgpO1xuICAgICAgICB0aGlzLmdyYXYoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJTdGFuZFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJSdW5UaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHRoaXMucmVuZGVySnVtcFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICB9XG5cbiAgICBpbml0QW5pbSgpIHtcbiAgICAgICAgdGhpcy5yaWdodFNwcml0ZXMgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5yaWdodFNwcml0ZXMuc3JjID0gTUVHQV9SSUdIVC5zcmM7XG4gICAgICAgIHRoaXMucmlnaHRTcHJpdGVzLm9ubG9hZCA9IHRoaXMuZHJhd1BsYXllci5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMubGVmdFNwcml0ZXMgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5sZWZ0U3ByaXRlcy5zcmMgPSBNRUdBX0xFRlQuc3JjO1xuICAgICAgICB0aGlzLmxlZnRTcHJpdGVzLm9ubG9hZCA9IHRoaXMuZHJhd1BsYXllci5iaW5kKHRoaXMpO1xuXG5cbiAgICAgICAgLy8gY29uc3Qgc3RhbmRpbmdGcmFtZXMgPSBbXG4gICAgICAgIC8vICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5yaWdodFNwcml0ZXMsIHRoaXMuc3gsIHRoaXMuc3ksIHRoaXMuc3JjU3ByaXRlLngsIHRoaXMuc3JjU3ByaXRlLnksIHRoaXMueFBvcywgdGhpcy55UG9zLCB0aGlzLnhTaXplICogMiwgdGhpcy55U2l6ZSAqIDIpLFxuICAgICAgICAvLyAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMucmlnaHRTcHJpdGVzLCB0aGlzLnN4ICsgMzUsIHRoaXMuc3ksIHRoaXMuc3JjU3ByaXRlLngsIHRoaXMuc3JjU3ByaXRlLnksIHRoaXMueFBvcyArIDEwMCwgdGhpcy55UG9zLCB0aGlzLnhTaXplICogMiwgdGhpcy55U2l6ZSAqIDIpLFxuICAgICAgICAvLyAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMucmlnaHRTcHJpdGVzLCB0aGlzLnN4ICsgNzAsIHRoaXMuc3ksIHRoaXMuc3JjU3ByaXRlLngsIHRoaXMuc3JjU3ByaXRlLnksIHRoaXMueFBvcyArIDIwMCwgdGhpcy55UG9zLCB0aGlzLnhTaXplICogMiwgdGhpcy55U2l6ZSAqIDIpLFxuICAgICAgICAvLyBdXG4gICAgfVxuICAgIFxuICAgIG1vdmVMZWZ0KCkge1xuICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICBpZiAoTEVGVCkge1xuICAgICAgICAgICAgdGhpcy54UG9zIC09IHRoaXMuZFg7XG4gICAgICAgICAgICB0aGlzLmFjdGl2aXR5ID0gXCJydW4tbGVmdFwiO1xuICAgICAgICB9IFxuICAgICAgICBlbHNlIGlmIChGQUNFTEVGVCl7XG4gICAgICAgICAgICB0aGlzLmFjdGl2aXR5ID0gJ3N0YW5kLWxlZnQnO1xuICAgICAgICAgICAgLy8gRkFDRUxFRlQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vdmVSaWdodCgpIHtcbiAgICAgICAgaWYgKFJJR0hUKSB7XG4gICAgICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICAgICAgdGhpcy54UG9zICs9IHRoaXMuZFg7XG4gICAgICAgICAgICB0aGlzLmFjdGl2aXR5ID0gXCJydW5cIjtcbiAgICAgICAgfSBcbiAgICAgICAgZWxzZSBpZiAoRkFDRVJJR0hUKXtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZpdHkgPSAnc3RhbmQnO1xuICAgICAgICAgICAgLy8gRkFDRVJJR0hUID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgbW92ZVVwKCkge1xuICAgICAgICBpZiAoSlVNUCAmJiB0aGlzLmdyb3VuZGVkKSB7XG4gICAgICAgICAgICB0aGlzLnlQb3MgLT0gdGhpcy5kWTtcbiAgICAgICAgICAgIHRoaXMueVZlbCA9IHRoaXMuZFk7XG4gICAgICAgIH0gZWxzZSBpZiAoSlVNUCAmJiAhdGhpcy5ncm91bmRlZCkge1xuICAgICAgICAgICAgdGhpcy55UG9zIC09IHRoaXMueVZlbDtcbiAgICAgICAgICAgIHRoaXMueVZlbCAvPSAxLjA1MztcbiAgICAgICAgfSBlbHNlIGlmICghSlVNUCAmJiAhdGhpcy5ncm91bmRlZCkge1xuICAgICAgICAgICAgdGhpcy55VmVsID0gMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdyYXYoKSB7XG4gICAgICAgIGlmICh0aGlzLnlQb3MgKyAzNSA+PSAyMjApIHtcbiAgICAgICAgICAgIHRoaXMuZ3JvdW5kZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ncm91bmRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy55UG9zICs9IEdSQVZJVFk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG9vdCgpIHtcbiAgICAgICAgaWYgKFNIT09UICYmIEZBQ0VSSUdIVCkge1xuICAgICAgICAgICAgdGhpcy5hY3Rpdml0eSA9ICdzaG9vdCc7XG4gICAgICAgIH0gZWxzZSBpZiAoU0hPT1QgJiYgRkFDRUxFRlQpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZpdHkgPSAnc2hvb3QtbGVmdCc7XG4gICAgICAgIH0gZWxzZSBpZiAoU0hPT1QgJiYgUklHSFQpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZpdHkgPSAncnVuLXNob290JztcbiAgICAgICAgfSBlbHNlIGlmIChTSE9PVCAmJiBMRUZUKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2aXR5ID0gJ3J1bi1zaG9vdC1sZWZ0JztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHN0YW5kaW5nTWVnYSgpIHtcbiAgICAvLyAgICAgaWYgKHRoaXMuYWN0aXZpdHkgPSBcInJ1bi1sZWZ0XCIpIHtcbiAgICAvLyAgICAgICAgIHRoaXMuYWN0aXZpdHkgPSAnc3RhbmQtbGVmdCc7XG4gICAgLy8gICAgIH0gZWxzZSBpZiAodGhpcy5hY3Rpdml0eSA9ICdydW4nKSB7XG4gICAgLy8gICAgICAgICB0aGlzLmFjdGl2aXR5ID0gJ3N0YW5kJztcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgdGhpcy5ncmF2KCk7XG4gICAgICAgIHRoaXMubW92ZVVwKCk7XG4gICAgICAgIHRoaXMubW92ZVJpZ2h0KCk7XG4gICAgICAgIHRoaXMubW92ZUxlZnQoKTtcbiAgICAgICAgdGhpcy5zaG9vdCgpO1xuICAgICAgICAvLyB0aGlzLnN0YW5kaW5nTWVnYSgpO1xuICAgIH1cblxuICAgIHRyYXZlcnNlKCkge1xuICAgICAgICBsZXQgdCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICBpZiAodCA+IHRoaXMucmVuZGVyU3RhbmRUaW1lKSB7XG4gICAgICAgICAgICB0aGlzLnN0ZXAgKz0gMzVcbiAgICAgICAgICAgIHRoaXMucmVuZGVyU3RhbmRUaW1lID0gdCArIDcwMDtcbiAgICAgICAgfVxuICAgICAgICAvLyB0aGlzLnN0ZXAgKz0gMzU7XG4gICAgICAgIGlmICh0aGlzLnN0ZXAgPj0gMTA1KSB7XG4gICAgICAgICAgICB0aGlzLnN0ZXAgPSAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gcmlnaHQgcnVuIGZyYW1lc1xuICAgIC8vIDM1LCAzNSwgMzAsIDQwLCA0MCwgMzcsIDI3LCAzMSwgMzcsIDQxLCAzN1xuICAgIC8vIDM1LCA3MCwgMTAwLCAxNDAsIDE4MCwgMjE3LCAyNDQsIDI3NSwgMzEyLCAzNTMsIDM5MFxuXG4gICAgLy8gbGVmdCBydW4gZnJhbWVzIChzdGFydCAxMzgwKVxuICAgIC8vIDM1XG5cbiAgICBcbiAgICB0cmF2ZXJzZVJ1bigpIHtcbiAgICAgICAgbGV0IHIgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgaWYgKHIgPiB0aGlzLnJlbmRlclJ1blRpbWUpIHtcbiAgICAgICAgICAgIHRoaXMucnVuU3RlcCsrO1xuICAgICAgICAgICAgdGhpcy5ydW5TaG9vdFN0ZXArKztcbiAgICAgICAgICAgIHRoaXMucmVuZGVyUnVuVGltZSA9IHIgKyAxMDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucnVuU3RlcCA+PSAxMSkge1xuICAgICAgICAgICAgdGhpcy5ydW5TdGVwID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5ydW5TaG9vdFN0ZXAgPj0gOSkge1xuICAgICAgICAgICAgdGhpcy5ydW5TaG9vdFN0ZXAgPSAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdHJhdmVyc2VKdW1wKCkge1xuICAgICAgICBsZXQgaiA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICBpZiAoaiA+IHRoaXMucmVuZGVySnVtcFRpbWUpIHtcbiAgICAgICAgICAgIHRoaXMuanVtcFN0ZXArKztcbiAgICAgICAgICAgIHRoaXMucmVuZGVySnVtcFRpbWUgPSBqICsgMTUwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmp1bXBTdGVwID49IDYgfHwgdGhpcy5ncm91bmRlZCkge1xuICAgICAgICAgICAgdGhpcy5qdW1wU3RlcCA9IDA7XG4gICAgICAgIH0gXG4gICAgfVxuICAgIFxuICAgIFxuICAgIGRyYXdQbGF5ZXIoKSB7XG4gICAgICAgIC8vIGxldCBzdGVwID0gMzU7XG4gICAgICAgIC8vIHN0ZXAgKz0gMzU7XG4gICAgICAgIC8vIGlmIChzdGVwID09PSAxMDUpIHtcbiAgICAgICAgLy8gICAgIHN0ZXAgPSAzNTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICBpZiAodGhpcy5hY3Rpdml0eSA9PT0gJ3N0YW5kJyAmJiB0aGlzLmdyb3VuZGVkKSB7XG4gICAgICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICAgICAgLy8gbGV0IGZyYW1lQ291bnQgPSAwO1xuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMucmlnaHRTcHJpdGVzLCB0aGlzLnN4ICsgdGhpcy5zdGVwLCB0aGlzLnN5LCB0aGlzLnNyY1Nwcml0ZS54LCB0aGlzLnNyY1Nwcml0ZS55LCB0aGlzLnhQb3MsIHRoaXMueVBvcywgdGhpcy54U2l6ZSAqIDIsIHRoaXMueVNpemUgKiAyKTtcblxuICAgICAgICAgICAgLy8gdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMucmlnaHRTcHJpdGVzLCB0aGlzLnN4ICsgNzAsIHRoaXMuc3ksIHRoaXMuc3JjU3ByaXRlLngsIHRoaXMuc3JjU3ByaXRlLnksIHRoaXMueFBvcyArIDEwMCwgdGhpcy55UG9zLCB0aGlzLnhTaXplICogMiwgdGhpcy55U2l6ZSAqIDIpO1xuICAgICAgICAgICAgLy8gdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMucmlnaHRTcHJpdGVzLCB0aGlzLnN4ICsgMTA1LCB0aGlzLnN5LCB0aGlzLnNyY1Nwcml0ZS54LCB0aGlzLnNyY1Nwcml0ZS55LCB0aGlzLnhQb3MgKyAyMDAsIHRoaXMueVBvcywgdGhpcy54U2l6ZSAqIDIsIHRoaXMueVNpemUgKiAyKTtcbiAgICAgICAgICAgIC8vIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnJpZ2h0U3ByaXRlcywgMzE1LCAxNSwgdGhpcy5zcmNTcHJpdGUueCwgdGhpcy5zcmNTcHJpdGUueSwgdGhpcy54UG9zICsgMTAwLCB0aGlzLnlQb3MsIHRoaXMueFNpemUgKiAyLCB0aGlzLnlTaXplICogMik7XG4gICAgICAgIH0gXG5cbiAgICAgICAgaWYgKHRoaXMuYWN0aXZpdHkgPT09ICdydW4nICYmIHRoaXMuZ3JvdW5kZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnJpZ2h0U3ByaXRlcywgMSArIE1FR0FfUlVOX0ZSQU1FU1t0aGlzLnJ1blN0ZXBdLCA2NywgdGhpcy5zcmNTcHJpdGUueCwgdGhpcy5zcmNTcHJpdGUueSwgdGhpcy54UG9zLCB0aGlzLnlQb3MsIHRoaXMueFNpemUgKiAyLCB0aGlzLnlTaXplICogMik7XG4gICAgICAgICAgICAvLyB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5yaWdodFNwcml0ZXMsIDMxNSArIHRoaXMuc3RlcCwgMTUsIHRoaXMuc3JjU3ByaXRlLngsIHRoaXMuc3JjU3ByaXRlLnksIHRoaXMueFBvcyArIDEwMCwgdGhpcy55UG9zLCB0aGlzLnhTaXplICogMiwgdGhpcy55U2l6ZSAqIDIpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5hY3Rpdml0eSA9PT0gJ3N0YW5kLWxlZnQnICYmIHRoaXMuZ3JvdW5kZWQpIHtcbiAgICAgICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5sZWZ0U3ByaXRlcywgMTA1NSArIHRoaXMuc3RlcCwgdGhpcy5zeSwgMzUsIDM1LCB0aGlzLnhQb3MsIHRoaXMueVBvcywgdGhpcy54U2l6ZSAqIDIsIHRoaXMueVNpemUgKiAyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmFjdGl2aXR5ID09PSAncnVuLWxlZnQnICYmIHRoaXMuZ3JvdW5kZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmxlZnRTcHJpdGVzLCBNRUdBX0xFRlRfUlVOX0ZSQU1FU1t0aGlzLnJ1blN0ZXBdLCA2NywgMzUsIDM1LCB0aGlzLnhQb3MsIHRoaXMueVBvcywgdGhpcy54U2l6ZSAqIDIsIHRoaXMueVNpemUgKiAyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmFjdGl2aXR5ID09PSAnc2hvb3QnICYmIHRoaXMuZ3JvdW5kZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnJpZ2h0U3ByaXRlcywgMzYxLCB0aGlzLnN5LCB0aGlzLnNyY1Nwcml0ZS54LCB0aGlzLnNyY1Nwcml0ZS55LCB0aGlzLnhQb3MsIHRoaXMueVBvcywgdGhpcy54U2l6ZSAqIDIsIHRoaXMueVNpemUgKiAyKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuYWN0aXZpdHkgPT09ICdzaG9vdC1sZWZ0Jykge1xuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMubGVmdFNwcml0ZXMsIDEwMjAsIHRoaXMuc3ksIHRoaXMuc3JjU3ByaXRlLngsIHRoaXMuc3JjU3ByaXRlLnksIHRoaXMueFBvcywgdGhpcy55UG9zLCB0aGlzLnhTaXplICogMiwgdGhpcy55U2l6ZSAqIDIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuYWN0aXZpdHkgPT09ICdydW4tc2hvb3QnKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5yaWdodFNwcml0ZXMsIE1FR0FfUlVOX1NIT09UX0ZSQU1FU1t0aGlzLnJ1blNob290U3RlcF0sIDEwNiwgdGhpcy5zcmNTcHJpdGUueCwgdGhpcy5zcmNTcHJpdGUueSwgdGhpcy54UG9zLCB0aGlzLnlQb3MsIHRoaXMueFNpemUgKiAyLCB0aGlzLnlTaXplICogMik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5hY3Rpdml0eSA9PT0gJ3J1bi1zaG9vdC1sZWZ0Jykge1xuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMubGVmdFNwcml0ZXMsIE1FR0FfTEVGVF9SVU5fU0hPT1RfRlJBTUVTW3RoaXMucnVuU2hvb3RTdGVwXSwgMTA2LCB0aGlzLnNyY1Nwcml0ZS54LCB0aGlzLnNyY1Nwcml0ZS55LCB0aGlzLnhQb3MsIHRoaXMueVBvcywgdGhpcy54U2l6ZSAqIDIsIHRoaXMueVNpemUgKiAyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5ncm91bmRlZCAmJiBGQUNFUklHSFQpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnJpZ2h0U3ByaXRlcywgTUVHQV9KVU1QX0ZSQU1FU1t0aGlzLmp1bXBTdGVwXSwgMTQ4LCB0aGlzLnNyY1Nwcml0ZS54IC0gOCwgdGhpcy5zcmNTcHJpdGUueSArIDgsIHRoaXMueFBvcywgdGhpcy55UG9zLCAyNyAqIDIsIDQzICogMik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuZ3JvdW5kZWQgJiYgRkFDRUxFRlQpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmxlZnRTcHJpdGVzLCBNRUdBX0pVTVBfTEVGVF9GUkFNRVNbdGhpcy5qdW1wU3RlcF0sIDE0OCwgdGhpcy5zcmNTcHJpdGUueCAtIDgsIHRoaXMuc3JjU3ByaXRlLnkgKyA4LCB0aGlzLnhQb3MsIHRoaXMueVBvcywgMjcgKiAyLCA0MyAqIDIpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5hY3Rpdml0eSA9PT0gJ3J1bicgJiYgIXRoaXMuZ3JvdW5kZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnJpZ2h0U3ByaXRlcywgTUVHQV9KVU1QX0ZSQU1FU1t0aGlzLmp1bXBTdGVwXSwgMTQ4LCB0aGlzLnNyY1Nwcml0ZS54IC0gOCwgdGhpcy5zcmNTcHJpdGUueSArIDgsIHRoaXMueFBvcywgdGhpcy55UG9zLCAyNyAqIDIsIDQzICogMik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5hY3Rpdml0eSA9PT0ncnVuLWxlZnQnICYmICF0aGlzLmdyb3VuZGVkKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5sZWZ0U3ByaXRlcywgTUVHQV9KVU1QX0xFRlRfRlJBTUVTW3RoaXMuanVtcFN0ZXBdLCAxNDgsIHRoaXMuc3JjU3ByaXRlLnggLSA4LCB0aGlzLnNyY1Nwcml0ZS55ICsgOCwgdGhpcy54UG9zLCB0aGlzLnlQb3MsIDI3ICogMiwgNDMgKiAyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGxlZnQgPSBbMTM0NywgMTMxMCwgMTI3MCwgMTIyNCwgMTE4MiwgMTE0MiwgMTEwMiwgMTA1OSwgMTAxNCwgOTcyXVxuICAgIC8vIHJ1biBzaG9vdCBmcmFtZXMgPSBbMzYsIDc1LCAxMTUsIDE2MiwgMjA0LCAyNDMsIDI4MywgMzI2LCAzNzEsIDQxMyBdXG4gICAgLy8ganVtcCByID0gWzMsIDI5LCA1MywgNzgsIDEwOCwgMTM4LCAxNzBdXG4gICAgLy8gbGVmdCBqdW1wID0gWzEzODUsIDEzNjMsIDEzNDAsIDEzMTUsIDEyODUsIDEyNTUsIDEyMjNdXG4gICAgXG4gICAgYW5pbWF0ZSgpIHtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgdGhpcy50cmF2ZXJzZUp1bXAoKTtcbiAgICAgICAgdGhpcy50cmF2ZXJzZVJ1bigpO1xuICAgICAgICB0aGlzLnRyYXZlcnNlKCk7XG4gICAgICAgIHRoaXMuZHJhd1BsYXllcigpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9