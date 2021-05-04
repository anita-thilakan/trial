var path,mainCyclist;
var pathImg,mainRacerImg1,mainRacerImg2;
var cyclebcgell;
var pinkcg,yellowcg,redcg
var pinkopp,redopp;
var pinkimg,redimg;
var redoppfall,pinkoppfall
var gameover,gameoverimg;

var END =0;
var PLAY =1;
var gameState = PLAY;

var distance=0;

var pinkendstate,redendstate;

function preload(){
  pathImg = loadAnimation("Road.png");
  mainRacerImg1 = loadAnimation("images/mainPlayer1.png","images/mainPlayer2.png");
  mainRacerImg2= loadAnimation("images/mainPlayer3.png");
  
  cyclebell = loadSound("sound/bell.mp3")
  
  redimg =loadAnimation("/images/opponent7.png","/images/opponent8.png")
  
  pinkimg =loadAnimation("/images/opponent1.png","/images/opponent2.png")
  
  // pinkendstate = loadAnimation("/images/opponent1.png")
  // redendstate = loadAnimation("/images/opponent8.png")
  
  redoppfall = loadImage('/images/opponent9.png')
  pinkoppfall = loadImage('/images/opponent3.png')
  
  gameoverimg = loadAnimation("/images/gameOver.png")
  
  
}

function setup(){
  
createCanvas(1500,300);
  
// Moving background
path=createSprite(100,150);
path.addAnimation("path",pathImg);

//creating boy running
mainCyclist  = createSprite(70,150,20,20);
mainCyclist.addAnimation("SahilRunning",mainRacerImg1);
mainCyclist.scale=0.05;
mainCyclist.debug = "true"  
  
  
  redcg = new Group()
  pinkcg = new Group()
  
  gameover = createSprite(300,150)
  gameover.addAnimation("over",gameoverimg)
  gameover.scale = 0.5
  gameover.visible = false
}

function draw() {
  background(0);
  // console.log(frameRate())
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Distance: "+ distance,350,30);
  
  if(gameState===PLAY){
  
   mainCyclist.y = World.mouseY;
    
    if(keyDown('space'))
      {
        cyclebell.play()
      }
    
    var rand = Math.round(random(1,2))
    if(rand === 1)
       {
    redcyclists()
         
       }
    else 
      {
    pinkcyclists()
        
      }
  
   edges= createEdgeSprites();
   mainCyclist .collide(edges);
  
    
    // distance calculation
    distance = distance + Math.round(getFrameRate()/30)
    // addchallenge
   path.velocityX = -(5 + 2*distance/150);
    
  //code to reset the background
  if(path.x < 0 ){
    path.x = width/2;
  }
    
    if(redcg.isTouching(mainCyclist))
      {
        gameState = END
        redopp.addImage("red",redoppfall)
      }
    
    if(pinkcg.isTouching(mainCyclist))
      {
        gameState = END
        pinkopp.addImage("pink",pinkoppfall)
      }
    
    
 }
  
  else if(gameState === END)
    {
      
      gameover.visible = true
      textSize(20)
      text('press up arrow to restart',300,250)
      path.velocityX = 0
      mainCyclist.addAnimation("SahilRunning",mainRacerImg2)
      
      pinkcg.setLifetimeEach(-1)
      redcg.setLifetimeEach(-1)
      
      pinkcg.setVelocityXEach(0)
      redcg.setVelocityXEach(0)
      
      if(keyDown('up'))
         {
           reset();
         }
      
    }
}

function reset()
{
  distance = 0
  redcg.destroyEach()
  pinkcg.destroyEach()
  gameState = PLAY
  gameover.visible = false
 mainCyclist.addAnimation("SahilRunning",mainRacerImg1);
  
}
function redcyclists()
{
  if(frameCount % 200 ===0)
     {
         redopp = createSprite(300,random(25,300),10,10)
         redopp.addAnimation("red",redimg)
         redopp.scale = 0.05
         redopp.velocityX = -(5 + distance/150)
         redopp.lifetime= 300
       redopp.debug = "true"
       redcg.add(redopp)
     }
  
}


function pinkcyclists()
{
  if(frameCount % 100 ===0)
     {
         pinkopp = createSprite(700,random(25,300),10,10)
         pinkopp.addAnimation("pink",pinkimg)
         pinkopp.scale = 0.05
         pinkopp.velocityX = -(5 + distance/150)
         pinkopp.lifetime=300
       pinkcg.add(pinkopp)
     }
  
}