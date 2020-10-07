const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

const p = document.querySelector('p');

function makeGreen() {
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

p.addEventListener('click', makeGreen);

// Regular
console.log('hello');

// Interpolated
console.log('I am a %s string', '💩');
console.log(`I am a ${p}`)

// Styled
console.log('%c I am stylish', 'font-size: 50px; color: red; background: yellow; text-shadow: 10px 10px 5px blue')

// warning!
console.warn('Oh noo!');

// Error :
console.error('Oh 💩!');

// Info
console.info('crocodiles it 3-4 people per year');

// Testing only fires if wrong
console.assert(1===2, 'you cannot add up!!');
console.assert(p.classList.contains('ouch'), 'and the survey says XXX!!');

// clearing
//console.clear(); - clears forward as well as back in safari - unlike chrome

// Viewing DOM Elements
console.log(p);  //logs the element(paragraph)
console.dir(p)   //logs the methods and properties on the element

// Grouping together
dogs.forEach(dog => console.log(`This is a ${dog.name}`));

dogs.forEach(dog => {
    console.log(`This is a ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
});

dogs.forEach(dog => {
    console.group(`${dog.name}`); // or console.groupCollapsed(`${dog.name}`); to default collapese the groups when run
    console.log(`This is a ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);
});

// counting
console.count('Leo');
console.count('Leo');
console.count('Neville')
console.count('Leo');
console.count('Leo');
console.count('Leo');
console.count('Neville')
console.count('Neville')
console.count('Neville')
console.count('Leo');
console.count('Neville')
console.count(p);

// timing
console.time('fetchdata')
const endpoint = 'https://gist.githubusercontent.com/ByteSizedIT/f71002951af1e7ad2beff8615ec43eb6/raw/9026a039c9d0fce2431564a6a49cf14ba0a4cb2a/gistfile.json';

fetch(endpoint)
    .then(response => response.json())
    .then(response => {
        console.timeEnd('fetchdata');
        console.log(response);
    });

console.table(dogs);
