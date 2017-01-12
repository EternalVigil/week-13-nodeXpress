// JavaScript Document

$.ajax({
	method: "GET",
	url: "/api/new",
	dataType: "json"
}).done(function (data) {
	"use strict";
	var bestMatch = 0;
	var profileCompareScore = 0;
	var compatibleScore = 40;
	var lastIndex = data.length - 1;
	console.log(data[lastIndex]);

	for (var i = 0; i < data.length - 2; i++) {
		profileCompareScore = 0;
		for (var j = 0; j < 10; j++) {
			profileCompareScore += data[lastIndex].answers[j] - data[i].answers[j];
		}
		Math.abs(profileCompareScore);

		if (profileCompareScore < compatibleScore) {
			bestMatch = i;
		}
	}
	
	$("#bestMatchName").val(data[bestMatch].name);
	$("#profileImage").attr("src", data[bestMatch].imgLink);
	$("#compareScore").val(compatibleScore);
});
