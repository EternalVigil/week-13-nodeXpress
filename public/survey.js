// JavaScript Document
console.log("JS ONLINE");
$("#submitButton").on("click", surveyInput);

$("#resetButton").on("click", clearForm);

function surveyInput() {
	"use strict";
	var answers = [];
	var userName = $("#userName").val().trim();
	var imageLink = $("#imgLink").val().trim();
	for (var i = 1; i < 11; i++) {
		var counter = "question" + i;
		var answer = ($("#" + counter).val());
		answer = parseInt(answer.charAt(0));
		console.log(answer);
		answers.push(answer);
	}

	var profile = new Profile(userName, imageLink, answers);
	$.post("http://localhost:3000/api/new", profile)
	.done(function(data){
		console.log(data);
	});
return false;
}

function Profile(name, picture, answers) {
	"use strict";
	this.name = $("#userName").val();
	this.picture = picture;
	this.answers = answers;
}

function clearForm() {
	"use strict";
	console.log("Wipe the board clean.");
	$("#userName").val("");
	$("#imgLink").val("");
	$(".question").val("*");
}
