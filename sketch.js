// P5 STUFF
//create variables for each of the aliens
//how do i get this to be a game?? missing loads of information

var img;
var type1;
var type2;
var type3;
var gun;

function preload() {
  img = loadImage("img/space.jpg");
  type1 = loadImage("img/type1.png");
  type2 = loadImage("img/type2.png");
  type3 = loadImage("img/type3.png");
  gun = loadImage("img/gun.png");
}

function setup() {
	createCanvas(906, 530);
	background('black');
	image(img, 0, 0);

	image(type1, 200, 200);
	image(type2, 400, 200);
	image(type3, 600, 200);
	image(gun, 400, windowHeight/1.5);

	rect(30, 30, 200, 55); //would like to place the score and number of lives here

	// myX = windowWidth;
	// myY = windowHeight;
	// myAlien = new Alien();
}

function draw() {

	fill(type1);
	type1.display();
	type1.move();

	fill(type2);
	type2.display();
	type2.move();

	fill(type3);
	type3.display();
	type3.move();

	fill(gun);
	gun.display();
	gun.move();
	
	//send drawing each time draw loops 
	//pass in value as a JSON object
	sendDrawing({
		'x':myX,
		'y':myY,
	});
}

//send drawing data as x,y of type1, type2, type3
function sendDrawing(message){
	socket.emit('drawing', message);
	console.log(message);
}

function drawOther(someX, someY){
	fill(type1);
	this.x = someX;
	this.y = someY;

	fill(type2);
	this.x = someX;
	this.y = someY;

	fill(type3);
	this.x = someX;
	this.y = someY;

	fill(gun);
	this.x = someX;
	this.y = someY;
}

//making the aliens move (hopefully) -->>> SOS this doesn't work
function Alien(){

	this.x = x;
	this.y = y;
	this.width = 100;
	this.height = 100;

	this.move = function(){
		if(keyIsDown(LEFT_ARROW)){
			if(myX > ( (windowWidth/8)+2)){
				myX-=2;
			}
		}
		if(keyIsDown(RIGHT_ARROW)){
			if(myX < ((2*(windowWidth/8))+ (windowWidth/6)-30)){
				myX+=2;
			}
		}
		if(keyIsDown(UP_ARROW)){
			if(myY > 0){
				myY-=2;
			}
		}
		if(keyIsDown(DOWN_ARROW)){
			if(myY < windowHeight - ((windowHeight/5)-6)){
				myY+=2;
			}
		}
	}

	this.display = function(){
		fill(type1, type2, type3);
	}
}