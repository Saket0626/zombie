var bgimg
var bg
var shooterimg,shooter
var shootershooting
var zombie
var zombiegroup
var heart1,heart2,heart3
var bullet
var bulletgroup
var heart_3
var heart_1
var heart_2
var lives=3
var reset
var gamestate="play"
function preload(){
  bgimg=loadImage("assets/bg.jpeg");
  shooterimg=loadImage("assets/shooter_1.png");
  shootershooting=loadImage("assets/shooter_3.png")
  zombieimg=loadImage("assets/zombie.png")
  heart1=loadImage("assets/heart_1.png")
  heart2=loadImage("assets/heart_2.png")
  heart3=loadImage("assets/heart_3.png")
}
function setup(){
  createCanvas(windowWidth,windowHeight)
bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgimg);
bg.scale=1
shooter=createSprite(displayWidth-1150,displayHeight-300,30,1)
shooter.addImage(shooterimg)
shooter.scale=0.4

heart_3=createSprite(1250,75)
heart_3.addImage(heart3)
heart_3.scale=0.2

heart_2=createSprite(1250,75)
heart_2.addImage(heart2)
heart_2.scale=0.2

heart_1=createSprite(1250,75)
heart_1.addImage(heart1)
heart_1.scale=0.2

//reset=createSprite(500,300)
//text("RESET")
//textSize(80)

//reset.visible=false
heart_1.visible=false
heart_2.visible=false
zombiegroup=new Group()
bulletgroup=new Group()


}
function draw(){
  if(gamestate="play"){
    background(0)
    fill("white")
    textSize(20)
    text("lives of player"+lives,1250,85)
    if(keyDown("UP_ARROW")){
  shooter.y=shooter.y-30
    }
    if(keyDown("DOWN_ARROW")){
      shooter.y=shooter.y+30
    }
    if(keyWentDown("space")){
    shooter.addImage(shootershooting)
    bullet = createSprite(shooter.x,shooter.y-33,20,10)
    bullet.velocityX=15
    bulletgroup.add(bullet)
  } else if(keyWentUp("space")){
    shooter.addImage(shooterimg)
  }
  enemy()
  if(zombiegroup.isTouching(bulletgroup)){
   for(var i=0;i<zombiegroup.length;i++){
    if(zombiegroup[i].isTouching(bulletgroup)){
      zombiegroup[i].destroy()
      bulletgroup.destroyEach()
    }
   }
   
  }
  if(zombiegroup.isTouching(shooter)){
    for(var i=0;i<zombiegroup.length;i++){
     if(zombiegroup[i].isTouching(shooter)){
       zombiegroup[i].destroy()
      lives=lives-1
       console.log(lives)
       bulletgroup.destroyEach()
     }
    }
    

    
   }
   if(lives===2){
    heart_3.visible=false
    heart_2.visible=true
   }
   if(lives===1){
    heart_2.visible=false
    heart_1.visible=true
   }
   if(lives===0){
    heart_1.visible=false
    gamestate="end"
   }
   drawSprites()
  }
  
  
 
 if(gamestate==="end"){
  background("black")
  textSize(80)
  text("GAME OVER",500,300)

  }

 // if(gamestate==="end"){
 // reset.visible=true
 // }
//if(reset.is){}
  

}
function enemy(){
if(frameCount%50===0){
zombie=createSprite(random(500,1100),random(100,500),40,40)
zombie.addImage(zombieimg)
zombie.scale=0.15
zombie.velocityX=-3
zombie.lifetime=400
zombiegroup.add(zombie)
}
}


