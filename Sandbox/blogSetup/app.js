var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var expressSanitizer = require("express-sanitizer");
var mongoose = require("mongoose");

// APP CONFIG

mongoose.connect("mongodb://localhost/blog_setup", {useNewUrlParser: true});
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(expressSanitizer());

// MONGOOSE/MODEL SCHEMA

var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});

var Blog = mongoose.model("Blog", blogSchema);


// RESTFUL ROUTES

app.get("/", function(req, res){
    res.redirect("/blogs");
});


// INDEX ROUTE
app.get("/blogs", function(req, res){
    res.render("index");
});

// NEW ROUTE
app.get("/blogs/new", function(req, res){
    res.render("new");
});

// CREATE ROUTE
app.post ("/blogs", function(req, res){

});

// SHOW ROUTE
app.get("/blogs/:id", function(req, res){

});

// EDIT ROUTE
app.get("/blogs/:id/edit", function(req, res){

});

// UPDATE ROUTE
app.put("/blogs/:id", function(req, res){

});

// DELETE ROUTE
app.delete("/blogs/:id", function(req, res){

});

app.listen(3000, function(){
    console.log("Listening on Port 3000");
})
