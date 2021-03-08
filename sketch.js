var angle = 5;
var run = 5;
var angle2 = 5;

function preload(){
  bgImg=loadImage("image/bg1.png");
fourImg=loadAnimation("image/ben.png","image/player.png","image/fourarms.png");
fourImg2=loadAnimation("image/nobita.png","image/krish.png","image/boy.png");
upImg=loadImage("image/up.png");
leftImg=loadImage("image/left.png");
rightImg=loadImage("image/right.png");
bit=loadAnimation("image/bit.png","image/four.png");
bit2=loadAnimation("image/bit2.png","image/b2a.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  

  back=createSprite(windowWidth/2+2000,windowHeight/2);
  back.addImage(bgImg);
  back.scale=2.6;
  

  player=createSprite(windowWidth/2,windowHeight/2);
  player.addAnimation("runing",fourImg);
player.scale=0.7;
 
  edege=createSprite(windowWidth/2-80,windowHeight/2,5,600)
  edege.visible=false;
  
  
  wall1=createSprite(windowWidth/2+2000,windowHeight/2+180,5000,20)
  wall1.visible=false;
  
  wall2=createSprite(windowWidth/2+2000,windowHeight/2+170,5000,20)
  wall2.visible=false;

  
  up = createImg('image/up.png');
 up.position(windowWidth/2-407,windowHeight/2+60);
 up.size(75, 75);

 left = createImg('image/left.png');
left.position(windowWidth/2-455,windowHeight/2+140);
left.size(70, 70);

  right = createImg('image/right.png');
 right.position(windowWidth/2-355,windowHeight/2+140);
 right.size(70, 70);

 attack = createImg('image/attack.png');
 attack .position(windowWidth/2+355,windowHeight/2+120);
 attack .size(70, 70);





}

function draw() { 
  background(0);
  drawSprites();

  player.collide(edege)
  player.collide(wall1);
  
    player.velocityY=player.velocityY+1.2;
  
    if(player.x>500){
      camera.x=player.x;
     }
  
  
  
   if (keyDown(RIGHT_ARROW)) {
    player.x=player.x+15;
    if(frameCount % 9 === 0){
      player.addAnimation("runing",fourImg);
      run=5;
     }
    }
  
    
       
   if (keyDown(LEFT_ARROW)) {
    player.x=player.x-10;
   if(frameCount % 10 === 0){
    player.addAnimation("runing",fourImg2);
    run=4;
   }
   } 
  


  
     if(player.isTouching(wall2)){
      if (keyDown(UP_ARROW)) {
        player.velocityY=-15;
        
        }  
      
      }
  
  

  



up.mousePressed(()=>{
  if(player.isTouching(wall2)){
    player.velocityY=-15;
      } 
})

 
left.mousePressed(()=>{
  player.x=player.x-50;
run=4;
   player.addAnimation("runing",fourImg2);

})
  
  
right.mousePressed(()=>{
  player.x=player.x+50;
  player.addAnimation("runing",fourImg);  
  run=5;
})


attack.mousePressed(()=>{
 angle=4;
})


if(angle === 4){
  if(run === 5){
  player.addAnimation("runing",bit);  
  }

  if(run === 4){
    player.addAnimation("runing",bit2);  
    }

if(frameCount % 16 === 0){
  player.addAnimation("runing",fourImg);  
  angle=5;
}

}
 

  }

 
  
  