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

app.get("/r/:subRedditName", function(req, res){
    var subReddit = req.params.subRedditName;
    res.send("WELCOME TO THE " + subReddit.toUpperCase() + " SUBREDDIT!!!");
})

app.get("/r/:subRedditName/comments/:id/:title", function(req, res){
    console.log(req.params);
    res.send("WELCOME TO THE COMMENTS SECTION");
})

app.listen(3000, function(){
    console.log("Connected to Port 3000")
});