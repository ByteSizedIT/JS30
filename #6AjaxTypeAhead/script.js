const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function findMatches(searchTerm, cities) {
    return cities.filter(place => {
        const searchReg = new RegExp(searchTerm, 'gi');
        return place.city.match(searchReg) || place.state.match(searchReg)
    });
}

function displayMatches() {
    const matches = findMatches(this.value, cities);
    const searchReg = new RegExp(this.value, 'gi');
    const html = matches.map(place => {
        const cityName = place.city.replace(searchReg, `<span class="hl">${this.value}</span>`);
        const stateName = place.state.replace(searchReg, `<span class="hl">${this.value}</span>`);
        return `
            <li>
                <span class="name">${cityName}, ${stateName}</span>
                <span class="population">${numberWithCommas(place.population)}</span>
            </li>
        `;
    }).join("");
    suggestions.innerHTML = html;
}

searchInput.addEventListener('keyup', displayMatches);