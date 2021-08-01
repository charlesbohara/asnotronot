var a
var sleep,brush,gym,eat,bath,move,bg
function preload()
{
 gym= loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png",);
eat = loadAnimation("eat1.png","eat2.png");
 sleep= loadAnimation("sleep.png");
 brush =loadAnimation("brush.png");
 bath=loadAnimation("bath1.png","bath2.png");
 move =loadAnimation("move.png","move1.png");
 bg=loadImage("iss.png")
}

function setup() {
  createCanvas(800,400);
  a= createSprite(300,230);
  a.addAnimation("sleeping",sleep)
  a.scale=0.1;
}

function draw() {
  background(bg);  
  drawSprites();
  edges=createEdgeSprites();
  a.bounceOff(edges);

  if(keyDown("UP_ARROW"))
  {
    a.addAnimation("brushing",brush);
    a.changeAnimation("brushing")
    a.y=350
    a.velocityX=0;
    a.velocityY=0;
  }

  if(keyDown("DOWN_ARROW"))
  {
    a.addAnimation("gyming",gym);
    a.changeAnimation("gyming")
    a.y=350
    a.velocityX=0;
    a.velocityY=0;
  }
  if(keyDown("LEFT_ARROW"))
  {
    a.addAnimation("eating",eat);
    a.changeAnimation("eating")
    a.y=350
    a.x=150
    a.velocityX=0.5;
    a.velocityY=0.5;
  }
  if(keyDown("RIGHT_ARROW"))
  {
    a.addAnimation("bathing",bath);
    a.changeAnimation("bathing")
    a.y=300
    a.velocityX=0;
    a.velocityY=0;
  }
  if(keyDown("m"))
  {
    a.addAnimation("moving",move);
    a.changeAnimation("moving")
   
    a.velocityX=1;
    a.velocityY=1;
   
  }
  
}
