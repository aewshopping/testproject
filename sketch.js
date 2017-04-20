var i=0;
var speed =1;

function setup(){
  createCanvas(600,400);
  background(200);
}

function draw(){
  background(200);
  
  i+=0.03;
  
  translate(200,400);
  rotate(sin(i)/i);
  stroke("green");
  strokeWeight(20);
  line(0,0,0,-150);

}
  
  
