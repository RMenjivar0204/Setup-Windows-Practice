var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.send("Hi There!!!");
});

app.get("/bye", function(req,res) {
    res.send("Goodbye!!!");
})

app.get("/dog", function(req, res) {
    res.send("MEOW!");
})

app.listen(3000, function(){
    console.log("Connected to Port 3000")
});