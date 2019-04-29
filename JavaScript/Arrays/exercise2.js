//Write a function printReverse() that takes an array as an argument and prints out the elements in the array in reverse order (don't actually reverse the array itself)

function printReverse(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

//Will Print Reversed
printReverse([3,6,2,5]);

//Write a function isUniform() which takes an array as an argument and returns true if all elements in the array are identical

function isUniform(array) {
    var first = arr[0];
    for(var i = 0; i < arr.length; i++) {
        if (arr[i] !== first) {
            return false;
        }
    }
    return true;
}

//^^NOTE: Didn't use forEach because it would only run the first function^^





//Write a function sumArray() that accepts an array of numbers and returns the sum of all numbers in the array

function sumArray() {
    var total = 0;
    arr.forEach(function(element) {
        total += element;
    })
    return total;
}

//Write a function max() that accepts an array of numbers and returns the maximum number in the array

function max(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}