var wall,thickness;
var bullet,speed,weight;
function setup() {
  createCanvas(800,400);
  wall = createSprite(800, 200, thickness,height/2);
  wall.shapeColor = "Red";
  thickness = random(22,83);
  speed = random(223,321);
  weight = random(30,52);
  bullet = createSprite(50,200,50,5);
  bullet.shapeColor = "yellow";
  bullet.velocityX = speed; 
}

function draw() {
  background(255,255,255);  
  if(hasCollided(bullet,wall))
  {
   var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness)
   if(damage>10)
   {
     wall.shapeColor = "yellow";
   }
   else
   {
    wall.shapeColor = "green";
   }
  }
  
  drawSprites();
}
function hasCollided(b,w)
{
  if(b.x+b.width>=w.x)
  {
    return true
  }
  else
  {
    return false
  }
  
}
