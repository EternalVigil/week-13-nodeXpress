//Friend Finder Server
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

var PORT = 3000;

var profileDatabase = [{
	name: "Sol Badguy",
	imgLink: "http://static.giantbomb.com/uploads/square_medium/2/21992/855558-holyordersol.gif",
	answers:[1,2,3,4,5,4,3,2,1,2]
}];

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

app.get("/api/new", function(request, response){
	"use strict";
	response.json(profileDatabase);
});

app.post("/api/new", function(request, response){
	"use strict";
	var newProfile = request.body;
	console.log(newProfile);
	profileDatabase.push(newProfile);
	response.send("Data received");
});

app.get("/results", function(request, response){
	"use strict";
	console.log("I get results.");
	response.sendFile(path.join(__dirname, "/public/results.html"));
});

app.get("/api", function(request, response){
	"use strict";
	response.sendFile(path.join(__dirname, "/public/api.js"));
});

app.listen(PORT, () => {
	"use strict";
  console.log('Server up on port: ', PORT);
});
