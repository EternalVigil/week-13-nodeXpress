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

app.listen(PORT, () => {
	"use strict";
  console.log('Server up on port: ', PORT);
});
