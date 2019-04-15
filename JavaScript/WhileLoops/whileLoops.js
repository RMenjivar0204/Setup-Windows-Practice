//Print all numbers between -10 and 19
console.log("PRINT ALL NUMBERS BETWEEN -10 AND 19");
var first = -10;

while (first <= 19) {
    console.log(first);
    first+=1;
}
//Print all even numbers between 10 and 40
console.log("PRINT ALL EVEN NUMBERS BETWEEN 10 AND 40");
var second = 10;

while (second <= 40) {
    console.log(second);
    second+=2;
}

//Print all even numbers between 300 and 333
console.log("PRINT ALL ODD NUMBERS BETWEEN 300 and 333");
var third = 300;

while (third <= 333) {
    if (third % 2 !== 0){
        console.log(third);
    }
    third+=1;
}

//Print all numbers divisible by 5 AND 3 between 5 and 50
console.log("PRINT ALL NUMBERS DIVISIBLE BY 5 AND 3, BETWEEN 5 AND 50")
var fourth = 5;

while (fourth <= 50) {
    if (fourth % 3 === 0 && fourth % 5 === 0) {
        console.log(fourth);
    }
    fourth+=1;
}