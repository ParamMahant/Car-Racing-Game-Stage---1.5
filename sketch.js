var gameState = 0;
var playerCount;
var form;
var player;
var game;
var database;

var allPlayers;

var car1,car2,car3,car4;

var cars;


function setup(){
    createCanvas(windowWidth - 20,windowHeight - 30);
    database = firebase.database()
    
    game = new Game()
    game.getState()
    game.start()

}

function draw(){
    background ("white");
 if(playerCount === 4){
     game.update(1)

 }  
 if(gameState === 1){
     game.play()
 }
}

