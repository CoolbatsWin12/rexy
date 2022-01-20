
function preload(){
  rex=loadAnimation("trex1.png","trex3.png","trex4.png")
  grounds=loadImage("ground2.png")
  cloudexe=loadImage("cloud.png")
}

function setup(){
  createCanvas(600,200)
  trex=createSprite(60,180,10,5)
  trex.addAnimation("sprint",rex)
  trex.scale=0.5
  ground=createSprite(300,180,600,20)
  ground.addImage(grounds)
  ground2=createSprite(300,190,600,20)
  ground2.visible=false
  
}

function draw(){
  background("grey")
  trex.collide(ground2)
  if(keyDown("space") && trex.y>156){
    trex.velocityY=-5
  }
  trex.velocityY=trex.velocityY+0.2
  ground.velocityX=-3
  if(ground.x<0){
    ground.x=600
  }
  clouds()
  
  drawSprites()
}

function clouds(){
  if(frameCount %50===0){
  cloud=createSprite(600,random(30,100),10,10)
  cloud.velocityX = -4
  cloud.addImage(cloudexe)
  cloud.scale = 0.8
  trex.depth=cloud.depth+1
  }
}
