function pickColor() {

	return colors[Math.floor(Math.random() * colors.length)];

}

function generateRandomColors(num) {

	var arr = [];
	for(var i = 0; i < num; i++) {

		arr.push(randomColor());

	}
	return arr;

}

function randomColor() {

	//pick a "red" from 0 - 255
	red = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	green = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	blue = Math.floor(Math.random() * 256);

	return "rgb(" + red + ", " + green + ", " + blue + ")";

}

function addColorToSquares() {

	for(var i = 0; i < squares.length; i++) {

		squares.eq(i).css("background-color", colors[i]);

	}

}

var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = $(".square");
var pickedColor = pickColor();
var colorDisplay = $("colorDisplay");

$("#colorDisplay").text(pickedColor);

addColorToSquares();

$(".square").click(function() {

	clickedColor = $(this).css("background-color");

	if (pickedColor === clickedColor) {

		$("#message").text("Correct");
		$(".square").css("background-color", clickedColor);
		$("#reset").text("Play Again");
		$("h1").css("background-color", pickedColor);

	} else {

		$(this).css("background-color", "#232323");
		$("#message").text("Try Again");

	}

});

$("#reset").click(function() {

	if ($(this).text() == "Play Again") {

		$(this).text("New Colors");

	}
	$("#message").text("");
	$("h1").css("background-color", "steelblue");
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked colors
	$("#colorDisplay").text(pickedColor);
	//change colors of all squares.
	addColorToSquares();

});

$("#easyBtn").click(function() {

	$("#easyBtn").addClass("selected");
	$("#hardBtn").removeClass("selected");
	$("h1").css("background-color", "steelblue");
	$("#reset").text("NEW COLORS");
	$("#message").text("");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	$("#colorDisplay").text(pickedColor);
	for(var i = 0; i < squares.length; i++) {

		if (i < 3) {

			squares.eq(i).css("background-color", colors[i]);

		} else {

			squares.eq(i).css("display", "none");

		}

	}

});

$("#hardBtn").click(function() {

	$("#hardBtn").addClass("selected");
	$("#easyBtn").removeClass("selected");
	$("h1").css("background-color", "steelblue");
	$("#reset").text("NEW COLORS");
	$("#message").text("");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	$("#colorDisplay").text(pickedColor);
	for(var i = 0; i < squares.length; i++) {

		squares.eq(i).css("background-color", colors[i]);
		squares.eq(i).css("display", "block");

	}

});