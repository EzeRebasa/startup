const btn = document.querySelector('#btn');
const section = document.querySelector('.section-content');

const getData = () => {
    let jsonContent;
    try{
        fetch("http://api.icndb.com/jokes/random")
            .then(res => res.json())
            .then(json => section.innerHTML = json.value.joke)
    }catch(e){
        console.log(e);
        section.style.backgroundColor = 'red';
    }
}
console.log(section)
btn.addEventListener('click', getData);



