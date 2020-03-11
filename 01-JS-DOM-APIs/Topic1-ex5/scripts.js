
const botton = document.querySelector('#btn');

const content = ["Club", "Pts", "g/f", "g/c"]; // Content of the header

const matrix = [
    ["Boca", "River", "Racing", "Velez"],
    [48, 47, 39, 39],
    [35, 41, 27, 28],
    [8, 18, 14, 23]];

const headContent = () => { // Create the header row using data in -> content
    let t_row = document.createElement('tr');
    for (let i = 0; i < content.length; i++) {
        let th = document.createElement('th');
        value = document.createTextNode(content[i]);
        th.appendChild(value);
        t_row.appendChild(th);
    }
    let thead = document.querySelector('#thead');
    thead.appendChild(t_row);
}

const createTableRow = (tbody) => {  // Create all the <td> of the tbody 
    let row = 0;
    let col = 0;
    console.log(tbody);
    let value;
    for (let r = 0; r < matrix.length; r++) {

        let t_row = document.createElement('tr');
        for (let c = 0; c < matrix[r].length; c++) {
            let td = document.createElement('td');
            value = document.createTextNode(matrix[c][r]);
            td.appendChild(value);
            t_row.appendChild(td);
        }

        tbody.appendChild(t_row);
    }
}

const footContent = () => {
    let tfoot = document.querySelector('#tfoot');
    let td = document.createElement('td');
    let text = document.createTextNode("Created by: Ezequiel Rebasa");
    const att_td = document.createAttribute('colspan');
    att_td.value = content.length;
    tfoot.setAttributeNode(att_td);
    td.appendChild(text);
    tfoot.appendChild(td);
}

const createTable = () => { // Within it the main elements of the table
    
    let container = document.querySelector('.table-div'); 

    const table = document.createElement('table');
    const att_table = document.createAttribute('id');      // Create a "class" attribute
    att_table.value = "table";                 // Set the value of the class attribute
    table.setAttributeNode(att_table);

    const caption = document.createElement('caption');

    const thead = document.createElement('thead');
    const att_thead = document.createAttribute('id');
    att_thead.value = "thead";
    thead.setAttributeNode(att_thead);


    const tbody = document.createElement('tbody');
    const att_tbody = document.createAttribute('id');
    att_tbody.value = "tbody";
    tbody.setAttributeNode(att_tbody);

    const tfoot = document.createElement('tfoot');
    const att_tfoot = document.createAttribute('id');
    att_tfoot.value = "tfoot";
    tfoot.setAttributeNode(att_tfoot);

    table.appendChild(caption);
    table.appendChild(thead);
    table.appendChild(tbody);
    table.appendChild(tfoot);

    table.children[0].innerHTML = '<h2> Superliga </h2>';
    createTableRow(tbody);
    container.appendChild(table);

}

const superliga = () => {
    let table = document.querySelector('#table');
    if(!table){
        if (matrix) {
            createTable();
        } else {
            alert("Sorry there was an error");
        }
        headContent();
        footContent();
        let tbody = document.querySelector('#tbody');
        let tfoot = document.querySelector('#tfoot');
        tfoot.children[0].innerHTML = "<sub>Created by: Ezequiel Rebasa </sub>"
        tbody.children[0].style.background = 'blue';
    }
    
}

botton.addEventListener('click', superliga);
let thead = document.querySelector('#thead');




