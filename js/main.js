let links = [
    {
        label: "Week1",
        url: "https://marcosamos.github.io/wdd330/week1/index.html"
    }
];

let list = document.getElementById("myList"); //get the ul element 

links.forEach(item => {
    let li = document.createElement("li");
    list.appendChild(li);
    let title = document.createElement("a");
    title.setAttribute("href",item.url);
    let aTexto = document.createTextNode(item.label);
    li.appendChild(aTexto);
    li.appendChild(title);
});