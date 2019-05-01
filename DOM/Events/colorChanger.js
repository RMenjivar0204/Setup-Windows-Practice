//Change the background color in between White and Purple

var button = document.querySelector("button");
var body = document.querySelector("body");
var isPurple = false;

button.addEventListener("click", function() {
    if(isPurple) {
        body.style.background = "white";
        isPurple = false;
    }
    else {
        body.style.background = "purple";
        isPurple = true;
    }
})


//OTHER OPTION//

// button.addEventListener("click", function() {
//     button.style.classList.toggle("purple");
// })
