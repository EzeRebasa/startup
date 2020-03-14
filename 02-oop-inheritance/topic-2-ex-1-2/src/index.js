
/////////////////////////////////////////////////////////////////////////////////////////
import Actor from '/.Actor.js';
import Logger from '/.Logger.js';
import Movie from '/.Movie.js';


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

cars.on('play', logger.log);
cars.on('pause', logger.log);
cars.on('resume', logger.log);

cars.play(); // output : The play event has been emmited
cars.pause(); // output : The pause event has been emmited
cars.resume(); // output : The pause event has been emmited


///////////////////////////////////////// Exercise 4 ////////////////////////////////////

const social = {
    like(friendName){
        console.log(friendName +` likes ${this.title} `);
    },
    share(friendName){
        console.log( friendName + ` share ${this.title} `);
    }
};

// Mixin using the prototype

Object.assign(Movie.prototype, social);

cars.like("Marcos")