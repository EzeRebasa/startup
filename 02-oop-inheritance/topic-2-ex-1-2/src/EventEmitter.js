
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
