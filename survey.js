// JavaScript Document
var userBase = [];
surveyInput();

function surveyInput() {
	"use strict";
	var answers = [];
	var userName = $("#userName").val().trim();
	var imageLink = $("#imgLink").val().trim();
	for (var i = 1; i < 11; i++) {
		var counter = "question" + i;
		var answer = ($("#" + counter).val());
		answers.push(answer);

	}
	console.log(answers);
	var profile = new Profile(userName, imageLink, answers);
	userBase.push(profile);
}

function Profile(name, picture, answers){
	"use strict";
	this.name = name;
	this.picture = picture;
	this.answers = answers;
}
