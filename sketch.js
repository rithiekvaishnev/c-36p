var database;

var form, player,game;

var gameState = 0;
var playerCount = 0;

function setup(){
  createCanvas(400,400);

  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();

  

}

function draw(){
  background("white");
}

