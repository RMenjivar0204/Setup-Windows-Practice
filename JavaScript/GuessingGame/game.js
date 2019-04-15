//Create secret number
var secretNumber = 4;

//ask for guess
var guess = Number(prompt("What's the secret number?"));

//check guess
while(isNaN(guess)) {
    guess = (prompt("Please enter a number. What's the secret number?"));
}
    if(guess === secretNumber) {
        console.log("You got it!");
    }
    else if (guess < secretNumber) {
        console.log("Check Higher.");
    }
    else {
        console.log("Check Lower.")
    }