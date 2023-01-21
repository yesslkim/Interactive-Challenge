let direction = 1;

function setup() {
  createCanvas(400, 400);
  background('#ffa065');
  angleMode(DEGREES);
  frameRate(20);
}

function draw() {
  background('#ffa065');
  for(let i = 0; i < 55; i++){
    createStar(random(10, 90),random(10, 90));
  }
  createRabbit();
  
  noStroke();
  fill('#fff');
  textAlign(CENTER,CENTER);
  textSize(35);
  text('Rabbit', getX(50), getY(90))
}

function createRabbit() {
  translate(0,-30);
  noStroke();
  ellipse(getX(50), getY(60), 200, 170);
  
  // ears
  push();
    rotate(60);
    ellipse(200, -60, 100, 50);
  pop();
  push();
    rotate(-60);
    ellipse(0,280,100, 50)
  pop();
  
  stroke('#000');
  
  // nose
  push()
    strokeWeight(5);
    line(getX(48), getY(65),getX(53), getY(65));
  pop() 
  
  // eye
  push();
    strokeWeight(10);
    point(getX(43), getY(55));
    point(getX(57), getY(55));
  pop();
}

function createStar(x, y){
  push();
    if(frameCount === 6 || frameCount === -6) {
      direction *= -1
      frameCount = 0;
    }
  
    noStroke();
    fill('yellow');
    ellipse(getX(x), getY(y), frameCount * direction, 10);
    ellipse(getX(x), getY(y), 10, frameCount * direction);
  pop();
}

function getX(percent){
  return width * percent / 100;
}

function getY(percent){
  return height * percent / 100;
}