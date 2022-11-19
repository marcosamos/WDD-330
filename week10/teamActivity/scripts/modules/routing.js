import QuakesController from './QuakesController.js';

const routes = [
    {
        controller: new QuakesController('#quakeList'),
        file: 'views/quakeList.html',
        label: 'Local Quakes'
    },
    {
        controller: new QuakesController('#quakeList', {lat: 44.423691, lon: -110.588516}),
        file: 'views/quakeList.html',
        label: 'Yellowstone Quakes'
    }
];

// function to create a navigation for the items found in routes.
// creates element, add a touchend event listener and appends it to parent
export default function buildNavigation(parent) {
    routes.forEach(route => {
        let item = document.createElement('li');
        item.innerHTML = `<a href="#${route.label}">${route.label}</a>`;
        parent.appendChild(item);
        addNavEventAsync(item, route.file, route.controller);
    });
}

// makes an AJAX request for the html file found at viewPath and returns it as text
async function getViewAsync(viewPath) {
    try {
        const response = await fetch(viewPath);
        const text = await response.text();

        return text;
    } catch (err) {
        console.log('Something went wrong', err);
    }
}

function addNavEventAsync(element, path, controller) {
    element.addEventListener('click', e => {
        insertViewAsync(getViewAsync(path), controller);
    });
}

// inserts the view into the content area of index.html
// remember that getView returns a promise!
// runs a function from the controller to load any dynamic elements
async function insertViewAsync(viewPromise, controller) {
    const contentElement = document.getElementById('content');
    //debugger;
    contentElement.innerHTML = await viewPromise;
    controller.init();
}