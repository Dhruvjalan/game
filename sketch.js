var form, player, game, database,gameState = 0,playerCount = 0,allPlayers;
var jet1,jet2,jetimg1,jetimg2,bckgimage;
var index=0;
var x1 = 300, y1 = 200, x2 = 600 , y2 = 200,r1 = 0, r2 = 0;
var bulletimg, bullet1,bullet2, bulletfimg,bulletf, bulletExists = 0;
var b1State = 3, b2State = 3;
var b1x,b1y,b2x,b2y; 


function preload(){
  jetimg2 = loadImage("images/jet2.png");
  jetimg1 = loadImage("images/jet1.png");
  bckgimage = loadImage("images/background.jpg");
  bulletimg = loadImage("images/bullet.png")
bulletfimg = loadImage("images/bulletf.png")

}

function setup() {
  createCanvas(800,800 );
  database = firebase.database();
  gameState = 0;

  game = new Game();
  game.start();

  game.getState();

  

}

function draw() {
  background(0,0,0);
  
 // console.log(player.rotate)

database.ref("playernull").remove()

  player.getCount();
  game.getState();
  


 // console.log(playerCount)
  
  if(playerCount === 2){
     game.updateState(1)
  }

  if(gameState=== 1){
    game.play();
    player.updatePos();
  player.getPos()
  jet1.rotation = r1;
  jet2.rotation = r2;
  jet1.x = x1;
  jet1.y = y1;
  jet2.x = x2;
  jet2.y = y2;
  bullet1.rotation = r1;
  bullet2.rotation = r2;
  bullet1.x =b1x;
  bullet1.y = b1y;
  bullet2.x = b2x;
  bullet2.y = b2y;
  
  

  if(player.rotate === 0){
    player.by=player.by- 5
    player.updatePos()
    //console.log("one")
  }
  if(player.rotate === 90){
    player.bx=player.bx + 5;
    player.updatePos()
    //console.log("two")

  }
  if(player.rotate === 180){
    player.by=allPlayers.by+ 5;
    player.updatePos()
    //console.log("three")

  }
  if(player.rotate === 270){
    player.bx= player.bx-5;
    player.updatePos();
    //console.log("four")



  }
}
  

  
}