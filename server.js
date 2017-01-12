//Friend Finder Server
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
/*const admin = require('./admin');*/
const app = express();

var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static('public'));

app.get("/", function(request, response){
	"use strict";
	console.log("Welcome Home.");
	response.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/survey", function(request, response){
	"use strict";
	console.log("Data of all I survey.");
	response.sendFile(path.join(__dirname, "/public/survey.html"));
});

app.get("/results", function(request, response){
	"use strict";
	console.log("I get results.");
	response.sendFile(path.join(__dirname, "/public/results.html"));
});

app.listen(PORT, () => {
	"use strict";
  console.log('Server up on port: ', PORT);
});
