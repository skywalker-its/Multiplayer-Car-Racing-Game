var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var ground;
var cars, car1, car2, car3, car4;
var car1img,car2img,car3img,car4img;

 function preload(){
   car1img = loadImage("images/car1.png")
   car2img = loadImage("images/car2.png")
   car3img = loadImage("images/car3.png")
   car4img = loadImage("images/car4.png")
   ground = loadImage("images/ground.png")
   track = loadImage("images/track.jpg");
 }
 
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear(); 
    game.play();
  }
}
