var ball  


function setup() {
  createCanvas(400,400);

ball = createSprite(190,220,30,30);


}

function draw() 
{
  background("red");
  if (keyIsDown(LEFT_ARROW)){
    ball.position.x += -5  
  }
  drawSprites();
}




