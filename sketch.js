var car,wall;
var speed,weight;
var wall, thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50,200,50,50);
  bullet.shapeColor=color("white");
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  speed=random(223,321);
  weight=random(30,52);
  thicknes=random(22,83);
  bullet.velocityX= speed;
}

function draw() {
  background(255,255,255);  
  
if(wall.x-bullet.x<(bullet.width+wall.width)/2){
   bullet.velocityX=0
   var deformation+0.5*weight*speed*speed/22509;
   if(deformation>180)
   {
    bullet.shapeColor=color("white");
   }
   

}
  drawSprites();
}