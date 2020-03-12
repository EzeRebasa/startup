

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
        this.events = {}; // Here we will store the events
    }
    on(eventName, callback){

    }
    emit(eventName){

    }
    off(eventName,callback){

    }
}

const movie = new Movie(" The Lord of the Rings", 2013, "02:30:00");

movie.play();
movie.pause();
movie.resume();

