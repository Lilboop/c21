var fixedRect, movingRect


function setup() {
  createCanvas(400,400);
  
  fixedRect= createSprite(200, 200, 50, 50);
  movingRect= createSprite(200, 200, 50, 80);
  samanvi1= createSprite(100, 100, 80, 80);

}

function draw() {
  background("black"); 
  

  movingRect.x= mouseX;
  movingRect.y= mouseY;

  if(isTouching(movingRect,samanvi1)){
    movingRect.shapeColor= "yellow";
    samanvi1.shapeColor= "purple";
  }else{
    movingRect.shapeColor= "pink";
    samanvi1.shapeColor= "skyblue";
  }

  drawSprites();     
}

