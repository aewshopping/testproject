var i=0;
var speed =0.03;
var damp=1

function setup(){
  createCanvas(600,400);
  background(200);
}

function draw(){
  background(200);
  
  i+=speed;
  
  translate(200,400);
  rotate(sin(i)/damp);
  stroke("green");
  strokeWeight(20);
  line(0,0,0,-150);

damp = damp *(1.003);  
}
  
function mousePressed(){
  i=asin(sin(i)/damp);
  damp=1;
}
