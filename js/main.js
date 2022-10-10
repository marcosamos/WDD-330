let links = [
    {
        label: "Week1",
        url: "https://marcosamos.github.io/wdd330/week1/index.html"
    },
    {
        label:"week2",
        url: "https://marcosamos.github.io/wdd330/week2/index.html"
    },
    {   label:"week3",
        url: "https://marcosamos.github.io/wdd330/week3/index.html"
    },
    {   label:"week4",
        url: "https://marcosamos.github.io/wdd330/week4/index.html"
    },
    {   label:"week5",
        url: "https://marcosamos.github.io/wdd330/week5/index.html"
    }
];

let list = document.getElementById("myList"); //get the ul element 

links.forEach(item => {
    // create the element li and add to the HLML
    let li = document.createElement("li");
    list.appendChild(li);
    //create the element a and set the atributes and add to the html
    let a = document.createElement("a");
    let linkText = document.createTextNode(item.label);
    a.appendChild(linkText);
    a.title = item.label;
    a.href = item.url;
    li.appendChild(a);
});