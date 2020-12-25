var speed,weight,thickness;
var bullet,wall;



function setup() {
  createCanvas(1600,400);

  speed = Math.round(random(223,321));
  weight = Math.round(random(30,52));
  thickness = Math.round(random(22,83));

  
  bullet = createSprite(50, 200, 70, 20);
  bullet.shapeColor = color(0,0,0);

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor =(80,80,80);

}

function draw() {
  background("grey"); 
  bullet.velocityX = speed;

  if(hasCollided(bullet,wall)){

  bullet.velocityX = 0;
  bullet.x = (wall.x - thickness) + 20;

  var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

  textSize(60);
  fill ("white");
  text("Speed : " + speed,200,70);

  text("Weight : " + weight,600,70);

  text("Damage : " + Math.round(damage),1000,70);

  text("Thickness : " + thickness,970,370);

  fill (0,255,0);
  text("below 10",200,370);

  fill (255,0,0);
  text("above 10",600,370);


  if(damage > 10){

  wall.shapeColor =color(255,0,0);

  }

  if(damage < 10){

  wall.shapeColor =color(0,255,0);
  
  }

  }
  
  drawSprites();
}

