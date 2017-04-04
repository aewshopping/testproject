var xsize = windowWidth;
var ysize = windowHeight;

function setup() {
  createCanvas(xsize,ysize);
  background(0);
}

function draw() {
  fill(random(0,180),0,random(0.180));
  ellipse(random(0,xsize),random(0,ysize),40,40, random(50,180));
}
