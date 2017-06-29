//npm packages
//var url = require(url);=> Not the package we need. Look up why or ask someone
var express = require(express);//node is saying that express is not defined, but clearly express is required here, and installed on the terminal. What's going on?
var path = require(path);
var app = express();
var bodyParser = bodyParser();
var port = 3000;

//Create a basic route that creates proper API.

app.get("/api/:entrants", function(req, res){
	
});
