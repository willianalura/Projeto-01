# Projeto 01
function setup() {
  createCanvas(600, 600);
  background("white");
}

function draw() {
  
  stroke("yellow");
  fill("black");

  // console.log(mouseIsPressed)

  if (mouseIsPressed) {
    rect(mouseX, mouseY, 20, 35);
  }
}
