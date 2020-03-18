export default class Actor {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  toString() {
    return "Actor : " + this.name + "\n" + "Age : " + this.age;
  }

}
////////////////////////////////////////// Classes /////////////////////////////////////////
export default class EventEmitter {
  constructor() {
    this.events = {}; // Here we'll store the events
  }

  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = []; // We need to register the first event appearance
    }

    this.events[eventName].push(callback); // Fynally we'll store the function that will be called
    // when the event is executed.       
  }

  emit(eventName) {
    const event = this.events[eventName];

    if (event) {
      event.forEach(fn => fn(eventName));
    }
  }

  off(eventName, callback) {
    this.events[eventName] = this.events[eventName].filter(eventFn => callback !== eventFn);
  }

}
export default class Logger {
  log(info) {
    console.log("The " + info + " event has been emmited");
  }

}
import Actor from '/.Actor.js';
import EventEmitter from '/.EventEmitter.js';
export default class Movie extends EventEmitter {
  constructor(title, year, duration) {
    super();
    this.title = title;
    this.year = year;
    this.duration = duration;
    this.cast = [];
  }

  toString() {
    return "Title : " + this.title + " " + " Year : " + this.year + " Duration : " + this.duration;
  }

  play() {
    super.emit("play");
  }

  pause() {
    super.emit("pause");
  }

  resume() {
    super.emit("resume");
  } ////////////////////////////////////////////////////// Exercise 3 ///////////////////////////////////
  // I think it is better to work with copies so I modified the function 
  // but I just found out about the brackets and the ... 'spread operator' :S


  addActor(newActor) {
    if (newActor instanceof Array) {
      const currentActorsNames = this.cast.map(actor => actor.name);
      this.cast = [...this.cast, ...newActor.filter(actor => !currentActorsNames.includes(actor.name))];
    } else if (newActor) {
      this.cast = [...this.cast, newActor];
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


}
