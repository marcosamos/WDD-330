const requestURL = 'https://swapi.dev/api/people/'
let cards = document.querySelector(".cards");
let nextbtn = document.querySelector(".next");
fetch(requestURL)
    .then(response => response.json())
    .then(function (jsonObject) {
        console.log(jsonObject);
        const peoples = jsonObject.results;
        peoples.forEach(displayPeoples);
        
        function clicknext(jsonObject){
            jsonObject.next();
        }

});

function displayPeoples(peoples){
    let card = document.createElement('section');
    let peopleName = document.createElement('h1');
    peopleName.textContent = `${peoples.name}`;
    card.appendChild(peopleName);
    cards.appendChild(card)
}