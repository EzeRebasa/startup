"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Actor = _interopRequireDefault(require("/.Actor.js"));

var _EventEmitter2 = _interopRequireDefault(require("/.EventEmitter.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Movie = /*#__PURE__*/function (_EventEmitter) {
  _inherits(Movie, _EventEmitter);

  function Movie(title, year, duration) {
    var _this;

    _classCallCheck(this, Movie);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Movie).call(this));
    _this.title = title;
    _this.year = year;
    _this.duration = duration;
    _this.cast = [];
    return _this;
  }

  _createClass(Movie, [{
    key: "toString",
    value: function toString() {
      return "Title : " + this.title + " " + " Year : " + this.year + " Duration : " + this.duration;
    }
  }, {
    key: "play",
    value: function play() {
      _get(_getPrototypeOf(Movie.prototype), "emit", this).call(this, "play");
    }
  }, {
    key: "pause",
    value: function pause() {
      _get(_getPrototypeOf(Movie.prototype), "emit", this).call(this, "pause");
    }
  }, {
    key: "resume",
    value: function resume() {
      _get(_getPrototypeOf(Movie.prototype), "emit", this).call(this, "resume");
    } ////////////////////////////////////////////////////// Exercise 3 ///////////////////////////////////
    // I think it is better to work with copies so I modified the function 
    // but I just found out about the brackets and the ... 'spread operator' :S

  }, {
    key: "addActor",
    value: function addActor(newActor) {
      if (newActor instanceof Array) {
        var currentActorsNames = this.cast.map(function (actor) {
          return actor.name;
        });
        this.cast = [].concat(_toConsumableArray(this.cast), _toConsumableArray(newActor.filter(function (actor) {
          return !currentActorsNames.includes(actor.name);
        })));
      } else if (newActor) {
        this.cast = [].concat(_toConsumableArray(this.cast), [newActor]);
      }
    }
    /*addActor( newActor){
        if(newActor instanceof Array){
            const currentActorsNames = this.cast.map(actor => actor.name);
            const newArray = newActor.filter(actor => !currentActorsNames.includes(actor.name)) 
            this.cast = this.cast.concat(newArray);
        }else if(newActor){
            this.cast.push(newActor);
        }
    }*/

  }]);

  return Movie;
}(_EventEmitter2["default"]);

exports["default"] = Movie;