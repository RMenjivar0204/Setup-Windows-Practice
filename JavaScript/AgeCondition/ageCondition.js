var age = Number(prompt("What is your age?"));

while (isNaN(age)) {
    age = Number(prompt("Please enter a number. What is your age?"))
}
    //Get age and convert it to a Number (prompt always returns a String)
    if (age < 0) {
        console.log("Error");
    }

    //If age is 21
    if (age === 21) {
        console.log("Happy 21st Birthday!!");
    }

    //If age is odd
    //(not evenly divisible by two)
    if (age % 2 !== 0) {
        console.log("Your age is odd!");
    }

    //If age is a perfect square
    if (age % Math.sqrt(age) === 0){
        console.log("Your age is a Perfect Square!")
    }