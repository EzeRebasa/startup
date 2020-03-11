
const text = document.querySelector('#input');
const btn = document.querySelector('#btn');
const ul = document.querySelector('#ul');

const addLi = (item) => {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));
    ul.appendChild(li);
}

const clearScreen = () => { //Clear screen before displaying the results
    if (ul.lastElementChild) {
        while (ul.lastElementChild != null) {
            ul.lastElementChild.remove();
        }
    }
}

const getData = () => {

    clearScreen();

    fetch("https://api.github.com/search/repositories" + "?q=" + text.value)
        .catch(e => alert("Non-existents Repositories"))
        .then(res => res.json())
        .then(json => {
            json.items.map(item => addLi(item.owner.url))
        })
}




btn.addEventListener('click', getData);



