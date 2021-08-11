class Game{
    constructor(){}
    getState (){
        database.ref("gameState")
        .on("value",(data)=>{
            gameState = data.val()
        })
    }
    update(state){
      database.ref("/").update({
          gameState:state
      })  
    }
    async start(){
        if(gameState === 0){
          player = new Player();
          var playerCountRef = await database.ref('playerCount').once("value");
          if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
          }
          form = new Form()
          form.display();
        }
    
        car1 = createSprite(100,200);
        car2 = createSprite(300,200);
        car3 = createSprite(500,200);
        car4 = createSprite(700,200);
        cars = [car1, car2, car3, car4];
      }
    

      play(){
        form.hide();
    
        Player.getPlayerInfo();
        
        if(allPlayers !== undefined){
          //var display_position = 100;
          
          //index of the array
          var index = 0;
    
          //x and y position of the cars
          var x = 0;
          var y;
    
          for(var plr in allPlayers){
            //add 1 to the index for every loop
            index = index + 1 ;
    
            //position the cars a little away from each other in x direction
            x = x + 200;
            //use data form the database to display the cars in y direction
            y = height - allPlayers[plr].distance;
            cars[index-1].x = x;
            cars[index-1].y = y;
    
            if (index === player.index){
              cars[index - 1].shapeColor = "red";
             camera.position.x = width/2;
             camera.position.y = cars[index-1].y
            }
           
            //textSize(15);
            //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
          }
    
        }
    
        if(keyIsDown(UP_ARROW) && player.index !== null){
          player.distance +=10
          player.update();
        }
    
        drawSprites();
      }
}