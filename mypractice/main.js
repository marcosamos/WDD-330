import { hikeList } from "./hikes.js";

const hikeListHtml = document.getElementById("hikes");

const imgBasePath = "//byui-cit.github.io/cit261/examples/";

hikeList.forEach (item => {
    // create the element h2 and add to the HLML
    let h2Html = document.createElement("h2");
    hikeListHtml.appendChild(h2Html);


    // added the name's hikes
    let nameText = document.createTextNode(item.name);
    h2Html.appendChild(nameText);

    
    // added the distance's hikes
    let pHtml = document.createElement("p");
    hikeListHtml.appendChild(pHtml);
    let distanceText = document.createTextNode(item.distance);
    pHtml.appendChild(distanceText);
    
    // added the difficulty's hikes
    let pHtml2 = document.createElement("p");
    hikeListHtml.appendChild(pHtml2);
    let difficultyText = document.createTextNode(item.difficulty);
    pHtml2.appendChild(difficultyText);
    // added the description's hikes
    let pHtml3 = document.createElement("p");
    hikeListHtml.appendChild(pHtml3);
    let descriptionText = document.createTextNode(item.description);
    pHtml3.appendChild(descriptionText);
    // added the direction's hikes
    let pHtml4 = document.createElement("p");
    hikeListHtml.appendChild(pHtml4);
    let directionsText = document.createTextNode(item.directions);
    pHtml4.appendChild(directionsText);
})

