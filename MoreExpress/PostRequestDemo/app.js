var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var friends = ["Brandon", "Andy", "Matt", "Jasmine", "Max"];

app.get("/", function(req, res){
    res.render("home");
})

app.post("/addfriend", function(req, res){
    var newFriend = (req.body.newfriend);
    friends.push(newFriend);
    res.redirect("/friends");
})

app.get("/friends", function(req, res){
    res.render("friends", {friends: friends});
})

app.get("*", function(req, res){
    res.render("Page is not found");
})

app.listen(3000, function(){
    console.log("listening on port 3000");
})