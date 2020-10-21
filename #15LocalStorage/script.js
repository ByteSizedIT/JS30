const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
let items = JSON.parse(localStorage.getItem('food order')) || [];

const del = document.querySelector('#delete');
const check = document.querySelector('#check');

function addItem(e) {
    e.preventDefault(); //ie default is to send the form to an external source and refresh/reload the page
    const text = this.querySelector('[name=item]').value;
    const item = {
        text, // ES6 shorthand for .... text: text,
        done: false,
    }
    //console.log(this);
    //console.log(item);
    this.reset();
    items.push(item);
    //console.table(items);
    populateList(items, itemsList);
    localStorage.setItem('food order', JSON.stringify(items));
    //console.log(localStorage);
}

function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
        return `
        <li>
            <input type="checkbox" data-index=${i} id="item${i}" ${plate.done? 'checked': ''}>
            <label for="item${i}" >${plate.text} </label>
        </li>
        `;
    }).join("");
    //console.log(platesList.innerHTML);
}

//EVENT DELEGATION
function toggleDone(e) {
    //console.log(e);
    //console.log(e.target);
    if(!e.target.matches('input')) return; //skip this unless it's an input
    //console.group(e.target);
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('food order', JSON.stringify(items));
    // populateList(items, itemsList); // not needed contrary to video
}

function deleteList(e) {
    items = [];
    itemsList.innerHTML = "";
    localStorage.removeItem('food order');
}

if(items.every(item => item.done==true))  {
    check.innerHTML  = 'Uncheck All';
}

function toggleCheck(e) {
    if(items.every(item => item.done==true))  {
        items.forEach(item => {item.done = false})
        check.innerHTML  = 'Check All';
    }
    else {
        items.forEach(item => {item.done = true});
        check.innerHTML  = 'Uncheck All';
    }
    localStorage.setItem('food order', JSON.stringify(items));
    populateList(items, itemsList);
}

populateList(items, itemsList);

addItems.addEventListener('submit', addItem);

//EVENT DELEGATION
itemsList.addEventListener('click', toggleDone);

del.addEventListener('click', deleteList);

check.addEventListener('click', toggleCheck);