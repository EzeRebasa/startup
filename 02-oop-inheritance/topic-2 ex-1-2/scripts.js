
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
            event.forEach(fn => fn(eventName));
        }
    }
    off(eventName, callback) {

        this.events[eventName] = this.events[eventName].filter(eventFn => callback !== eventFn);

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

class Movie extends EventEmitter {
    constructor(title, year, duration) {
        super();
        this.title = title;
        this.year = year;
        this.duration = duration;
        this.cast = [];
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

    ////////////////////////////////////////////////////// Exercise 3 ///////////////////////////////////

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

class Logger {

    log(info) {
        console.log("The " + info + " event has been emmited");
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////// Adding movies /////////////////////////////
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

lor.off('play', callbackPlay); // Event cancelled
lor.play(); // Output : 
lor.off('resume', callbackResume);
lor.off('pause', callbackPause);

////////////////////////////////////// Adding Actors ///////////////////////////////////

const actor1 = new Actor("Rayo McQueen", 20);
const actor2 = new Actor("Turbo Lopez", 23);
const actors = [new Actor("Arthur Ito", 45),
                new Actor("Esteban Quito", 37),
                new Actor("Facundo Pastor", 36)
                ];

cars.addActor(actor1);
cars.addActor(actor2);
cars.addActor(actors);

/////////////////////////////////////// Testing Class Logger ///////////////////////////

const logger = new Logger();

cars.on('play',logger.log);
cars.on('pause',logger.log); 
cars.on('resume', logger.log); 

cars.play(); // output : The play event has been emmited
cars.pause(); // output : The pause event has been emmited
cars.resume(); // output : The pause event has been emmited
