"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

////////////////////////////////////////// Classes /////////////////////////////////////////
var EventEmitter = /*#__PURE__*/function () {
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);

    this.events = {}; // Here we'll store the events
  }

  _createClass(EventEmitter, [{
    key: "on",
    value: function on(eventName, callback) {
      if (!this.events[eventName]) {
        this.events[eventName] = []; // We need to register the first event appearance
      }

      this.events[eventName].push(callback); // Fynally we'll store the function that will be called
      // when the event is executed.       
    }
  }, {
    key: "emit",
    value: function emit(eventName) {
      var event = this.events[eventName];

      if (event) {
        event.forEach(function (fn) {
          return fn(eventName);
        });
      }
    }
  }, {
    key: "off",
    value: function off(eventName, callback) {
      this.events[eventName] = this.events[eventName].filter(function (eventFn) {
        return callback !== eventFn;
      });
    }
  }]);

  return EventEmitter;
}();

exports["default"] = EventEmitter;