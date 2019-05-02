var first = document.getElementById("first");
var second = document.getElementById("second");
var reset = document.getElementById("reset");
var firstScore = 0;
var secondScore = 0;
var span1 = document.getElementById("span1");
var span2 = document.getElementById("span2");
var gameOver = false;
var winningScore = 5;


first.addEventListener("click", function() {
    if(!gameOver) {
        firstScore++;
        if(firstScore === winningScore) {
            gameOver = true;
        }
    span1.textContent = firstScore;
    }
});

second.addEventListener("click", function() {
    if(!gameOver) {
        secondScore++;
        if(secondScore === winningScore) {
            gameOver = true;
        }
    span2.textContent = secondScore;
    }
})

reset.addEventListener("click", function() {
    alert("RESET");
})