var cookie;
let  score = 0;
var cookieX;
var cookieY;
var nf1 = 0, nf2 = 0, nf3 =  0; // number of objects of each class.
let rf1 = 5, rf2 = 10, rf3 = 15;  // % rate of change of each element.
let cf1 = 10, cf2 = 50, cf3 = 100; // these are the buttons, also these 
								  // have a determinate score to turn on.
let frameCounter = 0;

// button 1
var button = document.createElement("button");
button.innerHTML = "Rocket";


// Button 2
var button2 = document.createElement("button");
button2.innerHTML = "Grandma";

// Button 3
var button3 = document.createElement("button");
button3.innerHTML = "Farm";


// The setup() function runs when the program starts.
function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate(30);

	cookie = loadImage("cookie.png");

	// Iniciar el contador.
	//score = 0;

	// Ubicación de la cookie.
	cookieX = windowWidth/2 - 200;
	cookieY = windowHeight/2 - 200;

	// Creating a button.

	// button 1. Append somewhere
	var body = document.getElementsByTagName("body")[0];
	body.appendChild(button);


	// button 2. 
	var body2 = document.getElementsByTagName("body")[0];
	body2.appendChild(button2);

	// button 3.
	var body3 = document.getElementsByTagName("body")[0];
	body3.appendChild(button3);


		// Creacion de los 5 botonos de upgrades
		// for i = 0 hasta 5
		//    crear boton i-esimo

}

	// button 1, listener
	button.addEventListener ("click", function(){
 	scoring1();

});


 	// button 2, listener 
	button2.addEventListener ("click", function(){
 	scoring2();

});
 	// button 3, listener
	button3.addEventListener ("click", function(){
 	scoring3();

});


	function scoring1(){
		console.log("Rocket");
	if (score >= cf1){
		score = score - cf1;
		cf1 = int(1.1 * cf1);
		nf1 = nf1 + 1
		}
	}

	function scoring2(){
		console.log("Grandma");
	if (score >= cf2){
		score = score - cf2;
		cf2 = int(1.1 * cf2);
		nf2 = nf2 + 1
		}
	}

	function scoring3(){
		console.log("Farm");
	if (score >= cf3){
		score = score - cf3;
		cf3 = int(1.1 * cf3);
		nf3 = nf3 + 1
		}
	}




function draw(){
	frameCounter++;
	if (frameCounter > 30){frameCounter = 0}
		if (frameCounter === 0){
			score += rf1 * nf1;
//		}

//		if (frameCounter === 0){
			score += rf2 * nf2;
//		}
//		if (frameCounter === 0){
			score += rf3 * nf3;
		}

	// if we have a factory (lvl 1 - 5)
	// every second -> frameCounter == 0, add to the score the appropiate amount of points
	// e.g. 2 lvl1, 1 lvl 2 => score += rateFactory1 * nFactory1 + ...
	
	// cookie location. 
	background(100);
	image(cookie, cookieX, cookieY, 300, 300);
	textSize(50);
	text(score, 50, 50);
	//console.log(frameCounter)


}

// The mousePressed() function is called once after every time a mouse button is pressed.
function mousePressed() {
	if (mouseX > cookieX &&
		 mouseX < cookieX + 400 &&
		 mouseY > cookieY &&
		 mouseY < cookieY + 400) {
		score++;
	}
}


