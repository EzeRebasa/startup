
const text = document.querySelector('#input');
const btn = document.querySelector('#btn');
const btn_clear = document.querySelector('#btn-clear');
const ul = document.querySelector('#ul');

const addLi = (item) => {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));
    ul.appendChild(li);
}


const getData = () => {
    if ((ul.lastElementChild != null)) {      //Clear screen before displaying the results
        while (ul.lastElementChild != null) { //
            ul.lastElementChild.remove();     //
        }
    }
    fetch("https://api.github.com/search/repositories" + "?q=" + text.value)
        .catch(e => alert("Non-existents Repositories"))
        .then(res => res.json())
        .then(json => {
            json.items.map(item => addLi(item.owner.url))
        })
}




btn.addEventListener('click', getData);



