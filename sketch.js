function setup() {
  createCanvas(400,400);
  background(0);
}

function draw() {
	noStroke();
	fill(random(0,180),0,random(0,180),random(0,180));
	ellipse(random(0,400),random(0,400),40,40);
}
