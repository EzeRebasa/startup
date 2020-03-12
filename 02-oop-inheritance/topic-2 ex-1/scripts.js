

class Movie {
    constructor(title, year, duration) {
        this.title = title;
        this.year = year;
        this.duration = duration;

    }
    toString() { return "Title : " + this.title + " " + " Year : " + this.year + " Duration : " + this.duration; }

    play() {
        console.log("Reproduciendo... \n " + this.toString());
    }
    pause() {
        console.log(this.title + "  has been paused");
    }
    resume() {
        console.log("Continue watching :" + this.title);
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
    emit(eventName,data) {
        const event = this.events[eventName];
        if(event){
            event.forEach(fn => fn(data)); 
        }
    }
    off(eventName, callback) {
       
        this.events[eventName] = this.events[eventName].filter(eventFn => callback !== eventFn);

    }
}

const movie = new Movie(" The Lord of the Rings", 2013, "02:30:00");

movie.play();
movie.pause();
movie.resume();

