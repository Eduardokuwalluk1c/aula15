function setup() {
  createCanvas(1000, 1000)
  background("yellow");
}

function draw() {
  stroke("orange");
  fill("red");//


if(mouseIsPressed){
  rect(mouseX, mouseY, 40, 40);
}
}