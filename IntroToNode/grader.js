function average(arr){
    //add all scores together
    var total = 0;
    arr.forEach(function(arr){
        total += arr;
    });
    //divide by total number of scores
    var avg = total/arr.length;
    //round average
    return Math.round(avg);
}

var scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores)); //should return 94

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(average(scores2)); //should return 68