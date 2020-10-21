var car, wall;
var speed, weight;
var carImage1, carImage2, carImage3;
var wheel

function preLoad(){
  carImage1 = loadImage("pixel-cars-for-games-icons-set-vector-6231628(1).jpg")
  carImage2 = loadImage("yellow.jpg")
  carImage3 = loadImage("greencar.jpg")
}



function setup() {
  createCanvas(1600,400);
  speed = random(55,  90)
  weight = random(400, 1500)
  car = createSprite(50, 200,100, 50)
  car.velocityX = speed;
  wall = createSprite(1500, 200, 60, height/2)
  
  
}

function draw() {
  background("aqua");  
    

  if(wall.x-car.x <(car,width+wall.width)/2){
    car .velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22509;
    if(deformation > 180){
      car.shapeColor=color(255, 0, 0);
      car.velocityX = 60
      //ar.addImage("red car",carImage1)
    }
    if(deformation<180 && deformation> 100){
      car.shapeColor=color(230, 230, 0)
      car.velocityX = 55
      //car.addImage("yellow car", carImage2)
    }
    if (deformation<100){
      car.shapeColor=color(0, 255, 0)
      car.velocityX = 40;
      //car.addImage("green car", carImage3)
    }
  }

  if(car.isTouching(wall)){
    car.velocityX = 0;
  }

  text("speed : " + speed, 500, 50)
  drawSprites();
}