let links = [
    {
        label: "Activity week1",
        url: "https://marcosamos.github.io/wdd330/week1/story_editor.html"
    }
];


let list = document.getElementById("myList"); //get the ol element 

links.forEach(item => {
    let title = document.createElement("li");
    let li = document.createElement("li");
    title.innerText = item.label;
    li.innerText = item.url;
    list.appendChild(title);
    list.appendChild(li);
});