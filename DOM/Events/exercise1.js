var button = document.querySelector("button");
var paragraph = document.querySelector("p");
var h1 = document.querySelector("h1");
var ul = document.querySelector("ul");

button.addEventListener("click", function() {
    console.log("YA CLICKED ME");
    paragraph.textContent = "YA CHANGED ME";
})

h1.addEventListener("click", function() {
    h1.style.color = "blue";
    h1.style.background = "yellow";
})

ul.addEventListener("click", function() {
    ul.style.background = "orange";
    console.log("YOU CLICKED THE UL");
});

