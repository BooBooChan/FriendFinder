//npm packages
//var url = require(url);=> Not the package we need. Look up why or ask someone
var express = require(express);//node is saying that express is not defined, but clearly express is required here, and installed on the terminal. What's going on?
var path = require(path);
var app = express();
var bodyParser = bodyParser();
var port = 3000;

//Create a basic route that connects html pages to one another and makes navigation feasible.
app.get("/", function(req, res){
	res.sendFile(path.join(__dirname, "home.html"))//This is where the path package comes in.
});
//Why do we have the 2 underscores before dirname? 
app.get("/survey", function(req, res){
	res.sendFile(path.join(__dirname, "survey.html"))
});