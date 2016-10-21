// 25 is so that the ball does't bounce off the screen a bit
var x = 25;
var speedX = 4;
var y = 325;
var speedY = 4;
var colour1;
var colour2;
var colour3;
var colour4;
var img;

function setup() {
  
  img = loadImage("crocodileWinking.png");
  img.resize(800,650);
  createCanvas(800, 650);
  background(255);

  // the ball needs a colour
  fill(0, 0, 255);
  // we need a ball
  ellipseMode(RADIUS);
  ellipse(x, y, 50, 50);

}

function draw() {

  colour1 = color(255, 0, 0);
  colour2 = color(0, 255, 130);
  colour3 = color(0, 0, 255);
  colour4 = color(255, 240, 0);

  background(255);

  ellipse(x, y, 50, 50);
  // the ball needs to move
  // this means we need to increment
  x = x + speedX;
  y = y + speedY;
  
  if(mouseX > x - 100 && mouseX < x+50 && mouseY > y - 100 && mouseY < y+50 && mouseIsPressed){
  // if (mouseX < 50 && mouseX > 0 && mouseY < 350 && mouseY > 300 && mouseIsPressed){
    background(img);
  }

  // to make the ball bounce back: if x is bigger than 800, make variable x negative
  if (x > 775) {
    speedX = -speedX;
    fill(colour1);
    ellipse(x, y, 50, 50);
  }
  if (x < 25) {
    speedX = -speedX;
    fill(colour3);
    ellipse(x, y, 50, 50);
  }
  if (y > 625) {
    speedY = -speedY;
    fill(colour2);
    ellipse(x, y, 50, 50);
  }
  if (y < 25) {
    speedY = -speedY;
    fill(colour4);
    ellipse(x, y, 50, 50);
  }
}