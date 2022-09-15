let links = [
    {
        label: "week1 notes",
        url: "week1/index.html"
    },
    {
        label: "Activity week1",
        url: "story_editor"
    }
];


let list = document.getElementById("myList"); //get the ol element 

links.forEach(item => {
    let li = document.createElement("li");
    li.innerText = item.label;
    li.innerText = item.url;
    list.appendChild(li);
});