
////////////////////////////////////////// Classes /////////////////////////////////////////
class EventEmitter {
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
            event.forEach(fn => fn(eventName)); // fn(data) If we'll pass data
        }
    }
    off(eventName, callback) {

        this.events[eventName] = this.events[eventName].filter(eventFn => callback !== eventFn);

    }
}

class Movie extends EventEmitter {
    constructor(title, year, duration) {
        super();
        this.title = title;
        this.year = year;
        this.duration = duration;

    }
    toString() { return "Title : " + this.title + " " + " Year : " + this.year + " Duration : " + this.duration; }

    play() {
        super.emit("play");
    }
    pause() {
        super.emit("pause");
    }
    resume() {
        super.emit("resume");
    }

}

class Actor {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    toString() {
        return "Actor : " + this.name + "\n" + "Age : " + this.age;
    }
}


/////////////////////////////////// Charging movies /////////////////////////////
const lor = new Movie(" The Lord of the Rings", 2013, "02:30:00");
const cars = new Movie(" Cars", 2015, "01:30:00");

////////////////////////////////// Testing methods and events////////////////////

const callbackPlay = () => console.log("Playing");
const callbackPause = () => console.log("Paused");
const callbackResume = () => console.log("Resume");

lor.on('play', callbackPlay);
lor.on('pause', callbackPause);
lor.on('resume', callbackResume);

lor.play(); // Output : Playing
lor.pause();
lor.resume();

lor.off('play',callbackPlay); // Event cancelled
lor.play(); // Output : undefined
lor.off('resume',callbackResume);
lor.off('pause',callbackPause);




