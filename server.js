//First, install the npm packages necessary for this project.
var express = require(express);//node is saying that express is not defined, but clearly express is required here, and installed on the terminal. What's going on?
var path = require(path);
var app = express();
var bodyParser = bodyParser();
var port = 3000;

//Now, make the apparition parse everything. Why does it need to parse this data?
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.text());
console.log(app.use(bodyParser.urlencoded()));//A test. Except the test isn't working either.
//So why do we need to bodyParse the json if it's already parsed, as in, it's already an object?
//How does bodyParser know what to parse into what? What was the data looking like before it was parsed?
//Why can the backend js only read objects?
//

app.listen(port, function(){
	console.log("App is listening on port 3000", port);
});


