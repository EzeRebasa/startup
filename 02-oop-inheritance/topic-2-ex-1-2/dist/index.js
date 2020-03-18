"use strict";

var _Actor = _interopRequireDefault(require("/.Actor.js"));

var _Logger = _interopRequireDefault(require("/.Logger.js"));

var _Movie = _interopRequireDefault(require("/.Movie.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// Adding movies /////////////////////////////
var lor = new _Movie["default"](" The Lord of the Rings", 2013, "02:30:00");
var cars = new _Movie["default"](" Cars", 2015, "01:30:00"); ////////////////////////////////// Testing methods and events////////////////////

var callbackPlay = function callbackPlay() {
  return console.log("Playing");
};

var callbackPause = function callbackPause() {
  return console.log("Paused");
};

var callbackResume = function callbackResume() {
  return console.log("Resume");
};

lor.on('play', callbackPlay);
lor.on('pause', callbackPause);
lor.on('resume', callbackResume);
lor.play(); // Output : Playing

lor.pause();
lor.resume();
lor.off('play', callbackPlay); // Event cancelled

lor.play(); // Output : 

lor.off('resume', callbackResume);
lor.off('pause', callbackPause); ////////////////////////////////////// Adding Actors ///////////////////////////////////

var actor1 = new _Actor["default"]("Rayo McQueen", 20);
var actor2 = new _Actor["default"]("Turbo Lopez", 23);
var actors = [new _Actor["default"]("Arthur Ito", 45), new _Actor["default"]("Esteban Quito", 37), new _Actor["default"]("Facundo Pastor", 36)];
cars.addActor(actor1);
cars.addActor(actor2);
cars.addActor(actors); /////////////////////////////////////// Testing Class Logger ///////////////////////////

var logger = new _Logger["default"]();
cars.on('play', logger.log);
cars.on('pause', logger.log);
cars.on('resume', logger.log);
cars.play(); // output : The play event has been emmited

cars.pause(); // output : The pause event has been emmited

cars.resume(); // output : The pause event has been emmited
///////////////////////////////////////// Exercise 4 ////////////////////////////////////

var social = {
  like: function like(friendName) {
    console.log(friendName + " likes ".concat(this.title, " "));
  },
  share: function share(friendName) {
    console.log(friendName + " share ".concat(this.title, " "));
  }
}; // Mixin using the prototype

Object.assign(_Movie["default"].prototype, social);
cars.like("Marcos");