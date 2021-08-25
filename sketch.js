var PLAY=1;
var END=0;
var gameState=1;
var restart

var bg;
var allPlayers
var character
var spaces
var laserGroup;
var laserImg
var spaceship11
var restarticon


function preload() {
  bg = loadImage("space.png");
  character = loadImage("spaceship2.png");
  spaces = loadImage("spaceship.png")
  laserImg = loadImage("laser1234.png")
  restarticon = loadImage("re.png")
}

function setup() {
  createCanvas(580, 580);
  win = createSprite(200, 520, 10, 80);
  win.addImage(character)
  win.scale = 0.5
  
  ground= createSprite(250, 570, 900, 1);
  ground.visible=false;
  
  restartbutton= createSprite(280, 270, 10, 10);
  restartbutton.addImage(restarticon)
  restartbutton.scale= 0.2
  restartbutton.visible=false;
  
  score=0;
  
  laserGroup = new Group();
  spaceship11 = new Group();
}
function draw() {
  background(bg);
  
  drawSprites();
    if(spaceship11.isTouching(laserGroup)){
    
      laserGroup.destroyEach();
    spaceship11.destroyEach();
   score=score+1
    }
   textSize(25);
  text("Score : "+ score,250,50);
  
  
  
   if (keyIsDown(RIGHT_ARROW)) {
    win.velocityX = +4
  }
  else {
    win.velocityX = 0
  }

  if (keyIsDown(LEFT_ARROW)) {
    win.velocityX = -4
  }


  if (keyDown("space")) {
    createLaser();

  }


  
   
  if(gameState===PLAY){
    

  
  if (frameCount % 240 === 0) {
    createspaceships()
  }
 
  
}
  
    if(spaceship11.isTouching(ground)){
      gameState=END
      restartbutton.visible=true;
  
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250)
      spaceship11.setVelocityYEach(0);
      
    
  
   
 }
  
    if(spaceship11.isTouching(win)){
      gameState=END
      restartbutton.visible=true;
  
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250)
      spaceship11.setVelocityYEach(0);
      
   
  
   
 }
  
   if(mousePressedOver(restartbutton)){
     restart()
   }
  
  }
  
  

 function createspaceships() {

    spaceship = createSprite(random(50, 520), 100, 400,900);
    spaceship.addImage(spaces);
    spaceship.scale = 0.3;
    spaceship.velocityY = 2;
    spaceship.lifetime = 950;
    spaceship11.add(spaceship);
 }


function createLaser() {
  var laser = createSprite(100, 100, 60, 10);
  laser.scale = 0.1
  laser.addImage(laserImg);
  laser.x = win.x
  laser.y = win.y;
  laser.velocityY = -4;
  laser.lifetime = 200;
  laser.scale = 0.3;
  laserGroup.add(laser);

}


function restart(){
    spaceship11.setVelocityYEach(0);
  gameState=1
  laserGroup.destroyEach();
    spaceship11.destroyEach();
      score=0
}

