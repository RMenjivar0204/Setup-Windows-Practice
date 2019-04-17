// Write a function isEven() which takes a single numeric argument and returns true if the number is even, false otherwise
function isEven(number) {
    if (number % 2 === 0) {
        return "True"
    }
    else {
        return "False"
    }
}


// Write a function factorial() which takes a single numeric argument and returns the factorial of that number
function factorial(number) {
    var result = 1;
    for (var i = 2; i <= number; i++) {
        result *= i;
    }
}


//Write a function kebabToSnake() which takes a single kebab-cased string argument and returns the snake_cased version
function kebabToSnake(str) {
    var newStr = str.replace(/-/g, "_");
    return newStr;
}

