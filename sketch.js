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
//   mainRacerImg1 = loadAnimation("images/mainPlayer1.png","images/mainPlayer2.png");
//   mainRacerImg2= loadAnimation("images/mainPlayer3.png");
  
//   cyclebell = loadSound("sound/bell.mp3")
  
//   redimg =loadAnimation("/images/opponent7.png","/images/opponent8.png")
  
//   pinkimg =loadAnimation("/images/opponent1.png","/images/opponent2.png")
  
//   // pinkendstate = loadAnimation("/images/opponent1.png")
//   // redendstate = loadAnimation("/images/opponent8.png")
  
//   redoppfall = loadImage('/images/opponent9.png')
//   pinkoppfall = loadImage('/images/opponent3.png')
  
//   gameoverimg = loadAnimation("/images/gameOver.png")
  
  
}

function setup(){
  
createCanvas(1500,300);
  
// Moving background
path=createSprite(100,150);
path.addAnimation("path",pathImg);

//creating boy running
// mainCyclist  = createSprite(70,150,20,20);
// mainCyclist.addAnimation("SahilRunning",mainRacerImg1);
// mainCyclist.scale=0.05;
// mainCyclist.debug = "true"  
  
  
//   redcg = new Group()
//   pinkcg = new Group()
  
//   gameover = createSprite(300,150)
//   gameover.addAnimation("over",gameoverimg)
//   gameover.scale = 0.5
//   gameover.visible = false
}

function draw()
{
  drawSprites()
}
