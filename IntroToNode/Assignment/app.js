var express = require("express");
var app = express();


app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal/", function(req, res){
    var animal = req.params.animal.toLowerCase();

    var sound = ""

    if(animal === "pig"){
        var sound = "'Oink'";
    }
    else if(animal === "cow"){
        var sound = "'Moo'";
    }
    else if(animal === "dog"){
        var sound = "'WOOF'";
    }
    else if(animal === "bird"){
        var sound = "'cheep'";
    }
    else if(animal === "cat"){
        var sound = "'meow'";
    }

    res.send("The " + animal + " says " + sound);
});

app.get("/repeat/:message/:times", function(req, res){
    var message = req.params.message;
    var times = Number(req.params.times);
    var result = "";

    for(var i = 0; i < times; i++){
        result += message + " ";
    }
    res.send(result);
})

app.get("*", function(req, res){
    res.send("Sorry, page not found...What are you doinf with your life?");
});


app.listen(3000, function(){
    console.log("Listening on Host 3000");
});
