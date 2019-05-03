var first = document.getElementById("first");
var second = document.getElementById("second");
var reset = document.getElementById("reset");
var numInput = document.querySelector("input");
var firstScore = 0;
var secondScore = 0;
var span1 = document.getElementById("span1");
var span2 = document.getElementById("span2");
var pointValue = document.getElementById("pointValue");
var gameOver = false;
var winningScore = 5;


first.addEventListener("click", function() {
    if(!gameOver) {
        firstScore++;
        if(firstScore === winningScore) {
            span1.classList.add("winner");
            gameOver = true;
        }
    span1.textContent = firstScore;
    }
});

second.addEventListener("click", function() {
    if(!gameOver) {
        secondScore++;
        if(secondScore === winningScore) {
            span2.classList.add("winner");
            gameOver = true;
        }
    span2.textContent = secondScore;
    }
})

reset.addEventListener("click", function() {
    resetButton();
})

function resetButton() {
    firstScore = 0;
    secondScore = 0;
    span1.textContent = 0;
    span1.classList.remove("winner");
    span2.textContent = 0;
    span2.classList.remove("winner");
    gameOver = false;
}

numInput.addEventListener("change", function() {
    pointValue.textContent = this.value;
    winningScore = Number(this.value);
    resetButton();
})