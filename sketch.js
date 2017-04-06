function setup() {
createCanvas(windowWidth,windowHeight);
background(0);
}

function draw() {
noStroke();
fill(random(0,120),0,random(0,180),random(0,180));
ellipse(random(0,windowWidth),random(0,windowHeight),40,40);
}
