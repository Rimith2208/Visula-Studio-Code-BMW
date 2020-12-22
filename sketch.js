var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  ducati=createSprite(400,700,50,20)
  BMW=createSprite(200,400,50,20)
  benz=createSprite(400,100,50,30)
ducati.velocityY=-5
benz.velocityY=+5
ducati.shapeColor="green"
benz.shapeColor="Gold"
}


function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if (isTouching(movingRect,BMW)){
  movingRect.shapeColor = "red";
  BMW.shapeColor = "blue"; 
}
else{  movingRect.shapeColor = "brown";
BMW.shapeColor = "white";}
  bounceoff(ducati,benz)
  drawSprites();
}
