var mongoose = require("mongoose");

// SCHEMA SETUP
var CommentSchema = mongoose.Schema({
    text: String,
    author: String
});

module.exports = mongoose.model("Comment", CommentSchema);