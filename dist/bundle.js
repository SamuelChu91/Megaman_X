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
            this.background.drawBg();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1bGxldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9wbGF5ZXIuanMiXSwibmFtZXMiOlsiQmFja2dyb3VuZCIsImN0eCIsInNldEJnIiwiQmciLCJJbWFnZSIsInNyYyIsIm9ubG9hZCIsImRyYXdCZyIsImJpbmQiLCJza3kiLCJkcmF3SW1hZ2UiLCJCdWxsZXQiLCJ4UG9zIiwieVBvcyIsImR4IiwiZHkiLCJ4U2l6ZSIsInlTaXplIiwiYnVzdGVyU2hvdCIsIktFWUNPREVfWCIsIktFWUNPREVfTEVGVCIsIktFWUNPREVfUklHSFQiLCJLRVlDT0RFX1oiLCJKVU1QIiwiTEVGVCIsIlJJR0hUIiwiU0hPT1QiLCJGQUNFUklHSFQiLCJGQUNFTEVGVCIsIkNvbnRyb2xzIiwicGxheWVyIiwiaGFuZGxlS2V5UHJlc3MiLCJoYW5kbGVLZXlVcCIsImRvY3VtZW50Iiwib25rZXlkb3duIiwib25rZXl1cCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImtleUNvZGUiLCJHYW1lIiwiY2FudmFzIiwiYmFja2dyb3VuZCIsIlBsYXllciIsImNvbnRyb2xzIiwicGxheSIsImNsZWFyQ2FudmFzIiwiY2xlYXJSZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyZW5kZXIiLCJhbmltYXRlIiwiVyIsIkgiLCJhZGRFdmVudExpc3RlbmVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwiZ2FtZSIsIk1FR0FfUklHSFQiLCJNRUdBX0xFRlQiLCJNRUdBX1JVTl9GUkFNRVMiLCJNRUdBX0xFRlRfUlVOX0ZSQU1FUyIsIk1FR0FfUlVOX1NIT09UX0ZSQU1FUyIsIk1FR0FfTEVGVF9SVU5fU0hPT1RfRlJBTUVTIiwiTUVHQV9KVU1QX0ZSQU1FUyIsIk1FR0FfSlVNUF9MRUZUX0ZSQU1FUyIsIkdSQVZJVFkiLCJzeCIsInN5Iiwic3JjU3ByaXRlIiwieCIsInkiLCJzcHJpdGVTaXplIiwiZFgiLCJkWSIsImp1bXBTdHIiLCJ5VmVsIiwic3RlcCIsInJ1blN0ZXAiLCJydW5TaG9vdFN0ZXAiLCJqdW1wU3RlcCIsInRyYXZlcnNlIiwidHJhdmVyc2VSdW4iLCJncm91bmRlZCIsImFjdGl2aXR5IiwiaW5pdEFuaW0iLCJncmF2IiwicmVuZGVyU3RhbmRUaW1lIiwiRGF0ZSIsImdldFRpbWUiLCJyZW5kZXJSdW5UaW1lIiwicmVuZGVySnVtcFRpbWUiLCJyaWdodFNwcml0ZXMiLCJkcmF3UGxheWVyIiwibGVmdFNwcml0ZXMiLCJtb3ZlVXAiLCJtb3ZlUmlnaHQiLCJtb3ZlTGVmdCIsInNob290IiwidCIsInIiLCJqIiwidXBkYXRlIiwidHJhdmVyc2VKdW1wIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7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S0FBS29GLFdBQXhCLEVBQXFDN0Isc0JBQXNCLEtBQUtlLFFBQTNCLENBQXJDLEVBQTJFLEdBQTNFLEVBQWdGLEtBQUtYLFNBQUwsQ0FBZUMsQ0FBZixHQUFtQixDQUFuRyxFQUFzRyxLQUFLRCxTQUFMLENBQWVFLENBQWYsR0FBbUIsQ0FBekgsRUFBNEgsS0FBSzNELElBQWpJLEVBQXVJLEtBQUtDLElBQTVJLEVBQWtKLEtBQUssQ0FBdkosRUFBMEosS0FBSyxDQUEvSjtBQUNIO0FBQ0o7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7Ozs7a0NBRVU7QUFDTixpQkFBS3lGLE1BQUw7QUFDQSxpQkFBS0MsWUFBTDtBQUNBLGlCQUFLckIsV0FBTDtBQUNBLGlCQUFLRCxRQUFMO0FBQ0EsaUJBQUtZLFVBQUw7QUFDSDs7Ozs7O2tCQTdQZ0JuRCxNIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhY2tncm91bmQge1xuICAgIGNvbnN0cnVjdG9yKGN0eCkge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5zZXRCZygpO1xuICAgIH1cblxuICAgIHNldEJnICgpIHtcbiAgICAgICAgdGhpcy5CZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLkJnLnNyYyA9ICdodHRwczovL3NhbXVlbGNodTkxLmdpdGh1Yi5pby9NZWdhbWFuX1gvYXNzZXRzL2ltYWdlcy9zdGFnZS9zdGFnZS5wbmcnO1xuICAgICAgICB0aGlzLkJnLm9ubG9hZCA9IHRoaXMuZHJhd0JnLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5za3kgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5za3kuc3JjID0gJy4uL2Fzc2V0cy9pbWFnZXMvc3RhZ2Uvc3RhZ2VfYmFja2dyb3VuZC5wbmcnO1xuICAgICAgICB0aGlzLnNreS5vbmxvYWQgPSB0aGlzLmRyYXdCZy5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGRyYXdCZygpIHtcbiAgICAgICAgZGVidWdnZXJcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuc2t5LCAwLCAwLCAzNTIwLCA0NDApO1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5CZywgNDAwLCAwLCA3Njg2LCAyMjAsIDAsIDAsIDc2ODYgKiAyLCAyMjAgKiAyKTtcbiAgICB9XG59XG5cbi8vIGNsZWFyIGJveCBjb2xsaXNpb25zIGluIHRpbGVkXG4vLyBtYXliZSBkcmF3IGluIG1hcCAoZGVwZW5kcyBvbiBzcHJpdGVzaGVldClcbi8vIGdlbmVyYXRlIG1vbnN0ZXJzIGJhc2VkIG9uIGNvbGxpc2lvbnMqIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnVsbGV0IHtcbiAgICBjb25zdHJ1Y3RvcihjdHgsIHhQb3MsIHlQb3MsIGR4LCBkeSwgeFNpemUsIHlTaXplKSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuXG4gICAgICAgIHRoaXMuYnVzdGVyU2hvdCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmJ1c3RlclNob3Quc3JjID0gJy4uL2Fzc2V0cy9pbWFnZXMvcGxheWVyL2J1bGxldC5wbmcnO1xuXG4gICAgICAgIHRoaXMueFBvcyA9IHhQb3M7XG4gICAgICAgIHRoaXMueVBvcyA9IHlQb3M7XG4gICAgICAgIHRoaXMuZHggPSBkeDtcbiAgICAgICAgdGhpcy5keSA9IGR5O1xuXG4gICAgICAgIHRoaXMueFNpemUgPSB4U2l6ZTtcbiAgICAgICAgdGhpcy55U2l6ZSA9IHlTaXplO1xuXG4gICAgfVxuXG4gICAgZHJhd0J1bGxldCgpIHtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuYnVzdGVyU2hvdCwgdGhpcy54UG9zLCB0aGlzLnlQb3MsIHRoaXMueFNpemUsIHRoaXMueVNpemUpO1xuICAgIH1cblxuICAgIFxuXG59IiwiY29uc3QgS0VZQ09ERV9YID0gODgsXG4gICAgS0VZQ09ERV9MRUZUID0gMzcsXG4gICAgS0VZQ09ERV9SSUdIVCA9IDM5LFxuICAgIEtFWUNPREVfWiA9IDkwO1xuXG5leHBvcnQgbGV0IEpVTVAgPSBmYWxzZTtcbmV4cG9ydCBsZXQgTEVGVCA9IGZhbHNlO1xuZXhwb3J0IGxldCBSSUdIVCA9IGZhbHNlO1xuZXhwb3J0IGxldCBTSE9PVCA9IGZhbHNlO1xuLy8gbWFrZSBtb3JlIHZhcmlhYmxlcyB0byBhY2NvdW50IGZvclxuZXhwb3J0IGxldCBGQUNFUklHSFQgPSBmYWxzZTtcbmV4cG9ydCBsZXQgRkFDRUxFRlQgPSBmYWxzZTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udHJvbHMge1xuICAgIGNvbnN0cnVjdG9yKHBsYXllcikge1xuICAgICAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcblxuICAgICAgICB0aGlzLmhhbmRsZUtleVByZXNzID0gdGhpcy5oYW5kbGVLZXlQcmVzcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZUtleVVwID0gdGhpcy5oYW5kbGVLZXlVcC5iaW5kKHRoaXMpO1xuXG4gICAgICAgIGRvY3VtZW50Lm9ua2V5ZG93biA9IHRoaXMuaGFuZGxlS2V5UHJlc3M7XG4gICAgICAgIGRvY3VtZW50Lm9ua2V5dXAgPSB0aGlzLmhhbmRsZUtleVVwO1xuXG4gICAgICAgIC8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuaGFuZGxlS2V5UHJlc3MpO1xuICAgICAgICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5oYW5kbGVLZXlVcCk7XG4gICAgfVxuXG4gICAgaGFuZGxlS2V5UHJlc3MoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIEtFWUNPREVfWDpcbiAgICAgICAgICAgICAgICBKVU1QID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgS0VZQ09ERV9MRUZUOlxuICAgICAgICAgICAgICAgIExFRlQgPSB0cnVlOyAgICBcbiAgICAgICAgICAgICAgICBGQUNFTEVGVCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIEZBQ0VSSUdIVCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIFJJR0hUID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEtFWUNPREVfUklHSFQ6XG4gICAgICAgICAgICAgICAgUklHSFQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIEZBQ0VMRUZUID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgRkFDRVJJR0hUID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgTEVGVCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBLRVlDT0RFX1o6XG4gICAgICAgICAgICAgICAgU0hPT1QgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlS2V5VXAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIEtFWUNPREVfWDpcbiAgICAgICAgICAgICAgICBKVU1QID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEtFWUNPREVfTEVGVDpcbiAgICAgICAgICAgICAgICBMRUZUID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgRkFDRUxFRlQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBLRVlDT0RFX1JJR0hUOlxuICAgICAgICAgICAgICAgIFJJR0hUID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgRkFDRVJJR0hUID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgS0VZQ09ERV9aOlxuICAgICAgICAgICAgICAgIFNIT09UID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCBCYWNrZ3JvdW5kIGZyb20gXCIuL2JhY2tncm91bmRcIjtcbmltcG9ydCBDb250cm9scyBmcm9tIFwiLi9jb250cm9sc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihjdHgsIGNhbnZhcykge1xuICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZCA9IG5ldyBCYWNrZ3JvdW5kKGN0eCk7XG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcihjdHgpO1xuICAgICAgICB0aGlzLmNvbnRyb2xzID0gbmV3IENvbnRyb2xzKHRoaXMucGxheWVyKTtcblxuICAgICAgICB0aGlzLnBsYXkgPSB0aGlzLnBsYXkuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jbGVhckNhbnZhcyA9ICB0aGlzLmNsZWFyQ2FudmFzLmJpbmQodGhpcyk7XG4gICAgICAgIC8vIHRoaXMuc3BlZWQgPSBzcGVlZDtcbiAgICAgICAgLy8gdGhpcy5yZW5kZXJUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgfVxuXG5cblxuICAgIGNsZWFyQ2FudmFzKCkge1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgLy8gY3R4LmNsZWFyUmVjdChwbGF5ZXJfcG9zaXRpb25feCAtIChjYW1lcmFfd2lkdGgvMiksIHBsYXllcl9wb3NpdGlvbl95IC0gKGNhbWVyYV9oZWlnaHQvMiksIGNhbWVyYV93aWR0aCwgY2FtZXJhX2hlaWdodClcblxuICAgIH1cblxuLy8gICAgICAgICAgIGxldCB0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4vLyBpZiAodCA+IHRoaXMuYW5pbWVUaW1lKSB7XG4vLyAgICAgdGhpcy5mcmFtZSsrO1xuLy8gICAgIHRoaXMuYW5pbWVUaW1lID0gdCArIDEwMDAgLyB0aGlzLnNwZWVkO1xuLy8gfVxuXG4gICAgcGxheSgpIHtcbiAgICAgICAgLy8gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnBsYXkpO1xuICAgICAgICAgICAgdGhpcy5jbGVhckNhbnZhcygpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgLy8gfSwgMTAwMClcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC5kcmF3QmcoKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIuYW5pbWF0ZSgpO1xuICAgIH1cbn0iLCJpbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUnO1xuXG5jb25zdCBXID0gNzAwO1xuY29uc3QgSCA9IDQ0MDtcblxuZXhwb3J0IHsgVywgSCB9O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgIGNhbnZhcy53aWR0aCA9IFc7XG4gICAgY2FudmFzLmhlaWdodCA9IEg7XG5cbiAgICBjb25zdCBnYW1lID0gbmV3IEdhbWUoY3R4LCBjYW52YXMpO1xuICAgIGdhbWUucGxheSgpO1xuICAgIGdhbWUucmVuZGVyKCk7XG59KTsiLCJpbXBvcnQgQ29udHJvbHMsIHsgUklHSFQsIExFRlQsIEpVTVAsIFNIT09ULCBGQUNFTEVGVCwgRkFDRVJJR0hUIH0gZnJvbSAnLi9jb250cm9scyc7XG5pbXBvcnQgQnVsbGV0IGZyb20gJy4vYnVsbGV0JztcblxuLy8gbWFrZSBtYXAgY2xhc3Ncbi8vIHRha2UgaW4ganNvbiBhcnJheVxuXG5jb25zdCBNRUdBX1JJR0hUID0ge1xuICAgIHNyYzogJy4uL2Fzc2V0cy9pbWFnZXMvcGxheWVyL21lZ2FfbWFuLnBuZycsXG59O1xuXG5jb25zdCBNRUdBX0xFRlQgPSB7XG4gICAgc3JjOiAnLi4vYXNzZXRzL2ltYWdlcy9wbGF5ZXIvbWVnYV9tYW4yLnBuZycsXG59O1xuXG5jb25zdCBNRUdBX1JVTl9GUkFNRVMgPSBbMSwgMzUsIDY5LCAxMDAsIDE0MiwgMTgwLCAyMTMsIDI0NCwgMjc1LCAzMTIsIDM1MywgMzkwXTtcbi8vIHNvIEkgc2hvdWxkIG1ha2UgcmVuZGVyIGNsYXNzLG9iamVjdHMgXG4vLyB5b3V0dWJlIHNpZGUgc2Nyb2xsaW5nIHR1dG9yaWFsc1xuLy8gdGlsZWQgdHV0b3JpYWwsIHRha2UgY2FyZSBvZiBtYXAvcGxhdGZvcm1zXG5jb25zdCBNRUdBX0xFRlRfUlVOX0ZSQU1FUyA9IFsxMzgwLCAxMzQ1LCAxMzE1LCAxMjgyLCAxMjQwLCAxMjAyLCAxMTcwLCAxMTQxLCAxMTA3LCAxMDY3LCAxMDI4XTtcblxuY29uc3QgTUVHQV9SVU5fU0hPT1RfRlJBTUVTID0gWzM2LCA3NSwgMTE1LCAxNjIsIDIwNCwgMjQzLCAyODMsIDMyNiwgMzcxLCA0MTNdO1xuY29uc3QgTUVHQV9MRUZUX1JVTl9TSE9PVF9GUkFNRVMgPSBbMTM0NywgMTMxMCwgMTI3MCwgMTIyNCwgMTE4MiwgMTE0MiwgMTEwMiwgMTA1OSwgMTAxNCwgOTcyXTtcblxuY29uc3QgTUVHQV9KVU1QX0ZSQU1FUyA9IFszLCAyOSwgNTMsIDc4LCAxMDgsIDEzOCwgMTcwXTtcbmNvbnN0IE1FR0FfSlVNUF9MRUZUX0ZSQU1FUyA9IFsxMzg1LCAxMzYzLCAxMzQwLCAxMzE1LCAxMjg1LCAxMjU1LCAxMjIzXTtcbmNvbnN0IEdSQVZJVFkgPSA2O1xuXG5cbi8vIDIyNSwgZ3JvdW5kIGxldmVsXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IoY3R4KSB7XG4gICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLnhQb3MgPSAxMjA7XG4gICAgICAgIHRoaXMueVBvcyA9IDE5MDtcbiAgICAgICAgdGhpcy54U2l6ZSA9IDM1O1xuICAgICAgICB0aGlzLnlTaXplID0gMzU7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnN4ID0gMjI1O1xuICAgICAgICB0aGlzLnN5ID0gMjk7XG4gICAgICAgIHRoaXMuc3JjU3ByaXRlID0geyB4OjM1LCB5OjM1IH1cblxuICAgICAgICB0aGlzLnNwcml0ZVNpemUgPSAzNTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZFggPSA0O1xuICAgICAgICB0aGlzLmRZID0gMTYuODtcbiAgICAgICAgdGhpcy5qdW1wU3RyID0gMDtcbiAgICAgICAgdGhpcy55VmVsID0gMDtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc3RlcCA9IDM1O1xuICAgICAgICB0aGlzLnJ1blN0ZXAgPSAwO1xuICAgICAgICB0aGlzLnJ1blNob290U3RlcCA9IDA7XG4gICAgICAgIHRoaXMuanVtcFN0ZXAgPSAwO1xuXG4gICAgICAgIHRoaXMudHJhdmVyc2UgPSB0aGlzLnRyYXZlcnNlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudHJhdmVyc2VSdW4gPSB0aGlzLnRyYXZlcnNlUnVuLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5ncm91bmRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuYWN0aXZpdHkgPSAnc3RhbmQnO1xuICAgICAgICB0aGlzLmluaXRBbmltKCk7XG4gICAgICAgIHRoaXMuZ3JhdigpO1xuICAgICAgICB0aGlzLnJlbmRlclN0YW5kVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB0aGlzLnJlbmRlclJ1blRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJKdW1wVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIH1cblxuICAgIGluaXRBbmltKCkge1xuICAgICAgICB0aGlzLnJpZ2h0U3ByaXRlcyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLnJpZ2h0U3ByaXRlcy5zcmMgPSBNRUdBX1JJR0hULnNyYztcbiAgICAgICAgdGhpcy5yaWdodFNwcml0ZXMub25sb2FkID0gdGhpcy5kcmF3UGxheWVyLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5sZWZ0U3ByaXRlcyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmxlZnRTcHJpdGVzLnNyYyA9IE1FR0FfTEVGVC5zcmM7XG4gICAgICAgIHRoaXMubGVmdFNwcml0ZXMub25sb2FkID0gdGhpcy5kcmF3UGxheWVyLmJpbmQodGhpcyk7XG5cblxuICAgICAgICAvLyBjb25zdCBzdGFuZGluZ0ZyYW1lcyA9IFtcbiAgICAgICAgLy8gICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnJpZ2h0U3ByaXRlcywgdGhpcy5zeCwgdGhpcy5zeSwgdGhpcy5zcmNTcHJpdGUueCwgdGhpcy5zcmNTcHJpdGUueSwgdGhpcy54UG9zLCB0aGlzLnlQb3MsIHRoaXMueFNpemUgKiAyLCB0aGlzLnlTaXplICogMiksXG4gICAgICAgIC8vICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5yaWdodFNwcml0ZXMsIHRoaXMuc3ggKyAzNSwgdGhpcy5zeSwgdGhpcy5zcmNTcHJpdGUueCwgdGhpcy5zcmNTcHJpdGUueSwgdGhpcy54UG9zICsgMTAwLCB0aGlzLnlQb3MsIHRoaXMueFNpemUgKiAyLCB0aGlzLnlTaXplICogMiksXG4gICAgICAgIC8vICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5yaWdodFNwcml0ZXMsIHRoaXMuc3ggKyA3MCwgdGhpcy5zeSwgdGhpcy5zcmNTcHJpdGUueCwgdGhpcy5zcmNTcHJpdGUueSwgdGhpcy54UG9zICsgMjAwLCB0aGlzLnlQb3MsIHRoaXMueFNpemUgKiAyLCB0aGlzLnlTaXplICogMiksXG4gICAgICAgIC8vIF1cbiAgICB9XG4gICAgXG4gICAgbW92ZUxlZnQoKSB7XG4gICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgIGlmIChMRUZUKSB7XG4gICAgICAgICAgICB0aGlzLnhQb3MgLT0gdGhpcy5kWDtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZpdHkgPSBcInJ1bi1sZWZ0XCI7XG4gICAgICAgIH0gXG4gICAgICAgIGVsc2UgaWYgKEZBQ0VMRUZUKXtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZpdHkgPSAnc3RhbmQtbGVmdCc7XG4gICAgICAgICAgICAvLyBGQUNFTEVGVCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW92ZVJpZ2h0KCkge1xuICAgICAgICBpZiAoUklHSFQpIHtcbiAgICAgICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgICAgICB0aGlzLnhQb3MgKz0gdGhpcy5kWDtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZpdHkgPSBcInJ1blwiO1xuICAgICAgICB9IFxuICAgICAgICBlbHNlIGlmIChGQUNFUklHSFQpe1xuICAgICAgICAgICAgdGhpcy5hY3Rpdml0eSA9ICdzdGFuZCc7XG4gICAgICAgICAgICAvLyBGQUNFUklHSFQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBtb3ZlVXAoKSB7XG4gICAgICAgIGlmIChKVU1QICYmIHRoaXMuZ3JvdW5kZWQpIHtcbiAgICAgICAgICAgIHRoaXMueVBvcyAtPSB0aGlzLmRZO1xuICAgICAgICAgICAgdGhpcy55VmVsID0gdGhpcy5kWTtcbiAgICAgICAgfSBlbHNlIGlmIChKVU1QICYmICF0aGlzLmdyb3VuZGVkKSB7XG4gICAgICAgICAgICB0aGlzLnlQb3MgLT0gdGhpcy55VmVsO1xuICAgICAgICAgICAgdGhpcy55VmVsIC89IDEuMDUzO1xuICAgICAgICB9IGVsc2UgaWYgKCFKVU1QICYmICF0aGlzLmdyb3VuZGVkKSB7XG4gICAgICAgICAgICB0aGlzLnlWZWwgPSAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ3JhdigpIHtcbiAgICAgICAgaWYgKHRoaXMueVBvcyArIDM1ID49IDIyMCkge1xuICAgICAgICAgICAgdGhpcy5ncm91bmRlZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdyb3VuZGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnlQb3MgKz0gR1JBVklUWTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob290KCkge1xuICAgICAgICBpZiAoU0hPT1QgJiYgRkFDRVJJR0hUKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2aXR5ID0gJ3Nob290JztcbiAgICAgICAgfSBlbHNlIGlmIChTSE9PVCAmJiBGQUNFTEVGVCkge1xuICAgICAgICAgICAgdGhpcy5hY3Rpdml0eSA9ICdzaG9vdC1sZWZ0JztcbiAgICAgICAgfSBlbHNlIGlmIChTSE9PVCAmJiBSSUdIVCkge1xuICAgICAgICAgICAgdGhpcy5hY3Rpdml0eSA9ICdydW4tc2hvb3QnO1xuICAgICAgICB9IGVsc2UgaWYgKFNIT09UICYmIExFRlQpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZpdHkgPSAncnVuLXNob290LWxlZnQnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gc3RhbmRpbmdNZWdhKCkge1xuICAgIC8vICAgICBpZiAodGhpcy5hY3Rpdml0eSA9IFwicnVuLWxlZnRcIikge1xuICAgIC8vICAgICAgICAgdGhpcy5hY3Rpdml0eSA9ICdzdGFuZC1sZWZ0JztcbiAgICAvLyAgICAgfSBlbHNlIGlmICh0aGlzLmFjdGl2aXR5ID0gJ3J1bicpIHtcbiAgICAvLyAgICAgICAgIHRoaXMuYWN0aXZpdHkgPSAnc3RhbmQnO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICB0aGlzLmdyYXYoKTtcbiAgICAgICAgdGhpcy5tb3ZlVXAoKTtcbiAgICAgICAgdGhpcy5tb3ZlUmlnaHQoKTtcbiAgICAgICAgdGhpcy5tb3ZlTGVmdCgpO1xuICAgICAgICB0aGlzLnNob290KCk7XG4gICAgICAgIC8vIHRoaXMuc3RhbmRpbmdNZWdhKCk7XG4gICAgfVxuXG4gICAgdHJhdmVyc2UoKSB7XG4gICAgICAgIGxldCB0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIGlmICh0ID4gdGhpcy5yZW5kZXJTdGFuZFRpbWUpIHtcbiAgICAgICAgICAgIHRoaXMuc3RlcCArPSAzNVxuICAgICAgICAgICAgdGhpcy5yZW5kZXJTdGFuZFRpbWUgPSB0ICsgNzAwO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMuc3RlcCArPSAzNTtcbiAgICAgICAgaWYgKHRoaXMuc3RlcCA+PSAxMDUpIHtcbiAgICAgICAgICAgIHRoaXMuc3RlcCA9IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyByaWdodCBydW4gZnJhbWVzXG4gICAgLy8gMzUsIDM1LCAzMCwgNDAsIDQwLCAzNywgMjcsIDMxLCAzNywgNDEsIDM3XG4gICAgLy8gMzUsIDcwLCAxMDAsIDE0MCwgMTgwLCAyMTcsIDI0NCwgMjc1LCAzMTIsIDM1MywgMzkwXG5cbiAgICAvLyBsZWZ0IHJ1biBmcmFtZXMgKHN0YXJ0IDEzODApXG4gICAgLy8gMzVcblxuICAgIFxuICAgIHRyYXZlcnNlUnVuKCkge1xuICAgICAgICBsZXQgciA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICBpZiAociA+IHRoaXMucmVuZGVyUnVuVGltZSkge1xuICAgICAgICAgICAgdGhpcy5ydW5TdGVwKys7XG4gICAgICAgICAgICB0aGlzLnJ1blNob290U3RlcCsrO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJSdW5UaW1lID0gciArIDEwMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5ydW5TdGVwID49IDExKSB7XG4gICAgICAgICAgICB0aGlzLnJ1blN0ZXAgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnJ1blNob290U3RlcCA+PSA5KSB7XG4gICAgICAgICAgICB0aGlzLnJ1blNob290U3RlcCA9IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0cmF2ZXJzZUp1bXAoKSB7XG4gICAgICAgIGxldCBqID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIGlmIChqID4gdGhpcy5yZW5kZXJKdW1wVGltZSkge1xuICAgICAgICAgICAgdGhpcy5qdW1wU3RlcCsrO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJKdW1wVGltZSA9IGogKyAxNTA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuanVtcFN0ZXAgPj0gNiB8fCB0aGlzLmdyb3VuZGVkKSB7XG4gICAgICAgICAgICB0aGlzLmp1bXBTdGVwID0gMDtcbiAgICAgICAgfSBcbiAgICB9XG4gICAgXG4gICAgXG4gICAgZHJhd1BsYXllcigpIHtcbiAgICAgICAgLy8gbGV0IHN0ZXAgPSAzNTtcbiAgICAgICAgLy8gc3RlcCArPSAzNTtcbiAgICAgICAgLy8gaWYgKHN0ZXAgPT09IDEwNSkge1xuICAgICAgICAvLyAgICAgc3RlcCA9IDM1O1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgIGlmICh0aGlzLmFjdGl2aXR5ID09PSAnc3RhbmQnICYmIHRoaXMuZ3JvdW5kZWQpIHtcbiAgICAgICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgICAgICAvLyBsZXQgZnJhbWVDb3VudCA9IDA7XG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5yaWdodFNwcml0ZXMsIHRoaXMuc3ggKyB0aGlzLnN0ZXAsIHRoaXMuc3ksIHRoaXMuc3JjU3ByaXRlLngsIHRoaXMuc3JjU3ByaXRlLnksIHRoaXMueFBvcywgdGhpcy55UG9zLCB0aGlzLnhTaXplICogMiwgdGhpcy55U2l6ZSAqIDIpO1xuXG4gICAgICAgICAgICAvLyB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5yaWdodFNwcml0ZXMsIHRoaXMuc3ggKyA3MCwgdGhpcy5zeSwgdGhpcy5zcmNTcHJpdGUueCwgdGhpcy5zcmNTcHJpdGUueSwgdGhpcy54UG9zICsgMTAwLCB0aGlzLnlQb3MsIHRoaXMueFNpemUgKiAyLCB0aGlzLnlTaXplICogMik7XG4gICAgICAgICAgICAvLyB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5yaWdodFNwcml0ZXMsIHRoaXMuc3ggKyAxMDUsIHRoaXMuc3ksIHRoaXMuc3JjU3ByaXRlLngsIHRoaXMuc3JjU3ByaXRlLnksIHRoaXMueFBvcyArIDIwMCwgdGhpcy55UG9zLCB0aGlzLnhTaXplICogMiwgdGhpcy55U2l6ZSAqIDIpO1xuICAgICAgICAgICAgLy8gdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMucmlnaHRTcHJpdGVzLCAzMTUsIDE1LCB0aGlzLnNyY1Nwcml0ZS54LCB0aGlzLnNyY1Nwcml0ZS55LCB0aGlzLnhQb3MgKyAxMDAsIHRoaXMueVBvcywgdGhpcy54U2l6ZSAqIDIsIHRoaXMueVNpemUgKiAyKTtcbiAgICAgICAgfSBcblxuICAgICAgICBpZiAodGhpcy5hY3Rpdml0eSA9PT0gJ3J1bicgJiYgdGhpcy5ncm91bmRlZCkge1xuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMucmlnaHRTcHJpdGVzLCAxICsgTUVHQV9SVU5fRlJBTUVTW3RoaXMucnVuU3RlcF0sIDY3LCB0aGlzLnNyY1Nwcml0ZS54LCB0aGlzLnNyY1Nwcml0ZS55LCB0aGlzLnhQb3MsIHRoaXMueVBvcywgdGhpcy54U2l6ZSAqIDIsIHRoaXMueVNpemUgKiAyKTtcbiAgICAgICAgICAgIC8vIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnJpZ2h0U3ByaXRlcywgMzE1ICsgdGhpcy5zdGVwLCAxNSwgdGhpcy5zcmNTcHJpdGUueCwgdGhpcy5zcmNTcHJpdGUueSwgdGhpcy54UG9zICsgMTAwLCB0aGlzLnlQb3MsIHRoaXMueFNpemUgKiAyLCB0aGlzLnlTaXplICogMik7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmFjdGl2aXR5ID09PSAnc3RhbmQtbGVmdCcgJiYgdGhpcy5ncm91bmRlZCkge1xuICAgICAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmxlZnRTcHJpdGVzLCAxMDU1ICsgdGhpcy5zdGVwLCB0aGlzLnN5LCAzNSwgMzUsIHRoaXMueFBvcywgdGhpcy55UG9zLCB0aGlzLnhTaXplICogMiwgdGhpcy55U2l6ZSAqIDIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuYWN0aXZpdHkgPT09ICdydW4tbGVmdCcgJiYgdGhpcy5ncm91bmRlZCkge1xuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMubGVmdFNwcml0ZXMsIE1FR0FfTEVGVF9SVU5fRlJBTUVTW3RoaXMucnVuU3RlcF0sIDY3LCAzNSwgMzUsIHRoaXMueFBvcywgdGhpcy55UG9zLCB0aGlzLnhTaXplICogMiwgdGhpcy55U2l6ZSAqIDIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuYWN0aXZpdHkgPT09ICdzaG9vdCcgJiYgdGhpcy5ncm91bmRlZCkge1xuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMucmlnaHRTcHJpdGVzLCAzNjEsIHRoaXMuc3ksIHRoaXMuc3JjU3ByaXRlLngsIHRoaXMuc3JjU3ByaXRlLnksIHRoaXMueFBvcywgdGhpcy55UG9zLCB0aGlzLnhTaXplICogMiwgdGhpcy55U2l6ZSAqIDIpO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5hY3Rpdml0eSA9PT0gJ3Nob290LWxlZnQnKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5sZWZ0U3ByaXRlcywgMTAyMCwgdGhpcy5zeSwgdGhpcy5zcmNTcHJpdGUueCwgdGhpcy5zcmNTcHJpdGUueSwgdGhpcy54UG9zLCB0aGlzLnlQb3MsIHRoaXMueFNpemUgKiAyLCB0aGlzLnlTaXplICogMik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5hY3Rpdml0eSA9PT0gJ3J1bi1zaG9vdCcpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnJpZ2h0U3ByaXRlcywgTUVHQV9SVU5fU0hPT1RfRlJBTUVTW3RoaXMucnVuU2hvb3RTdGVwXSwgMTA2LCB0aGlzLnNyY1Nwcml0ZS54LCB0aGlzLnNyY1Nwcml0ZS55LCB0aGlzLnhQb3MsIHRoaXMueVBvcywgdGhpcy54U2l6ZSAqIDIsIHRoaXMueVNpemUgKiAyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmFjdGl2aXR5ID09PSAncnVuLXNob290LWxlZnQnKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5sZWZ0U3ByaXRlcywgTUVHQV9MRUZUX1JVTl9TSE9PVF9GUkFNRVNbdGhpcy5ydW5TaG9vdFN0ZXBdLCAxMDYsIHRoaXMuc3JjU3ByaXRlLngsIHRoaXMuc3JjU3ByaXRlLnksIHRoaXMueFBvcywgdGhpcy55UG9zLCB0aGlzLnhTaXplICogMiwgdGhpcy55U2l6ZSAqIDIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLmdyb3VuZGVkICYmIEZBQ0VSSUdIVCkge1xuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMucmlnaHRTcHJpdGVzLCBNRUdBX0pVTVBfRlJBTUVTW3RoaXMuanVtcFN0ZXBdLCAxNDgsIHRoaXMuc3JjU3ByaXRlLnggLSA4LCB0aGlzLnNyY1Nwcml0ZS55ICsgOCwgdGhpcy54UG9zLCB0aGlzLnlQb3MsIDI3ICogMiwgNDMgKiAyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5ncm91bmRlZCAmJiBGQUNFTEVGVCkge1xuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMubGVmdFNwcml0ZXMsIE1FR0FfSlVNUF9MRUZUX0ZSQU1FU1t0aGlzLmp1bXBTdGVwXSwgMTQ4LCB0aGlzLnNyY1Nwcml0ZS54IC0gOCwgdGhpcy5zcmNTcHJpdGUueSArIDgsIHRoaXMueFBvcywgdGhpcy55UG9zLCAyNyAqIDIsIDQzICogMik7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLmFjdGl2aXR5ID09PSAncnVuJyAmJiAhdGhpcy5ncm91bmRlZCkge1xuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMucmlnaHRTcHJpdGVzLCBNRUdBX0pVTVBfRlJBTUVTW3RoaXMuanVtcFN0ZXBdLCAxNDgsIHRoaXMuc3JjU3ByaXRlLnggLSA4LCB0aGlzLnNyY1Nwcml0ZS55ICsgOCwgdGhpcy54UG9zLCB0aGlzLnlQb3MsIDI3ICogMiwgNDMgKiAyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmFjdGl2aXR5ID09PSdydW4tbGVmdCcgJiYgIXRoaXMuZ3JvdW5kZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmxlZnRTcHJpdGVzLCBNRUdBX0pVTVBfTEVGVF9GUkFNRVNbdGhpcy5qdW1wU3RlcF0sIDE0OCwgdGhpcy5zcmNTcHJpdGUueCAtIDgsIHRoaXMuc3JjU3ByaXRlLnkgKyA4LCB0aGlzLnhQb3MsIHRoaXMueVBvcywgMjcgKiAyLCA0MyAqIDIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gbGVmdCA9IFsxMzQ3LCAxMzEwLCAxMjcwLCAxMjI0LCAxMTgyLCAxMTQyLCAxMTAyLCAxMDU5LCAxMDE0LCA5NzJdXG4gICAgLy8gcnVuIHNob290IGZyYW1lcyA9IFszNiwgNzUsIDExNSwgMTYyLCAyMDQsIDI0MywgMjgzLCAzMjYsIDM3MSwgNDEzIF1cbiAgICAvLyBqdW1wIHIgPSBbMywgMjksIDUzLCA3OCwgMTA4LCAxMzgsIDE3MF1cbiAgICAvLyBsZWZ0IGp1bXAgPSBbMTM4NSwgMTM2MywgMTM0MCwgMTMxNSwgMTI4NSwgMTI1NSwgMTIyM11cbiAgICBcbiAgICBhbmltYXRlKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICB0aGlzLnRyYXZlcnNlSnVtcCgpO1xuICAgICAgICB0aGlzLnRyYXZlcnNlUnVuKCk7XG4gICAgICAgIHRoaXMudHJhdmVyc2UoKTtcbiAgICAgICAgdGhpcy5kcmF3UGxheWVyKCk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=