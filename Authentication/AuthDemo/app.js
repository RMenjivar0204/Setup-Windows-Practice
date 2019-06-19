var express                 = require("express");
var app                     = express();
var mongoose                = require("mongoose");
var passport                = require("passport");
var bodyParser              = require("body-parser");
var localStrategy           = require("passport-local");
var passportLocalMongoose   = require("passport-local-mongoose");
var User                    = require("./models/user");

mongoose.connect("mongodb://localhost/auth_demo_app", { useNewUrlParser: true});

app.use(require("express-session")({
    secret: "Rusty",
    resave: false,
    saveUninitialized: false
}))
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ==================
// ROUTES
// ==================

app.get("/", function(req, res){
    res.render("home");
});

app.get("/secret", isLoggedIn, function(req, res){
    res.render("secret");
});

// ==================
// AUTH ROUTES
// ==================

// show sign up form
app.get("/register", function(req, res){
    res.render("register");
});

// handling user sign up
app.post("/register", function(req, res){
    req.body.username
    req.body.password
    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function(){
            res.redirect("/secret");
        })
    });
});

// ====================
// LOGIN ROUTES
// ====================

// render login form
app.get("/login", function(req, res){
    res.render("login");
});

// login logic
// middleware
app.post("/login", passport.authenticate("local", {
    successRedirect: "/secret",
    failureRedirect: "/login"
}), function(req, res){
});

app.get("/logout", function(req, res){
    req.logout();
    res.redirect("/");
});

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
};




app.listen(3000, function(){
    console.log("Now listening on Port 3000");
});