

let text;
let bd;

///////////////////////////////////////////////// Save the content with IndexedDB ////////////////////////
function InicIndexDB() {
    result = document.querySelector('#section-result');
    btn = document.querySelector('#btn-save');

    btn.addEventListener("click", addObject);

    let request = indexedDB.open("myDatabase");
    // If my Database was successfully created, then I store my object
    request.onsuccess = (e) => {
        bd = e.target.result;
    }
    // I use onupgradeneeded when the database has already been created and I need to update the data
    request.onupgradeneeded = (e) => {

        bd = e.target.result;
        bd.createObjectStore("data", { keyPath: "key" });
    }
}



function addObject() {
    text = document.querySelector('#text-area').value;
    // Create a transaction in my database "data" with the mode readwrite
    let transaction = bd.transaction(["data"], "readwrite");
    // I create a data warehouse inside the database to store the entered data
    let store = transaction.objectStore("data");
    // Add the object inside the store indicating a key field like "primary key" in databases we know
    let objectAdd = store.add({ key: text });

    objectAdd.addEventListener("success", printObject);

    // Reset the enter information
    document.querySelector('#text-area').value = "";

}

window.addEventListener("load", InicIndexDB);

///////////////////////////////////////////////////////////////////////////////////////////////////////
// These functions are only to show the data saved on the screen
function printObject() {
    document.querySelector("#section-result").innerHTML = "";
    // I create a read-only transaction because I just want to display info
    let transaction = bd.transaction(["data"], "readonly");
    let store = transaction.objectStore("data");
    // I open a cursor to place it inside the object store and  listen for a new event
    let cursor = store.openCursor();
    cursor.addEventListener("success", printData);
}

function printData(e) {
    let cursor = e.target.result;

    if(cursor){
        document.querySelector("#section-result").innerHTML += "<div> - " + cursor.value.key + "</div>";
        cursor.continue();
    }
}   


//////////////////////////////////////////// Save content with localStorage ///////////////////////////
function Save() {

    text = document.querySelector('#text-area').value;
    if (typeof (Storage) !== "undefined") {
        localStorage.setItem('text', text);
        console.log("Saved content in a localStorage!");
    } else {
        console.log("Sorry! No Web Storage support..");
    }
}

function Remove() {
    if (typeof (Storage) !== "undefined") {
        if (localStorage.getItem('text')) {
            localStorage.removeItem('text');
            console.log("Storage space has been freed");
        }
    } else {
        console.log("Sorry! No Web Storage support..");
    }
}
