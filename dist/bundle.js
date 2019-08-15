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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
    function Game(ctx, canvas) {
        _classCallCheck(this, Game);

        this.ctx = ctx;
        this.canvas = canvas;

        this.player = new _player2.default(ctx);
    }

    _createClass(Game, [{
        key: "requestAnimationFrame",
        value: function requestAnimationFrame() {
            return window.requestAnimationFrame;
        }
    }, {
        key: "play",
        value: function play() {
            this.render();
            this.requestAnimationFrame(this.play.bind(this));
        }
    }, {
        key: "render",
        value: function render() {
            this.player.drawPlayer();
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

var _game = __webpack_require__(/*! ./game.js */ "./src/game.js");

var _game2 = _interopRequireDefault(_game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var W = 800;
var H = 500;

exports.W = W;
exports.H = H;


document.addEventListener('DOMContentLoaded', function () {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    canvas.width = W;
    canvas.height = H;

    var game = new _game2.default();
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var STAND = {
    src: './assets/images/player/player_stand.png'
};

var RUN = {
    src: './assets/images/player/player_run.png'
};

var Player = function () {
    function Player(ctx) {
        _classCallCheck(this, Player);

        this.ctx = ctx;
        this.xPos = 30;
        this.yPos = 400;
        this.xHbox = 50;
        this.yHbox = 50;

        this.activity = 'stand';
        this.initAnim();
    }

    _createClass(Player, [{
        key: 'initAnim',
        value: function initAnim() {
            this.standingImg = new Image();
            this.standingImg.src = STAND.src;
            this.runningImg = new Image();
            this.runningImg.src = RUN.src;
        }
    }, {
        key: 'drawPlayer',
        value: function drawPlayer() {
            this.ctx.drawImage(this.standingImg, this.xPos, this.yPos, this.xHbox, this.yHbox);
        }
    }]);

    return Player;
}();

exports.default = Player;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9wbGF5ZXIuanMiXSwibmFtZXMiOlsiR2FtZSIsImN0eCIsImNhbnZhcyIsInBsYXllciIsIlBsYXllciIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJlbmRlciIsInBsYXkiLCJiaW5kIiwiZHJhd1BsYXllciIsIlciLCJIIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0Iiwid2lkdGgiLCJoZWlnaHQiLCJnYW1lIiwiU1RBTkQiLCJzcmMiLCJSVU4iLCJ4UG9zIiwieVBvcyIsInhIYm94IiwieUhib3giLCJhY3Rpdml0eSIsImluaXRBbmltIiwic3RhbmRpbmdJbWciLCJJbWFnZSIsInJ1bm5pbmdJbWciLCJkcmF3SW1hZ2UiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTs7Ozs7Ozs7SUFHcUJBLEk7QUFDakIsa0JBQVlDLEdBQVosRUFBaUJDLE1BQWpCLEVBQXlCO0FBQUE7O0FBQ3JCLGFBQUtELEdBQUwsR0FBV0EsR0FBWDtBQUNBLGFBQUtDLE1BQUwsR0FBY0EsTUFBZDs7QUFFQSxhQUFLQyxNQUFMLEdBQWMsSUFBSUMsZ0JBQUosQ0FBV0gsR0FBWCxDQUFkO0FBQ0g7Ozs7Z0RBRXVCO0FBQ3BCLG1CQUNJSSxPQUFPQyxxQkFEWDtBQUdIOzs7K0JBRU07QUFDSCxpQkFBS0MsTUFBTDtBQUNBLGlCQUFLRCxxQkFBTCxDQUEyQixLQUFLRSxJQUFMLENBQVVDLElBQVYsQ0FBZSxJQUFmLENBQTNCO0FBQ0g7OztpQ0FFUTtBQUNMLGlCQUFLTixNQUFMLENBQVlPLFVBQVo7QUFDSDs7Ozs7O2tCQXJCZ0JWLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIckI7Ozs7OztBQUVBLElBQU1XLElBQUksR0FBVjtBQUNBLElBQU1DLElBQUksR0FBVjs7UUFFU0QsQyxHQUFBQSxDO1FBQUdDLEMsR0FBQUEsQzs7O0FBRVpDLFNBQVNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBQ2hELFFBQU1aLFNBQVNXLFNBQVNFLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBZjtBQUNBLFFBQU1kLE1BQU1DLE9BQU9jLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWjs7QUFFQWQsV0FBT2UsS0FBUCxHQUFlTixDQUFmO0FBQ0FULFdBQU9nQixNQUFQLEdBQWdCTixDQUFoQjs7QUFFQSxRQUFNTyxPQUFPLElBQUluQixjQUFKLEVBQWI7QUFDQW1CLFNBQUtaLE1BQUw7QUFDSCxDQVRELEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQSxJQUFNYSxRQUFRO0FBQ1ZDLFNBQUs7QUFESyxDQUFkOztBQUlBLElBQU1DLE1BQU07QUFDUkQsU0FBSztBQURHLENBQVo7O0lBSXFCakIsTTtBQUNqQixvQkFBWUgsR0FBWixFQUFpQjtBQUFBOztBQUNiLGFBQUtBLEdBQUwsR0FBV0EsR0FBWDtBQUNBLGFBQUtzQixJQUFMLEdBQVksRUFBWjtBQUNBLGFBQUtDLElBQUwsR0FBWSxHQUFaO0FBQ0EsYUFBS0MsS0FBTCxHQUFhLEVBQWI7QUFDQSxhQUFLQyxLQUFMLEdBQWEsRUFBYjs7QUFFQSxhQUFLQyxRQUFMLEdBQWdCLE9BQWhCO0FBQ0EsYUFBS0MsUUFBTDtBQUNIOzs7O21DQUVVO0FBQ1AsaUJBQUtDLFdBQUwsR0FBbUIsSUFBSUMsS0FBSixFQUFuQjtBQUNBLGlCQUFLRCxXQUFMLENBQWlCUixHQUFqQixHQUF1QkQsTUFBTUMsR0FBN0I7QUFDQSxpQkFBS1UsVUFBTCxHQUFrQixJQUFJRCxLQUFKLEVBQWxCO0FBQ0EsaUJBQUtDLFVBQUwsQ0FBZ0JWLEdBQWhCLEdBQXNCQyxJQUFJRCxHQUExQjtBQUNIOzs7cUNBRVk7QUFDVCxpQkFBS3BCLEdBQUwsQ0FBUytCLFNBQVQsQ0FBbUIsS0FBS0gsV0FBeEIsRUFBcUMsS0FBS04sSUFBMUMsRUFBZ0QsS0FBS0MsSUFBckQsRUFBMkQsS0FBS0MsS0FBaEUsRUFBdUUsS0FBS0MsS0FBNUU7QUFDSDs7Ozs7O2tCQXJCZ0J0QixNIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihjdHgsIGNhbnZhcykge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoY3R4KTtcbiAgICB9XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gICAgICAgIClcbiAgICB9XG5cbiAgICBwbGF5KCkge1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB0aGlzLnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnBsYXkuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB0aGlzLnBsYXllci5kcmF3UGxheWVyKCk7XG4gICAgfVxufSIsImltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZS5qcyc7XG5cbmNvbnN0IFcgPSA4MDA7XG5jb25zdCBIID0gNTAwO1xuXG5leHBvcnQgeyBXLCBIIH07XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgY2FudmFzLndpZHRoID0gVztcbiAgICBjYW52YXMuaGVpZ2h0ID0gSDtcblxuICAgIGNvbnN0IGdhbWUgPSBuZXcgR2FtZTtcbiAgICBnYW1lLnJlbmRlcigpO1xufSk7IiwiY29uc3QgU1RBTkQgPSB7XG4gICAgc3JjOiAnLi9hc3NldHMvaW1hZ2VzL3BsYXllci9wbGF5ZXJfc3RhbmQucG5nJyxcbn07XG5cbmNvbnN0IFJVTiA9IHtcbiAgICBzcmM6ICcuL2Fzc2V0cy9pbWFnZXMvcGxheWVyL3BsYXllcl9ydW4ucG5nJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IoY3R4KSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLnhQb3MgPSAzMDtcbiAgICAgICAgdGhpcy55UG9zID0gNDAwO1xuICAgICAgICB0aGlzLnhIYm94ID0gNTA7XG4gICAgICAgIHRoaXMueUhib3ggPSA1MDtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuYWN0aXZpdHkgPSAnc3RhbmQnO1xuICAgICAgICB0aGlzLmluaXRBbmltKCk7XG4gICAgfVxuXG4gICAgaW5pdEFuaW0oKSB7XG4gICAgICAgIHRoaXMuc3RhbmRpbmdJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5zdGFuZGluZ0ltZy5zcmMgPSBTVEFORC5zcmM7XG4gICAgICAgIHRoaXMucnVubmluZ0ltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLnJ1bm5pbmdJbWcuc3JjID0gUlVOLnNyYztcbiAgICB9XG4gICAgXG4gICAgZHJhd1BsYXllcigpIHtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuc3RhbmRpbmdJbWcsIHRoaXMueFBvcywgdGhpcy55UG9zLCB0aGlzLnhIYm94LCB0aGlzLnlIYm94ICk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=