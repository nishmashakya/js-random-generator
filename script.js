let userInput = document.getElementById("userInput");
let enterButton = document.getElementById("enterButton");
let outputText = document.getElementById("outputText");

let cities = ["NYC", "Paris", "London", "Dubai", "Tokyo", "Rome", "Las Vegas", "Barcelona",
	"Cancún", "Madrid", "Jakarta", "Buenos Aires", "Mexico City", "Geneva"];

enterButton.addEventListener("click", function() {
	let currInput = userInput.value;
	generator(currInput);
	restyle();
});


//  generator function 
// input: user input
// output: randomly generated response using array
function generator(incUserInput) {
	// get random number to index array
	let randIndex = Math.floor(Math.random() * cities.length);
	// console.log(randIndex)
	let randCity = cities[randIndex];
	// set the output using generated value
	outputText.innerHTML = incUserInput + ", your next travel destination is: <span id='city'>" + randCity + "</span>";
}


let fonts = ["'Great Vibes', cursive",
	"'Rubik Scribble', system-ui", 
	"'Indie Flower', cursive", 
	"'VT323', monospace",
	"'Cinzel', serif"];

let pastels = ["#EEF5FF", "#B4D4FF", "#DEFCF9", "#FFEAFE", "#F8F9D7", "#FEDEFF",
	"#C5EBAA", "#E1F0DA", "#D0BFFF", "#FFCF96"]

// restyle function
// output: new CSS style to output text (at least 3 css properties)
function restyle() {
	let city = document.getElementById("city");
	// 1. change text background color (random)
	// let randR = Math.random() * 255;
	// let randG = Math.random() * 255;
	// let randB = Math.random() * 255;
	// let randColor = "rgb(" + randR + "," + randG + "," + randB + ")";
	let randColorIndex = Math.floor(Math.random() * pastels.length);
	outputText.style.backgroundColor = pastels[randColorIndex];
	// 2. change text font of output city
	let randFontIndex = Math.floor(Math.random() * fonts.length);
	city.style.fontFamily = fonts[randFontIndex];
	// 3. change text size of output city
	let randSize = Math.floor(Math.random() * 5) + 2;	//bc want minimum to be 2
	city.style.fontSize = randSize+"rem";
}